let suicideActionArr = [];
function suicideActionDAY(number = 0, name1 = "") {
  suicideActionArr = [
    `<span class='member-name'>${name1}</span> умер от истощения`,
    `<span class='member-name'>${name1}</span> умер от кринжа`,
    `<span class='member-name'>${name1}</span> сьел ядовитую рыбу и умер`,
    `<span class='member-name'>${name1}</span> случайно подавился костью от рыбы и погиб от удушья`,
    `<span class='member-name'>${name1}</span> утонул в речке`,
    `<span class='member-name'>${name1}</span> неудачно упал с дерева, получив переломы, несовместимые с жизнью`,
    `<span class='member-name'>${name1}</span> съел не ту лечебную траву и только усугубил болезнь, что привело к летальному исходу`,
    `<span class='member-name'>${name1}</span> наступил на смертельно ядовитое растение`,
    `<span class='member-name'>${name1}</span> не заметил, как дичь во рту превратилась в падаль и съел её. Трапеза оказалась последней`,
    `<span class='member-name'>${name1}</span> понял, что он одинок и совершил самоубийство от горя`,
    `<span class='member-name'>${name1}</span> пошёл за дичью и не вернулся — следы оборвались на краю обрыва`,
    `<span class='member-name'>${name1}</span> погиб от удара молнии`,
    `<span class='member-name'>${name1}</span> погиб, провалившись в болото`,
  ];
  return suicideActionArr[number];
}

suicideActionDAY();

suicideActionDAY.caseLength = suicideActionArr.length;

export default suicideActionDAY;
