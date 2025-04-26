let groupAction = [];
function groupActionNIGHT(number = 0, name1 = "", name2 = "", name3 = '') {
    groupAction = [
        `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span> и <span class='member-name'>${name3}</span> находят пещеру и решают вместе переждать ночь`,
        `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span> и <span class='member-name'>${name3}</span> заключают временное перемирие и вместе сидят у костра`,
    ];
    return groupAction[number];
}

groupActionNIGHT();

groupActionNIGHT.caseLength = groupAction.length;

export default groupActionNIGHT;
