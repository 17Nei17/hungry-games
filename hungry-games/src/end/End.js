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
          <div><img className="userImage" src={AliveObject[0].img} /></div>
          <div>Количество убийств - {AliveObject[0].murdersNumber}</div>

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
        <div>Место:{index + 2}</div>
        <img className="userImage" src={user.img} />
        <div>Количество убийств - {user.murdersNumber}</div>
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
