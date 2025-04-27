let friendlyFloodActionArr = [];
function friendlyFiredAction(number = 0, name1 = "", name2 = "") {
  friendlyFloodActionArr = [
    `<span class='member-name'>${name1}</span> убежал из горящего леса вместе с <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> прыгает в воду с <span class='member-name'>${name2}</span> и спасается от огня`,
    `<span class='member-name'>${name1}</span> вытаскивает <span class='member-name'>${name2}</span> из пылающего лагеря, держась за руку`,
    `<span class='member-name'>${name1}</span> делится последней водой, пока они бегут сквозь дым`,
    `<span class='member-name'>${name1}</span> обнимает дрожащего <span class='member-name'>${name2}</span>, когда они добираются до безопасной поляны`,
  ];
  return friendlyFloodActionArr[number];
}

friendlyFiredAction();

friendlyFiredAction.caseLength = friendlyFloodActionArr.length;

export default friendlyFiredAction;
