let aloneFloodActionArr = [];
function aloneFloodAction(number = 0, name1 = '') {
    aloneFloodActionArr = [
        `<span class='member-name'>${name1}</span> забирается на дерево и переживает наводнение`,
        `<span class='member-name'>${name1}</span> забирается на скалу и оттуда смотрит за потоком воды`,
    ]
    return aloneFloodActionArr[number];
}

aloneFloodAction();


aloneFloodAction.caseLength = aloneFloodActionArr.length;

export default aloneFloodAction;