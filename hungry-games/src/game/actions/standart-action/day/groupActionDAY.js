let aloneActionArr = [];
function groupActionDAY(number = 0, name1 = "", name2 = "", name3 = "") {
  aloneActionArr = [
    `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span>, <span class='member-name'>${name3}</span> молятся мху `,
    `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span>, <span class='member-name'>${name3}</span> собираются вместе и обсуждают планы на следующий день`,
    `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span>, <span class='member-name'>${name3}</span> решают обьединить силы и потратить день на поиск еды`,
  ];
  return aloneActionArr[number];
}

groupActionDAY();

groupActionDAY.caseLength = aloneActionArr.length;

export default groupActionDAY;
