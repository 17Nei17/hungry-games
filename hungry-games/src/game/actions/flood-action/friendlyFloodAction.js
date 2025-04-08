let friendlyFloodActionArr = [];
function friendlyFloodAction(number = 0, name1 = "", name2 = "") {
  friendlyFloodActionArr = [
    `<span class='member-name'>${name1}</span> хватает за руку <span class='member-name'>${name2}</span> и вытягивает из потока воды`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> переживают наводнение сидя вместе на огромном камне`,
  ];
  return friendlyFloodActionArr[number];
}

friendlyFloodAction();

friendlyFloodAction.caseLength = friendlyFloodActionArr.length;

export default friendlyFloodAction;
