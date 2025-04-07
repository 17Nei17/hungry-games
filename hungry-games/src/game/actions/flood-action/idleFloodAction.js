let idleFloodActionArr = [];

function idleFloodAction(number = 0, name1 = '') {
    idleFloodActionArr = [
        `<span class='member-name'>${name1}</span> запрыгнул на высокую ветку дерева и пережил там наводнение`,
        `<span class='member-name'>${name1}</span> попадает в воду, но с огромными усилиями догребает до берега`,
    ]

    return idleFloodActionArr[number];
}

idleFloodAction();

idleFloodAction.caseLength = idleFloodActionArr.length;

export default idleFloodAction;