let aggresiveActionArr = [];

function aggresiveFloodAction(number = 0, name1 = "", name2 = "") {
  aggresiveActionArr = [
    `<span class='member-name'>${name1}</span> толкает в воду <span class='member-name'>${name2}</span> со скалы и наблюдает как тот тонет`,
    `<span class='member-name'>${name1}</span> игнорирует крики тонущего <span class='member-name'>${name2}</span> и убегает`,
    `<span class='member-name'>${name1}</span> притворился, что не слышит зовов <span class='member-name'>${name2}</span> из бурлящей воды`,
    `<span class='member-name'>${name1}</span> кричит "Я за помощью!" и исчезает навсегда, пока <span class='member-name'>${name2}</span> тонет`,
  ];
  return aggresiveActionArr[number];
}

aggresiveFloodAction();

aggresiveFloodAction.caseLength = aggresiveActionArr.length;

export default aggresiveFloodAction;
