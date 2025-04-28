let groupAction = [];
function groupFloodAction(number, arr = []) {
  let [name1 = "", name2 = "", name3 = ""] = arr;
  groupAction = [
    `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span> и <span class='member-name'>${name3}</span> втроем спасаются от потопа забравшись на дерево`,
  ];
  return groupAction[number];
}

groupFloodAction();

groupFloodAction.caseLength = groupAction.length;

export default groupFloodAction;
