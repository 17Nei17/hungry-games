let idleActionArr = [];

function idleActionNIGHT(number = 0, name1 = "") {
  idleActionArr = [
    `<span class='member-name'>${name1}</span> тупит и ничего не делает`,
    `<span class='member-name'>${name1}</span> дремлет под звуки сверчков`,
    `<span class='member-name'>${name1}</span> прислушивается к звукам ночного леса`,
    `<span class='member-name'>${name1}</span> лежит у костра, слушая треск веток`,
    `<span class='member-name'>${name1}</span> медленно ходит вдоль берега, оставляя следы в песке`,
    `<span class='member-name'>${name1}</span> дрожит от холода, прижимаясь к камню, который ещё хранит тепло дня`,
    `<span class='member-name'>${name1}</span> пытается не заснуть, чтобы не замёрзнуть насмерть`,
    `<span class='member-name'>${name1}</span> слушает приближающиеся шаги и затаивает дыхание`,
    `<span class='member-name'>${name1}</span> ловит насекомых, чтобы не умереть от голода`,
    `<span class='member-name'>${name1}</span> прислушивается к ночи, зная, что враг может быть уже рядом`,
    `<span class='member-name'>${name1}</span> бредёт вслепую, не замечая новых царапин от веток`,
    `<span class='member-name'>${name1}</span> ищет в темноте знакомые запахи целебных трав`,
    `<span class='member-name'>${name1}</span> шепчет себе: “ещё немного… только продержаться до рассвета”`,
    `<span class='member-name'>${name1}</span> шепчет себе под нос, чтобы не сойти с ума от боли`
  ];

  return idleActionArr[number];
}

idleActionNIGHT();

idleActionNIGHT.caseLength = idleActionArr.length;

export default idleActionNIGHT;
