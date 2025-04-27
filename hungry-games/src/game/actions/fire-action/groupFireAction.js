let groupAction = [];
function groupFireAction(number = 0, name1 = "", name2 = "", name3 = "") {
  groupAction = [
    `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span> и <span class='member-name'>${name3}</span> убегают от пожара`,
  ];
  return groupAction[number];
}

groupFireAction();

groupFireAction.caseLength = groupAction.length;

export default groupFireAction;
