import React, { useState, useEffect } from 'react';
import JsxParser from 'react-jsx-parser';
import IdleAction from "./action/idleAction"
import suicideAction from "./action/suicideAction"
import dayStatusList from "./action/dayStatusList"
import friendlyAction from "./action/friendlyAction"
import AggresiveAction from "./action/AggresiveAction"
import aloneAction from "./action/aloneAction"

function Game(props) {
    const [stateBattle, setStateBattle] = useState({ day: 1, action: 'Начало первого дня', time: "День" });

    function addStatuses() {
        const newArray = [...props.usersList];
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
                    console.log(newInfo)
                    newArray[index].statusText = newInfo.text;
                    newArray[index].isAlive = newInfo.isAlive;
                    newArray[index].isSettedStatus = true;
                    newArray[index].murdersNumber = newInfo.murdersNumber;
                    if (newInfo.anotherUserIndex !== undefined) {
                        newArray[index].secondUser = newArray[newInfo.anotherUserIndex];
                        newArray[newInfo.anotherUserIndex].isUsed = true;
                        newArray[newInfo.anotherUserIndex].isAlive = newInfo.isAggresiveAction ? false : true;
                    }
                }
            }
        })
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
                let postGameNew = [...props.postGameList];
                postGameNew.push({ name: user.name, murdersNumber: user.murdersNumber });
                props.setPostGameList(postGameNew);
                console.log('suicide')
                console.log(user)
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
                    let postGameNew = [...props.postGameList];
                    postGameNew.push({ name: diedUser, murdersNumber: props.usersList[diedUserIndex].murdersNumber });
                    props.setPostGameList(postGameNew);
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
        let newTime = stateBattle.time === "Ночь" ? 'День' : "Ночь";
        setStateBattle({ day: newDay, time: newTime, action: dayStatusList[statusNumber].status });
        if ((props.usersList.filter((user) => user.isAlive == true)).length <= 1) {
            props.endGame();
        }

        addStatuses();
    }

    function renderParty() {
        return props.usersList.map((user, index) => {
            if (user.secondUser) {
                return (
                    <div className='cornflowerblue'>
                        <div className='userItem-wrap'>
                            <div className={(user.isAlive ? 'alive' : 'dead') + ' userItem'}>
                                <div className="userName">{user.name}</div>
                                <img className="userImage" src={user.img} />
                                <div className="userName">{user.isAlive ? 'живой' : 'мертв'}</div>
                                {/* <div>isUsed={user.isUsed.toString()}</div>
                                <div>isfinallyMovedFromGame = {user.isfinallyMovedFromGame.toString()}</div> */}
                            </div>
                            <div className={(user.secondUser.isAlive ? 'alive' : 'dead') + " userItem"}>
                                <div className="userName">{user.secondUser.name}</div>
                                <img className="userImage" src={user.secondUser.img} />
                                <div className="userName">{user.secondUser.isAlive ? 'живой' : 'мертв'}</div>
                                {/* <div>isUsed={user.secondUser.isUsed.toString()}</div>
                                <div>isfinallyMovedFromGame = {user.secondUser.isfinallyMovedFromGame.toString()}</div> */}
                            </div>
                        </div>
                        <div><JsxParser jsx={user.statusText} /></div>
                    </div>)

            } else {
                let additionalClass = user.isAlive ? ' alive' : ' dead';
                return <div className={user.isUsed ? 'userItem hidden' : 'userItem' + (user.isfinallyMovedFromGame ? ' ordered' : '') + additionalClass}>
                    <div className="userName">{user.name}</div>
                    {/* <div>isUsed={user.isUsed.toString()}</div> */}
                    <img className="userImage" src={user.img} />
                    {user.secondUser && <img className="userImage" src={user.secondUser.img} />}

                    <div className="userName">{user.isAlive ? 'живой' : 'мертв'}</div>
                    <div><JsxParser jsx={user.statusText} /></div>
                    {/* <div>isfinallyMovedFromGame = {user.isfinallyMovedFromGame.toString()}</div> */}
                </div>
            }
        }

        );
    }

    return (
        <div className="">
            <div>{stateBattle.time} - {stateBattle.day}</div>
            <div>{stateBattle.action}</div>
            <div className="userlist">{renderParty()}</div>
            <button onClick={() => { nextDay() }}>Дальше</button>
        </div>
    );
}

export default Game;