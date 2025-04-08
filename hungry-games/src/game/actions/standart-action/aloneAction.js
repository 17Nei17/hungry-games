let aloneActionArr = [];
function aloneAction(number = 0, name1 = "") {
  aloneActionArr = [
    `<span class='member-name'>${name1}</span> грустно смотрит в небо, думая, что он не совсем адекватный`,
    `<span class='member-name'>${name1}</span> одиноко сидит у костра`,
    `<span class='member-name'>${name1}</span> съедает двойную порцию рыбки, не найдя с кем её разделить`,
    `<span class='member-name'>${name1}</span> грустно вздыхает, понимая свою никчёмность`,
  ];
  return aloneActionArr[number];
}

aloneAction();

aloneAction.caseLength = aloneActionArr.length;

export default aloneAction;
