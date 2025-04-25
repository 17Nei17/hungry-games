import "./App.css";
import React, { useState, useEffect } from "react";
import UserList from "./users/UserList";
import Game from "./game/Game";
import End from "./end/End";
import About from "./about/About";

let version = "ver 1.0.1";

function App() {
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
      user.statusText = "Осматривается";
      user.isfinallyMovedFromGame = false;
      user.murdersNumber = 0;
      user.secondUser = null;
    });
    setUsersList(oldArrUserList);
    setAppState("settings");
  }

  return (
    <div className="App">
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
//     "name": "Сельдерей",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   },
//   {
//     "name": "Умка",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   },
//   {
//     "name": "Chas_mem",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   },
//   {
//     "name": "Echpochmak",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   },
//   {
//     "name": "Нова",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   },
//   {
//     "name": "Тархун",
//     "isUsed": false,
//     "img": "",
//     "gender": "",
//     "isAlive": true,
//     "statusText": "Осматривается",
//     "isfinallyMovedFromGame": false
//   }
// ]);
// setAppState('game');
