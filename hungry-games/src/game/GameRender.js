import React from "react";
import JsxParser from "react-jsx-parser";

function GameRender(props) {
  function renderParty() {
    return props.usersList.map((user, index) => {
      if (user.secondUser) {
        return (
          <div className="cornflowerblue">
            <div className="userItem-wrap">
              <div className={(user.isAlive ? "alive" : "dead") + " userItem"}>
                <div className="userName">{user.name}</div>
                <img className="userImage" src={user.img} />
                <div className="userName">
                  {user.isAlive ? "живой" : "мертв"}
                </div>
                {/* <div>isUsed={user.isUsed.toString()}</div>
                                <div>isfinallyMovedFromGame = {user.isfinallyMovedFromGame.toString()}</div> */}
              </div>
              <div
                className={
                  (user.secondUser.isAlive ? "alive" : "dead") + " userItem"
                }
              >
                <div className="userName">{user.secondUser.name}</div>
                <img className="userImage" src={user.secondUser.img} />
                <div className="userName">
                  {user.secondUser.isAlive ? "живой" : "мертв"}
                </div>
                {/* <div>isUsed={user.secondUser.isUsed.toString()}</div>
                                <div>isfinallyMovedFromGame = {user.secondUser.isfinallyMovedFromGame.toString()}</div> */}
              </div>
            </div>
            <div>
              <JsxParser jsx={user.statusText} />
            </div>
          </div>
        );
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
            {/* <div>isUsed={user.isUsed.toString()}</div> */}
            <img className="userImage" src={user.img} />
            {user.secondUser && (
              <img className="userImage" src={user.secondUser.img} />
            )}

            <div className="userName">{user.isAlive ? "живой" : "мертв"}</div>
            <div>
              <JsxParser jsx={user.statusText} />
            </div>
            {/* <div>isfinallyMovedFromGame = {user.isfinallyMovedFromGame.toString()}</div> */}
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
