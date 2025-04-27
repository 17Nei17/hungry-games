let startGameActionArr = [];

function startGameAction(number = 0) {
  startGameActionArr = [
    `растерянно осматривается`,
    `отбегает в ужасе от других участников ГИ`,
    `хватает первое что попалось ему под руку и убегает`,
    `пытается познакомиться со всеми вокруг, но его игнорируют`,
    `долго стоит и тупит, а потом спрашивает "а тут есть доставка пиццы?" - ему не отвечают`,
    `отталкивает всех участников и забирает их лут`,
    `спотыкается и опаздывает, поэтому не получает ничего`,
  ];
  return startGameActionArr[number];
}

startGameAction();

startGameAction.caseLength = startGameActionArr.length;

export default startGameAction;
