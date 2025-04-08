let idleFloodActionArr = [];

function idleFireAction(number = 0, name1 = "") {
  idleFloodActionArr = [
    `<span class='member-name'>${name1}</span> избежал пожара прыгнув в реку`,
    `<span class='member-name'>${name1}</span> взобрался на скалы, куда не достает огонь`,
  ];

  return idleFloodActionArr[number];
}

idleFireAction();

idleFireAction.caseLength = idleFloodActionArr.length;

export default idleFireAction;
