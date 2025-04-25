let aloneActionArr = [];
function aloneActionNIGHT(number = 0, name1 = "") {
  aloneActionArr = [
    `<span class='member-name'>${name1}</span> грустно смотрит в небо, думая, что он не совсем адекватный`,
    `<span class='member-name'>${name1}</span> одиноко сидит ночью у костра`,
    `<span class='member-name'>${name1}</span> рисует мордочки на камнях и расставляет их полукругом`,
    `<span class='member-name'>${name1}</span> строит шалаш и гордо говорит “мы сделали это”`,
  ];
  return aloneActionArr[number];
}

aloneActionNIGHT();

aloneActionNIGHT.caseLength = aloneActionArr.length;

export default aloneActionNIGHT;
