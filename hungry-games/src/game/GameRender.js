import React from "react";
import JsxParser from "react-jsx-parser";

function GameRender(props) {


  function additionalUsersList(user) {
    return user.secondUser.map((item) => (
      <div className={(item.isAlive ? "alive" : "dead") + " userItem"}>
        <div className="userName">{item.name}</div>
        <img className="userImage" src={item.img} />
        <div className="userName">{item.isAlive ? "живой" : "мертв"}</div>
      </div>
    ));
  }

  function renderGroupUsers(user) {
    return (
      <div className="cornflowerblue">
        <div className="userItem-wrap">
          <div className={(user.isAlive ? "alive" : "dead") + " userItem"}>
            <div className="userName">{user.name}</div>
            <img className="userImage" src={user.img} />
            <div className="userName">{user.isAlive ? "живой" : "мертв"}</div>
          </div>
          {additionalUsersList(user)}
        </div>
        <div>
          <JsxParser jsx={user.statusText} />
        </div>
      </div>
    );
  }

  function renderParty() {
    return props.usersList.map((user, index) => {
      if (user.secondUser.length > 0) {
        return renderGroupUsers(user);
      } else {
        let additionalClass = user.isAlive ? " alive" : " dead";
        return (
          <div
            className={
              user.isUsed
                ? "userItem hidden"
                : "userItem" +
                (user.isfinallyMovedFromGame ? " ordered" : "") +
                additionalClass
            }
          >
            <div className="userName">{user.name}</div>
            <img className="userImage" src={user.img} />
            {user.secondUser && (
              <img className="userImage" src={user.secondUser.img} />
            )}

            <div className="userName">{user.isAlive ? "живой" : "мертв"}</div>
            <div>
              <JsxParser jsx={user.statusText} />
            </div>
          </div>
        );
      }
    });
  }

  return (
    <div className="">
      <div>
        {props.stateBattle.time} - {props.stateBattle.day}
      </div>
      <div>{props.stateBattle.action}</div>
      <div className="userlist">{renderParty()}</div>
      <button
        onClick={() => {
          props.nextDay();
        }}
      >
        Дальше
      </button>
    </div>
  );
}

export default GameRender;
