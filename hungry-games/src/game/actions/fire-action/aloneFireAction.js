let aloneFloodActionArr = [];
function aloneFireAction(number = 0, name1 = '') {
    aloneFloodActionArr = [
        `<span class='member-name'>${name1}</span> одиноко пожарил на огне мармеладки`,
        `<span class='member-name'>${name1}</span> грустно греется около огня`,
    ]
    return aloneFloodActionArr[number];
}

aloneFireAction();


aloneFireAction.caseLength = aloneFloodActionArr.length;

export default aloneFireAction;