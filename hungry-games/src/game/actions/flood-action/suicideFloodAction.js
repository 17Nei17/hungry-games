let suicideFloodActionArr = [];
function suicideFloodAction(number = 0, name1 = "") {
  suicideFloodActionArr = [
    `<span class='member-name'>${name1}</span> упал в воду и захлебнулся`,
    `<span class='member-name'>${name1}</span> не умел плавать и погиб в небольшом потоке воды`,
    `<span class='member-name'>${name1}</span> нырнул за тапком и не всплыл`,
    `<span class='member-name'>${name1}</span> был смыт стремительным потоком при попытке перейти реку`,
    `<span class='member-name'>${name1}</span> утонул, пытаясь спасти припасы, вместо того чтобы спастись самому`,
  ];
  return suicideFloodActionArr[number];
}

suicideFloodAction();

suicideFloodAction.caseLength = suicideFloodActionArr.length;

export default suicideFloodAction;
