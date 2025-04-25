let idleFloodActionArr = [];

function idleFireAction(number = 0, name1 = "") {
  idleFloodActionArr = [
    `<span class='member-name'>${name1}</span> избежал пожара прыгнув в реку`,
    `<span class='member-name'>${name1}</span> взобрался на скалы, куда не достает огонь`,
    `<span class='member-name'>${name1}</span> пробежал сквозь дым, укрываясь мокрой тканью`,
    `<span class='member-name'>${name1}</span> сумел выбраться из огня, но его голос навсегда остался хриплым от дыма`,
  ];

  return idleFloodActionArr[number];
}

idleFireAction();

idleFireAction.caseLength = idleFloodActionArr.length;

export default idleFireAction;
