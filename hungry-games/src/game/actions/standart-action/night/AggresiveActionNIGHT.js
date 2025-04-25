let AggresiveActionArr = [];

function AggresiveActionNIGHT(number = 0, name1 = "", name2 = "") {
  AggresiveActionArr = [
    `<span class='member-name'>${name1}</span> зовёт <span class='member-name'>${name2}</span> посмотреть на луну, а затем сбрасывает с обрыва`,
    `<span class='member-name'>${name1}</span> кричит "Осторожно!" <span class='member-name'>${name2}</span>, и тот умирает от испуга, поскользнувшись на мху`,
    `<span class='member-name'>${name1}</span> притворяется спящим, пока <span class='member-name'>${name2}</span> дремлет, а потом наносит удар`,
    `<span class='member-name'>${name1}</span> с улыбкой кидает <span class='member-name'>${name2}</span> в костёр, говоря: «Погрейся»`,
    `<span class='member-name'>${name1}</span> накормив <span class='member-name'>${name2}</span> мухоморами, искренне удивился результату`,
    `<span class='member-name'>${name1}</span> скинул <span class='member-name'>${name2}</span> с дерева, чтобы занять лучшее место для сна`,
    `<span class='member-name'>${name1}</span> попытался разбудить <span class='member-name'>${name2}</span> громким криком. У <span class='member-name'>${name2}</span> не выдержало сердце`,
    `<span class='member-name'>${name1}</span> вместо байки на ночь рассказал план убийства. И реализовал его`,
    `<span class='member-name'>${name1}</span> споткнулся о <span class='member-name'>${name2}</span> и уронил на него топор. Уже поздно извиняться.`
  ];
  return AggresiveActionArr[number];
}

AggresiveActionNIGHT();

AggresiveActionNIGHT.caseLength = AggresiveActionArr.length;

export default AggresiveActionNIGHT;
