let aloneActionArr = [];
function aloneAction(number = 0, name1 = "") {
  aloneActionArr = [
    `<span class='member-name'>${name1}</span> грустно смотрит в небо, думая, что он не совсем адекватный`,
    `<span class='member-name'>${name1}</span> одиноко сидит у костра`,
    `<span class='member-name'>${name1}</span> съедает двойную порцию рыбки, не найдя с кем её разделить`,
    `<span class='member-name'>${name1}</span> грустно вздыхает, понимая свою никчёмность`,
    `<span class='member-name'>${name1}</span> долго разговаривает с шишкой, потому что она, в отличие от других, его не перебивает`,
    `<span class='member-name'>${name1}</span> рисует лапой сердечко на земле... и тут же его стирает, чтобы никто не увидел`,
    `<span class='member-name'>${name1}</span> спорит с камнем, и камень, кажется, выигрывает`,
    `<span class='member-name'>${name1}</span> смотрит в небо и делает вид, что дождь — это не слёзы`,
    `<span class='member-name'>${name1}</span> шепчет себе "я молодец"`,
  ];
  return aloneActionArr[number];
}

aloneAction();

aloneAction.caseLength = aloneActionArr.length;

export default aloneAction;
