import React, { useState, useEffect } from "react";

import shuffleArr from "./helpers/shuffleArr";
import GameRender from "./GameRender.js";
import DeadListRender from './deadListRender.js'
import dayStatusList from "./helpers/dayStatusList";
import getRandonNumber from "./helpers/getRandonNumber.js";

import IdleAction from "./actions/standart-action/day/idleActionDAY.js";

import suicideActionSelector from "./actionSelectors/suicideActionSelector.js";
import friendlyActionSelector from "./actionSelectors/friendlyActionSelector.js";
import aloneActionSelector from "./actionSelectors/aloneActionSelector.js";
import idleActionSelector from "./actionSelectors/idleActionSelector.js";
import aggresiveActionSelector from "./actionSelectors/aggresiveActionSelector.js";
import groupActionSelector from './actionSelectors/groupActionSelector.js'

import { DAY } from './helpers/constants.js'
import { NIGHT } from './helpers/constants.js'


function Game(props) {
  const [stateBattle, setStateBattle] = useState({
    day: 1,
    action: "Начало первого дня",
    time: DAY,
    actionType: "standart",
  });
  const [isDeadListShow, setIsDeadListShow] = useState(false);
  const [deadCharactersListAfterDay, setDeadCharactersListAfterDay] = useState([]);

  useEffect(() => {
    if (stateBattle.action !== "Начало первого дня") {
      addStatuses();
      props.setdayTime(stateBattle.time);
    }
  }, [stateBattle]);

  function setUsedUser(user, index, newInfo, newArray) {
    newInfo = { text: IdleAction(0, user.name), isAlive: true };
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
      newArray[index].secondUser = [newArray[newInfo.anotherUserIndex], newArray[newInfo.anotherUserIndex2]];
      newArray[newInfo.anotherUserIndex2].isUsed = true;
    }
    else {
      newArray[index].secondUser = [newArray[newInfo.anotherUserIndex]];
    }
    newArray[newInfo.anotherUserIndex].isUsed = true;
    newArray[newInfo.anotherUserIndex].isAlive =
      newInfo.isAggresiveAction ? false : true;
    if (!newArray[newInfo.anotherUserIndex].isAlive) {
      movedUserInPostGameList(newArray[newInfo.anotherUserIndex], newArray[newInfo.anotherUserIndex]);
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
    let action = getRandonNumber(100);
    if (action >= 0 && action <= 10) {
      action = "suicide";
    } else if (action > 10 && action <= 45) {
      action = "idle";
    } else if (action > 45 && action <= 75) {
      action = "friendly";
    } else if (action > 75 && action <= 90) {
      action = "aggresive";
    } else if (action > 90 && action <= 100) {
      action = "group";
    }

    const result = newArray.findIndex(
      (item) =>
        item.name !== user.name &&
        item.isAlive &&
        !item.isSettedStatus &&
        !item.isUsed
    );
    let result2;
    if (result !== -1) {
      result2 = newArray.findIndex(
        (item) =>
          item.name !== user.name && item.name !== newArray[result].name &&
          item.isAlive &&
          !item.isSettedStatus &&
          !item.isUsed
      );
    }
    switch (action) {
      case "suicide":
        // suicide
        return suicideActionSelector(stateBattle.actionType, user, stateBattle.time);
      case "idle":
        // idle
        return idleActionSelector(stateBattle.actionType, user, stateBattle.time);
      case "friendly":
        // friendly
        if (result !== -1) {
          let anotherUserIndex = result;
          let secondName = props.usersList[anotherUserIndex].name;
          return friendlyActionSelector(
            stateBattle.actionType,
            user,
            secondName,
            anotherUserIndex,
            stateBattle.time
          );
        } else {
          return aloneActionSelector(stateBattle.actionType, user, stateBattle.time);
        }
      case "aggresive":
        // aggresive
        if (result !== -1) {
          let diedUserIndex = result;
          let diedUser = props.usersList[diedUserIndex].name;
          return aggresiveActionSelector(
            stateBattle.actionType,
            user,
            diedUser,
            diedUserIndex,
            stateBattle.time
          );
        } else {
          return aloneActionSelector(stateBattle.actionType, user, stateBattle.time);
        }
      case "group":
        // group
        if (result !== -1 && result2 !== -1) {
          let anotherUserIndex = result;
          let secondName = props.usersList[anotherUserIndex].name;
          let anotherUserIndex2 = result2;
          let secondName2 = props.usersList[anotherUserIndex2].name;
          return groupActionSelector(
            stateBattle.actionType,
            user,
            secondName,
            secondName2,
            anotherUserIndex,
            anotherUserIndex2,
            stateBattle.time
          );
        } else {
          return aloneActionSelector(stateBattle.actionType, user, stateBattle.time);
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
      let newDay =
        stateBattle.time === NIGHT ? stateBattle.day + 1 : stateBattle.day;
      setStateBattle({
        day: newDay,
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
      {!isDeadListShow && <GameRender
        stateBattle={stateBattle}
        nextDay={nextDay}
        usersList={props.usersList}
      ></GameRender>}
      {isDeadListShow && <DeadListRender
        deadCharactersListAfterDay={deadCharactersListAfterDay}
        nextDay={nextDay}
      ></DeadListRender>}
    </>
  );
}

export default Game;
