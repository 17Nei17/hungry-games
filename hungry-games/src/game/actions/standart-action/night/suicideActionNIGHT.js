let suicideActionArr = [];
function suicideActionNIGHT(number = 0, name1 = "") {
  suicideActionArr = [
    `<span class='member-name'>${name1}</span> замёрз под открытым небом`,
    `<span class='member-name'>${name1}</span> не пережил кровопотерю до рассвета`,
    `<span class='member-name'>${name1}</span> был унесён хищником в ночи`,
    `<span class='member-name'>${name1}</span> решил согреться у костра и заснул в углях`,
    `<span class='member-name'>${name1}</span> решил посмотреть, как далеко может зайти в болото. Зашёл и не вышел.`,
    `<span class='member-name'>${name1}</span> зевнул, попал в паутину, споткнулся о камень и умер`,
    `<span class='member-name'>${name1}</span> задохнулся в норе, куда сам забрался`,
    `<span class='member-name'>${name1}</span> не проснулся после укуса паука`,
    `<span class='member-name'>${name1}</span> последним усилием добрался до ручья — и упал в него лицом вниз`
  ];
  return suicideActionArr[number];
}

suicideActionNIGHT();

suicideActionNIGHT.caseLength = suicideActionArr.length;

export default suicideActionNIGHT;
