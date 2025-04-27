import React from "react";

function DeadListRender(props) {
  return (
    <div className="">
      <div>Cписок погибших</div>
      {props.deadCharactersListAfterDay.length > 0 &&
        props.deadCharactersListAfterDay.map((element) => {
          return (
            <div className="userlist">
              <div className="userItem-wrap">
                <div className="dead userItem">
                  <div className="userName">{element.name}</div>
                  <img className="userImage" src={element.img} />
                </div>
              </div>
            </div>
          );
        })}
      {props.deadCharactersListAfterDay.length == 0 && (
        <div>Никто не погиб за минувшие сутки</div>
      )}
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

export default DeadListRender;
