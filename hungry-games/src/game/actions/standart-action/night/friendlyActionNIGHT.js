let friendlyActionArr = [];
function friendlyActionNIGHT(number = 0, name1 = "", name2 = "") {
  friendlyActionArr = [
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> спят вместе около костра`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> слушают ночные звуки, лежа бок о бок`,
    `<span class='member-name'>${name1}</span> гладит <span class='member-name'>${name2}</span> между ушами, пока тот дремлет`,
    `<span class='member-name'>${name1}</span> слушает, как <span class='member-name'>${name2}</span> рассказывает сны у костра`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> греют друг другу лапы в прохладной ночи`,
    `<span class='member-name'>${name1}</span> убаюкивает <span class='member-name'>${name2}</span> тихим мурлыканьем под луной`,
    `<span class='member-name'>${name1}</span> делится с <span class='member-name'>${name2}</span> последним куском добычи перед сном`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> обсуждают, каким будет рассвет`,
    `<span class='member-name'>${name1}</span> делится с <span class='member-name'>${name2}</span> найденным пучком сухого мха — как самым ценным сокровищем`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> прячутся под навесом из веток, слушая, как вдалеке умирают другие`,
    `<span class='member-name'>${name1}</span> и <span class='member-name'>${name2}</span> смотрят на звёзды, каждый думая, кто из них умрёт первым`,
    `<span class='member-name'>${name1}</span> прижимает <span class='member-name'>${name2}</span> к себе, как если бы это был их последний вечер`,
    `<span class='member-name'>${name1}</span> молча отдаёт свой тайник с травами <span class='member-name'>${name2}</span>, даже не взглянув назад`
  ];
  return friendlyActionArr[number];
}

friendlyActionNIGHT();

friendlyActionNIGHT.caseLength = friendlyActionArr.length;

export default friendlyActionNIGHT;


