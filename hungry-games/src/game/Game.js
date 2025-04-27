import React, { useState, useEffect } from "react";

import shuffleArr from "./helpers/shuffleArr";
import GameRender from "./GameRender.js";
import DeadListRender from "../users/deadListRender.js";
import dayStatusList from "./helpers/dayStatusList";
import getRandonNumber from "./helpers/getRandonNumber.js";

import suicideActionSelector from "./actionSelectors/suicideActionSelector.js";
import friendlyActionSelector from "./actionSelectors/friendlyActionSelector.js";
import aloneActionSelector from "./actionSelectors/aloneActionSelector.js";
import idleActionSelector from "./actionSelectors/idleActionSelector.js";
import aggresiveActionSelector from "./actionSelectors/aggresiveActionSelector.js";
import groupActionSelector from "./actionSelectors/groupActionSelector.js";
import actionSelector from "./helpers/actionSelector.js";
import {
  DAY,
  NIGHT,
  SUICIDE,
  IDLE,
  FRIENDLY,
  AGGRESIVE,
  GROUP,
  FIRST_DAY,
} from "./helpers/constants.js";

function Game(props) {
  const [stateBattle, setStateBattle] = useState({
    day: 1,
    action: FIRST_DAY,
    time: DAY,
    actionType: "standart",
  });
  const [isDeadListShow, setIsDeadListShow] = useState(false);
  const [deadCharactersListAfterDay, setDeadCharactersListAfterDay] = useState(
    []
  );

  useEffect(() => {
    if (stateBattle.action !== FIRST_DAY) {
      addStatuses();
      props.setdayTime(stateBattle.time);
    }
  }, [stateBattle]);

  function setUsedUser(user, index, newInfo, newArray) {
    newInfo = { text: "used", isAlive: true };
    newArray[index].statusText = newInfo.text;
    newArray[index].isAlive = newInfo.isAlive;
    newArray[index].isSettedStatus = true;
    newArray[index].murdersNumber = user.murdersNumber;
  }

  function movedUserInPostGameList(user, newInfo) {
    let postGameNew = props.postGameList;
    postGameNew.unshift({
      name: user.name,
      img: user.img,
      murdersNumber: newInfo.murdersNumber,
    });
    props.setPostGameList(postGameNew);
  }

  function setAggresive_FriendlyStatuses(index, newArray, newInfo) {
    if (newInfo.anotherUserIndex2 !== undefined) {
      newArray[index].secondUser = [
        newArray[newInfo.anotherUserIndex],
        newArray[newInfo.anotherUserIndex2],
      ];
      newArray[newInfo.anotherUserIndex2].isUsed = true;
    } else {
      newArray[index].secondUser = [newArray[newInfo.anotherUserIndex]];
    }
    newArray[newInfo.anotherUserIndex].isUsed = true;
    newArray[newInfo.anotherUserIndex].isAlive = newInfo.isAggresiveAction
      ? false
      : true;
    if (!newArray[newInfo.anotherUserIndex].isAlive) {
      movedUserInPostGameList(
        newArray[newInfo.anotherUserIndex],
        newArray[newInfo.anotherUserIndex]
      );
      setDeadCharacters(newArray[newInfo.anotherUserIndex]);
    }
  }

  function setDeadCharacters(user) {
    let xs = deadCharactersListAfterDay;
    xs.push({
      name: user.name,
      img: user.img,
    });
    setDeadCharactersListAfterDay(xs);
  }

  function addStatuses() {
    let newArray = [...props.usersList];
    props.usersList.forEach((user, index) => {
      if (newArray[index].isAlive) {
        let newInfo;
        if (newArray[index].isUsed) {
          // идея в том, что использованные в доп действиях с кем-то должны получит скрытый идл и не рисоваться (это очень костыльно)
          setUsedUser(user, index, newInfo, newArray);
        } else {
          // обычное назначение событий
          newInfo = setStatus(user, newArray);
          if (!newInfo.isAlive) {
            setDeadCharacters(user);
            movedUserInPostGameList(user, newInfo);
          }
          newArray[index].statusText = newInfo.text;
          newArray[index].isAlive = newInfo.isAlive;
          newArray[index].isSettedStatus = true;
          newArray[index].murdersNumber = newInfo.murdersNumber;
          if (newInfo.anotherUserIndex !== undefined) {
            setAggresive_FriendlyStatuses(index, newArray, newInfo);
          }
          if (newInfo.anotherUserIndex2 !== undefined) {
            setAggresive_FriendlyStatuses(index, newArray, newInfo);
          }
        }
      }
    });
    newArray = shuffleArr(newArray);
    props.setUsersList(newArray);
  }

  function clearStatuses() {
    const newArray = [...props.usersList];
    props.usersList.forEach((user, index) => {
      newArray[index].isSettedStatus = false;
      newArray[index].isUsed = false;
      if (newArray[index].isAlive) {
        newArray[index].statusText = null;
        newArray[index].secondUser = [];
      } else {
        newArray[index].isfinallyMovedFromGame = true;
        newArray[index].statusText = "не участвует в битве";
      }
    });
    props.setUsersList(newArray);
  }

  function setStatus(user, newArray) {
    let action = actionSelector(getRandonNumber(100));
    let secondFreeСharacter;
    let freeСharacter = newArray.findIndex(
      (item) =>
        item.name !== user.name &&
        item.isAlive &&
        !item.isSettedStatus &&
        !item.isUsed
    );
    if (freeСharacter !== -1) {
      secondFreeСharacter = newArray.findIndex(
        (item) =>
          item.name !== newArray[freeСharacter].name &&
          item.name !== user.name &&
          item.isAlive &&
          !item.isSettedStatus &&
          !item.isUsed
      );
    }
    let paramArr = [stateBattle.actionType, user, stateBattle.time];
    switch (action) {
      case SUICIDE:
        // suicide
        return suicideActionSelector(paramArr);
      case IDLE:
        // idle
        return idleActionSelector(paramArr);
      case FRIENDLY:
        // friendly
        if (freeСharacter !== -1) {
          return friendlyActionSelector(
            paramArr,
            props.usersList[freeСharacter].name,
            freeСharacter
          );
        } else {
          return aloneActionSelector(paramArr);
        }
      case AGGRESIVE:
        // aggresive
        if (freeСharacter !== -1) {
          return aggresiveActionSelector(
            paramArr,
            props.usersList[freeСharacter].name,
            freeСharacter
          );
        } else {
          return aloneActionSelector(paramArr);
        }
      case GROUP:
        // group
        if (freeСharacter !== -1 && secondFreeСharacter !== -1) {
          return groupActionSelector(
            paramArr,
            props.usersList[freeСharacter].name,
            props.usersList[secondFreeСharacter].name,
            freeСharacter,
            secondFreeСharacter
          );
        } else {
          return aloneActionSelector(paramArr);
        }
      default:
    }
  }

  function getSpecialDay() {
    if (getRandonNumber(10) === 9) {
      // 10% шанса
      return getRandonNumber(dayStatusList.length); // потом переписать на нормальное
    } else return 0;
  }

  function nextDay() {
    if (stateBattle.time === NIGHT && !isDeadListShow) {
      setIsDeadListShow(true);
    } else {
      clearStatuses();
      let statusNumber = getSpecialDay();
      setStateBattle({
        day: stateBattle.time === NIGHT ? stateBattle.day + 1 : stateBattle.day,
        time: stateBattle.time === NIGHT ? DAY : NIGHT,
        action: dayStatusList[statusNumber].action,
        actionType: dayStatusList[statusNumber].actionType,
      });
      if (props.usersList.filter((user) => user.isAlive == true).length <= 1) {
        props.endGame();
      }
      if (stateBattle.time === NIGHT) {
        setIsDeadListShow(false);
        setDeadCharactersListAfterDay([]);
      }
    }
  }

  return (
    <>
      {!isDeadListShow && (
        <GameRender
          stateBattle={stateBattle}
          nextDay={nextDay}
          usersList={props.usersList}
        ></GameRender>
      )}
      {isDeadListShow && (
        <DeadListRender
          deadCharactersListAfterDay={deadCharactersListAfterDay}
          nextDay={nextDay}
        ></DeadListRender>
      )}
    </>
  );
}

export default Game;
