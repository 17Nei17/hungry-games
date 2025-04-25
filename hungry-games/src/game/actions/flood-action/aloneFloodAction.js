let aloneFloodActionArr = [];
function aloneFloodAction(number = 0, name1 = "") {
  aloneFloodActionArr = [
    `<span class='member-name'>${name1}</span> забирается на дерево и переживает наводнение`,
    `<span class='member-name'>${name1}</span> забирается на скалу и оттуда смотрит за потоком воды`,
    `<span class='member-name'>${name1}</span> сидит на крыше дома и ждёт, пока вода спадёт`,
  ];
  return aloneFloodActionArr[number];
}

aloneFloodAction();

aloneFloodAction.caseLength = aloneFloodActionArr.length;

export default aloneFloodAction;
