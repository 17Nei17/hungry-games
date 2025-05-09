import React from "react";

function End(props) {
  function setAliveName() {
    let AliveObject = props.usersList.filter((user) => user.isAlive == true);
    if (AliveObject.length === 0) {
      return <div>Никто не выжил</div>;
    }
    if (AliveObject.length === 1) {
      return (
        <div>
          <span>В живых остался только:</span>
          <span className="member-name">{AliveObject[0].name}</span>
          <div>
            <img className="userImage" src={AliveObject[0].img} />
          </div>
          <div>
            Количество убийств -{" "}
            <span className="kills-num">{AliveObject[0].murdersNumber}</span>
          </div>
        </div>
      );
    } else {
      AliveObject.forEach((item) => {
        return item.name;
      });
    }
  }

  function renderPostGameList() {
    let newArr = props.postGameList.reverse();
    console.log(newArr);
    return newArr.map((user, index) => (
      <div className="userItem">
        <div className="member-name">{user.name}</div>
        <div>
          Место: <span className="place-num">{index + 2}</span>
        </div>
        <img className="userImage" src={user.img} />
        <div>
          Количество убийств -{" "}
          <span className="kills-num">{user.murdersNumber}</span>
        </div>
      </div>
    ));
  }

  return (
    <div className="userlist">
      <div className="userItem">
        {setAliveName()}
        <button
          onClick={() => {
            props.restart();
          }}
        >
          Рестарт
        </button>
      </div>
      <div>Список персонажей:</div>
      <div className="userlistBeforeGame">{renderPostGameList()}</div>
    </div>
  );
}

export default End;
