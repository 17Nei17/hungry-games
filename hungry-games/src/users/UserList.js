import UserItem from "./UserItem";
import AddUserForm from "./AddUserForm";
import React, { useState, useEffect } from "react";
import startGameAction from "../game/actions/start-game-action/startGameAction";
import getRandonNumber from "../game/helpers/getRandonNumber";
// let obj = { img: 'src', name: 'str', gender: 'srt', friend: 'name' }

function UserList(props) {
  const [isShowForm, setShowForm] = useState(false);

  useEffect(() => { });

  function renderUsers() {
    return props.usersList.map((user) => (
      <UserItem
        userData={user}
        users={props.usersList}
        removeUserByIndex={removeUserByIndex}
      ></UserItem>
    ));
  }

  function removeUserByIndex(index) {
    const newArray = [...props.usersList];
    newArray.splice(index, 1);
    props.setUsersList(newArray);
  }

  function clearUserList() {
    props.setUsersList([]);
  }

  function addUser(userObject) {
    let checkName = props.usersList.filter(
      (user) => user.name == userObject.name
    );
    if (checkName.length > 0) {
      props.setHelpText("Персонаж с таким именем уже есть");
    } else {
      props.setUsersList((prev) => [
        ...prev,
        {
          name: userObject.name,
          isUsed: false,
          img: userObject.img,
          gender: userObject.gender,
          friend: userObject.friend,
          isAlive: true,
          statusText: startGameAction(getRandonNumber(startGameAction.caseLength)),
          isfinallyMovedFromGame: false,
          murdersNumber: 0,
        },
      ]);
      props.setHelpText("");
    }
  }

  function settings() {
    setShowForm(false);
  }

  function startGame() {
    props.startGame();
  }

  return (
    <div className="centered">
      {isShowForm && (
        <AddUserForm addUser={addUser} settings={settings}></AddUserForm>
      )}
      <div className="userlistBeforeGame">{renderUsers()}</div>
      {!isShowForm && (
        <button
          onClick={() => {
            setShowForm(true);
          }}
        >
          Добавить участника
        </button>
      )}
      {!isShowForm && (
        <button
          onClick={() => {
            clearUserList();
          }}
        >
          Удалить всех
        </button>
      )}
      <button
        onClick={() => {
          startGame();
        }}
      >
        Начать игру
      </button>
      <button
        className="about-button"
        onClick={() => {
          props.setAppState("about");
          props.setHelpText("");
        }}
      >
        Информация
      </button>
    </div>
  );
}

export default UserList;
