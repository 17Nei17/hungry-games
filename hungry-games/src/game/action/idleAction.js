let idleActionArr = [];

function idleAction(number = 0, name1 = '') {
    idleActionArr = [
        `${name1} тупит и ничего не делает`,
        `${name1} бродит в окрестностях`,
        `${name1} собирает грибы`,
        `${name1} изучает местность`,
        `${name1} колет дрова`,
        `${name1} наблюдает за насекомыми`,
        `${name1} пытается поймать бабочку`,
        `${name1} плетёт венок`,
        `${name1} убирается дома`,
        `${name1} плачет в подушку`,
        `${name1} разжигает костёр`,
        `${name1} принимает пищу`,
        `${name1} мечтательно смотрит в небо`,
        `${name1} размышляет о смысле бытия`,
        `${name1} переживает из-за невзаимной любви`,
        `${name1} вспоминает ошибки прошлого`,
        `${name1} разбирает кучу писем`,
        `${name1} красит забор`,
        `${name1} готовит что-то вкусненькое`,
        `${name1} собирает созревшие плоды`,
        `${name1} пугается своего отражения`,
        `${name1} уютно завернулся в плед`,
        `${name1} задумчиво слушает трели пташек`,
        `${name1} составляет планы на выходные`,
        `${name1} с увлечением читает книгу`,
        `${name1} играет в CatWar`,
        `${name1} мирно спит`,
        `${name1} нервно ходит из угла в угол`,
        `${name1} поливает цветы`,
        `${name1} наблюдает за птичками`,
        `${name1} греется на солнышке`,
        `${name1} поймал ДУТОКРЫСУ`,
        `${name1} размышляет о смысле жизни`,
        `${name1} пытается сломать кэтварM потому что не выпал нужный бафф`,
    ]

    return idleActionArr[number];
}

idleAction();

idleAction.caseLength = idleActionArr.length;

export default idleAction;