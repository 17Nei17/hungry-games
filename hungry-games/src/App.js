import "./App.css";
import React, { useState, useEffect } from "react";
import UserList from "./users/UserList";
import Game from "./game/Game";
import End from "./end/End";
import About from "./about/About";
import startGameAction from "./game/actions/start-game-action/startGameAction";
import getRandonNumber from "./game/helpers/getRandonNumber";
import { DAY } from './game/helpers/constants';

let version = "ver 1.0.2";

function App() {
  const [dayTime, setdayTime] = useState("");
  const [appState, setAppState] = useState("settings");
  const [usersList, setUsersList] = useState([]);
  const [postGameList, setPostGameList] = useState([]);
  const [helpText, setHelpText] = useState("");
  const [actionSettings, setActionSettings] = useState("DEFAULT");

  useEffect(() => {
    console.log(usersList);
  }, [usersList]);

  function startGame() {
    if (usersList.length > 1) {
      setAppState("game");
      setHelpText("");
    } else {
      setHelpText("Нужно добавить как минимум 2 персонажа");
    }
  }
  function endGame() {
    setHelpText("");
    setAppState("end");
  }

  function restart() {
    let oldArrUserList = usersList;
    setPostGameList([]);
    oldArrUserList.forEach((user) => {
      user.isUsed = false;
      user.isAlive = true;
      user.statusText = startGameAction(getRandonNumber(startGameAction.caseLength));
      user.isfinallyMovedFromGame = false;
      user.murdersNumber = 0;
      user.secondUser = null;
    });
    setUsersList(oldArrUserList);
    setAppState("settings");
  }

  return (
    <div className={dayTime === DAY ? 'App day' : 'App night'}>
      <div className="info-text">{version}</div>
      <div className="info-text">Набор действий - {actionSettings}</div>
      <div className="info-text">{helpText}</div>

      {appState === "settings" && (
        <UserList
          startGame={startGame}
          usersList={usersList}
          setUsersList={setUsersList}
          setHelpText={setHelpText}
          setAppState={setAppState}
        />
      )}
      {appState === "game" && (
        <Game
          usersList={usersList}
          endGame={endGame}
          setUsersList={setUsersList}
          postGameList={postGameList}
          setPostGameList={setPostGameList}
          setdayTime={setdayTime}
        />
      )}
      {appState === "end" && (
        <End
          usersList={usersList}
          restart={restart}
          postGameList={postGameList}
          setPostGameList={setPostGameList}
        />
      )}
      {appState === "about" && (
        <About setAppState={setAppState} setHelpText={setHelpText} />
      )}
    </div>
  );
}

export default App;

// setUsersList([
//   {
//     "name": "Дазай",
//     "isUsed": false,
//     "img": "https://d.zaix.ru/MRFr.png",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Лунтик-Гопник",
//     "isUsed": false,
//     "img": "http://d.zaix.ru/mwyi.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": " MANIAC BEGITE",
//     "isUsed": false,
//     "img": "http://d.zaix.ru/mxk2.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Кирпекот",
//     "isUsed": false,
//     "img": "http://d.zaix.ru/Cnos.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Подозрительный Сырок",
//     "isUsed": false,
//     "img": "https://atlas-sport.ru/image/cache/catalog/atlas/product/05.02.2019/gimnasticheskij-kozel-800x800.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Сельдерей",
//     "isUsed": false,
//     "img": "https://i.ibb.co/p1fFVcc/a-Gw-Z-7ibt8.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Грок",
//     "isUsed": false,
//     "img": "https://i.ibb.co/h8YV9hg/M-X-y8-KGX5-I.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Джереми",
//     "isUsed": false,
//     "img": "https://i.ibb.co/GQYSR1D/QXxns-Wgm0t-A.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "нагибатор",
//     "isUsed": false,
//     "img": "https://i.ibb.co/Cp1Try0x/ed153676348d3d6ca7ecd917706bd56a.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "мыш",
//     "isUsed": false,
//     "img": "https://i.ibb.co/xtXWmqch/7c47202d0d74dee8de3cc6222a5c4a0f.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "совершенный владыка сюаньчжэнь",
//     "isUsed": false,
//     "img": "https://i.ibb.co/4ZWzW2kx/7bab404d0bef7243.png",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "Пушочек",
//     "isUsed": false,
//     "img": "https://d.zaix.ru/MRFQ.png",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// {
//     "name": "рукопись горит",
//     "isUsed": false,
//     "img": "https://i.ibb.co/NnWxn5sJ/image.jpg",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false,
//     "murdersNumber": 0
// },
// ]);
// setAppState('game');
