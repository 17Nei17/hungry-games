let aloneFloodActionArr = [];
function aloneFireAction(number = 0, name1 = "") {
  aloneFloodActionArr = [
    `<span class='member-name'>${name1}</span> одиноко пожарил на огне мармеладки`,
    `<span class='member-name'>${name1}</span> грустно греется около огня`,
    `<span class='member-name'>${name1}</span> шепчет что-то пламени, будто оно может ответить`,
    `<span class='member-name'>${name1}</span> смотрит, как искры поднимаются в небо, и шепчет имена павших`,
  ];
  return aloneFloodActionArr[number];
}

aloneFireAction();

aloneFireAction.caseLength = aloneFloodActionArr.length;

export default aloneFireAction;
