let idleActionArr = [];

function idleAction(number = 0, name1 = "") {
  idleActionArr = [
    `<span class='member-name'>${name1}</span> тупит и ничего не делает`,
    `<span class='member-name'>${name1}</span> бродит в окрестностях`,
    `<span class='member-name'>${name1}</span> собирает грибы`,
    `<span class='member-name'>${name1}</span> изучает местность`,
    `<span class='member-name'>${name1}</span> колет дрова`,
    `<span class='member-name'>${name1}</span> наблюдает за насекомыми`,
    `<span class='member-name'>${name1}</span> пытается поймать бабочку`,
    `<span class='member-name'>${name1}</span> плетёт венок`,
    `<span class='member-name'>${name1}</span> убирается дома`,
    `<span class='member-name'>${name1}</span> плачет в подушку`,
    `<span class='member-name'>${name1}</span> разжигает костёр`,
    `<span class='member-name'>${name1}</span> принимает пищу`,
    `<span class='member-name'>${name1}</span> мечтательно смотрит в небо`,
    `<span class='member-name'>${name1}</span> размышляет о смысле бытия`,
    `<span class='member-name'>${name1}</span> переживает из-за невзаимной любви`,
    `<span class='member-name'>${name1}</span> вспоминает ошибки прошлого`,
    `<span class='member-name'>${name1}</span> разбирает кучу писем`,
    `<span class='member-name'>${name1}</span> красит забор`,
    `<span class='member-name'>${name1}</span> готовит что-то вкусненькое`,
    `<span class='member-name'>${name1}</span> собирает созревшие плоды`,
    `<span class='member-name'>${name1}</span> пугается своего отражения`,
    `<span class='member-name'>${name1}</span> уютно завернулся в плед`,
    `<span class='member-name'>${name1}</span> задумчиво слушает трели пташек`,
    `<span class='member-name'>${name1}</span> составляет планы на выходные`,
    `<span class='member-name'>${name1}</span> с увлечением читает книгу`,
    `<span class='member-name'>${name1}</span> играет в CatWar`,
    `<span class='member-name'>${name1}</span> мирно спит`,
    `<span class='member-name'>${name1}</span> нервно ходит из угла в угол`,
    `<span class='member-name'>${name1}</span> поливает цветы`,
    `<span class='member-name'>${name1}</span> наблюдает за птичками`,
    `<span class='member-name'>${name1}</span> греется на солнышке`,
    `<span class='member-name'>${name1}</span> поймал ДУТОКРЫСУ`,
    `<span class='member-name'>${name1}</span> размышляет о смысле жизни`,
    `<span class='member-name'>${name1}</span> пытается сломать кэтвар потому что не выпал нужный бафф`,
    `<span class='member-name'>${name1}</span> старательно собирает мох для подстилки`,
    `<span class='member-name'>${name1}</span> роет ямку для хранения запасов, а потом забывает, где она`,
    `<span class='member-name'>${name1}</span> пьёт из лужи и молится, чтобы это была просто лужа`,
    `<span class='member-name'>${name1}</span> зализывает раны, оставленные бурей и собственной глупостью`,
    `<span class='member-name'>${name1}</span> спит стоя, чтобы не замёрзнуть на мокрой земле`,
    `<span class='member-name'>${name1}</span> обвязывает рану паутиной, бросив последний взгляд на закат`
  ];

  return idleActionArr[number];
}

idleAction();

idleAction.caseLength = idleActionArr.length;

export default idleAction;
