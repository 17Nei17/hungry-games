let aloneActionArr = [];
function groupActionDAY(number = 0, name1 = "", name2 = "", name3 = '') {
    aloneActionArr = [
        `<span class='member-name'>${name1}</span>, <span class='member-name'>${name2}</span>, <span class='member-name'>${name3}</span> молятся мху `,
    ];
    return aloneActionArr[number];
}

groupActionDAY();

groupActionDAY.caseLength = aloneActionArr.length;

export default groupActionDAY;
