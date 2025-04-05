import React, { useState } from 'react';
import IdleAction from "./standart-action/idleAction"
import suicideAction from "./standart-action/suicideAction"
import dayStatusList from "./helpers/dayStatusList"
import friendlyAction from "./standart-action/friendlyAction"
import AggresiveAction from "./standart-action/AggresiveAction"
import aloneAction from "./standart-action/aloneAction"
import shuffleArr from "./helpers/shuffleArr"
import GameRender from "./GameRender.js"


function Game(props) {
    const [stateBattle, setStateBattle] = useState({ day: 1, action: 'Начало первого дня', time: "День" });

    function addStatuses() {
        let newArray = [...props.usersList];
        props.usersList.forEach((user, index) => {
            if (newArray[index].isAlive) {
                let newInfo;
                if (newArray[index].isUsed) {
                    // идея в том, что использованные в доп действиях с кем-то должны получит скрытый идл и не рисоваться (это очень костыльно)
                    newInfo = { text: IdleAction(0, user.name), isAlive: true };
                    newArray[index].statusText = newInfo.text;
                    newArray[index].isAlive = newInfo.isAlive;
                    newArray[index].isSettedStatus = true;
                    newArray[index].murdersNumber = user.murdersNumber;
                } else {
                    // обычное назначение событий
                    newInfo = setStatus(user, newArray);
                    console.log(props.postGameList);
                    if (!newInfo.isAlive) {
                        let postGameNew = props.postGameList;
                        postGameNew.unshift({ name: user.name, murdersNumber: newInfo.murdersNumber });
                        props.setPostGameList(postGameNew);
                    }
                    console.log(props.postGameList);
                    newArray[index].statusText = newInfo.text;
                    newArray[index].isAlive = newInfo.isAlive;
                    newArray[index].isSettedStatus = true;
                    newArray[index].murdersNumber = newInfo.murdersNumber;
                    if (newInfo.anotherUserIndex !== undefined) {
                        newArray[index].secondUser = newArray[newInfo.anotherUserIndex];
                        newArray[newInfo.anotherUserIndex].isUsed = true;
                        newArray[newInfo.anotherUserIndex].isAlive = newInfo.isAggresiveAction ? false : true;
                        if (!newArray[newInfo.anotherUserIndex].isAlive) {
                            let postGameNew = props.postGameList;
                            postGameNew.unshift({ name: newArray[newInfo.anotherUserIndex].name, murdersNumber: newArray[newInfo.anotherUserIndex].murdersNumber });
                            props.setPostGameList(postGameNew);
                        }
                    }
                }
            }
        })
        newArray = shuffleArr(newArray)
        props.setUsersList(newArray);
    }

    function clearStatuses() {
        const newArray = [...props.usersList];
        props.usersList.forEach((user, index) => {
            newArray[index].isSettedStatus = false;
            newArray[index].isUsed = false;
            if (newArray[index].isAlive) {
                newArray[index].statusText = null;
                newArray[index].secondUser = null;
            } else {
                newArray[index].isfinallyMovedFromGame = true;
                newArray[index].statusText = 'не участвует в битве';
            }

        })
        props.setUsersList(newArray);
    }

    function setStatus(user, newArray) {
        let currentFriendName = user.name;

        let action = Math.floor(Math.random() * 100);
        if (action >= 0 && action <= 10) {
            action = 'suicide';
        } else if (action > 10 && action <= 50) {
            action = 'idle';
        } else if (action > 50 && action <= 80) {
            action = 'friendly';
        } else if (action > 80 && action <= 100) {
            action = 'aggresive';
        }

        const result = newArray.findIndex((item) => (item.name !== currentFriendName && item.isAlive && !item.isSettedStatus && !item.isUsed));
        switch (action) {
            case 'suicide':
                // suicide
                let suicideStatusNumber = Math.floor(Math.random() * (suicideAction.caseLength));
                return { text: suicideAction(suicideStatusNumber, user.name), isAlive: false, murdersNumber: user.murdersNumber };
            case 'idle':
                // idle
                let idleStatusNumber = Math.floor(Math.random() * (IdleAction.caseLength));
                return { text: IdleAction(idleStatusNumber, user.name), isAlive: true, murdersNumber: user.murdersNumber };
            case 'friendly':
                // friendly 
                let friendlyStatusNumber = Math.floor(Math.random() * (friendlyAction.caseLength));
                let anotherUserIndex;
                let secondName;
                if (result !== -1) {
                    anotherUserIndex = result;
                    secondName = props.usersList[anotherUserIndex].name;
                    return { text: friendlyAction(friendlyStatusNumber, currentFriendName, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
                } else {
                    let aloneActionNumber = Math.floor(Math.random() * (aloneAction.caseLength));
                    return { text: aloneAction(aloneActionNumber, user.name), isAlive: true, murdersNumber: user.murdersNumber };
                }
            case 'aggresive':
                // aggresive 
                let aggresiveStatusNumber = Math.floor(Math.random() * (AggresiveAction.caseLength));
                let diedUserIndex;
                let diedUser;
                if (result !== -1) {
                    diedUserIndex = result;
                    diedUser = props.usersList[diedUserIndex].name;
                    return { text: AggresiveAction(aggresiveStatusNumber, currentFriendName, diedUser), isAlive: true, anotherUserIndex: diedUserIndex, isAggresiveAction: true, murdersNumber: user.murdersNumber + 1 };
                } else {
                    let aloneActionNumber = Math.floor(Math.random() * (aloneAction.caseLength));
                    return { text: aloneAction(aloneActionNumber, user.name), isAlive: true, murdersNumber: user.murdersNumber };
                }
            default:
        }
    }


    function nextDay() {
        clearStatuses();
        let statusNumber = Math.floor(Math.random() * dayStatusList.length);
        let newDay = stateBattle.time === "Ночь" ? stateBattle.day + 1 : stateBattle.day;
        setStateBattle({ day: newDay, time: stateBattle.time === "Ночь" ? 'День' : "Ночь", action: dayStatusList[statusNumber].status });
        if ((props.usersList.filter((user) => user.isAlive == true)).length <= 1) {
            props.endGame();
        }
        addStatuses();
    }

 

    return (
        <GameRender stateBattle={stateBattle} nextDay={nextDay} usersList={props.usersList}></GameRender>
        // <div className="">
        //     <div>{stateBattle.time} - {stateBattle.day}</div>
        //     <div>{stateBattle.action}</div>
        //     <div className="userlist">{renderParty()}</div>
        //     <button onClick={() => { nextDay() }}>Дальше</button>
        // </div>
    );
}

export default Game;