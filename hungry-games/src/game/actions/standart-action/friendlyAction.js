let friendlyActionArr = [];
function friendlyAction(number = 0, name1 = "", name2 = "") {
  friendlyActionArr = [
    `Обнявшись, <span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> поют песни`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> спят вместе около костра`,
    `<span class='member-name'>${name1}</span> словил рыбу и поделился ей с <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> взахлёб рассказывает историю <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> сидит рядышком с <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> отдал в долг <span class='member-name'>${name2}</span> 1000 рублей`,
    `<span class='member-name'>${name1}</span> играет в прятки с <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> напевает песню <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span>, озираясь, шепчет что-то на ушко <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> встретился взглядом с <span class='member-name'>${name2}</span> и отвёл глаза`,
    `<span class='member-name'>${name1}</span> легонько кусает <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> рассказывает <span class='member-name'>${name2}</span> о назначении разных трав`,
    `<span class='member-name'>${name1}</span> гладит <span class='member-name'>${name2}</span> по голове`,
  ];
  return friendlyActionArr[number];
}

friendlyAction();

friendlyAction.caseLength = friendlyActionArr.length;

export default friendlyAction;
