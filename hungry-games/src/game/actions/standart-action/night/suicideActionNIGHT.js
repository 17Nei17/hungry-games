let suicideActionArr = [];
function suicideActionNIGHT(number = 0, name1 = "") {
  suicideActionArr = [
    `<span class='member-name'>${name1}</span> замёрз под открытым небом`,
    `<span class='member-name'>${name1}</span> умер от кровопотери ночью`,
    `<span class='member-name'>${name1}</span> был унесён хищником в ночи`,
    `<span class='member-name'>${name1}</span> решил согреться у костра и заснул в углях`,
    `<span class='member-name'>${name1}</span> решил посмотреть, как далеко может зайти в болото. Зашёл и не вышел.`,
    `<span class='member-name'>${name1}</span> зевнул, попал в паутину, споткнулся о камень и умер`,
    `<span class='member-name'>${name1}</span> задохнулся в норе, куда сам забрался`,
    `<span class='member-name'>${name1}</span> не проснулся после укуса паука`,
    `<span class='member-name'>${name1}</span> последним усилием добрался до ручья — и упал в него лицом вниз`,
    `<span class='member-name'>${name1}</span> был найден мёртвым рядом с неподвижным котом цветом похожим на кирпич. Никто не понял, что произошло... но кот исчез`,
    `<span class='member-name'>${name1}</span> нашёл записку: "Не смотри в глаза коту." Он посмотрел. Больше его не видели.`,
  ];
  return suicideActionArr[number];
}

suicideActionNIGHT();

suicideActionNIGHT.caseLength = suicideActionArr.length;

export default suicideActionNIGHT;
