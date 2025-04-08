let suicideFloodActionArr = [];
function suicideFloodAction(number = 0, name1 = "") {
  suicideFloodActionArr = [
    `<span class='member-name'>${name1}</span> упал в воду и захлебнулся`,
    `<span class='member-name'>${name1}</span> не умел плавать и погиб в небольшом потоке воды`,
  ];
  return suicideFloodActionArr[number];
}

suicideFloodAction();

suicideFloodAction.caseLength = suicideFloodActionArr.length;

export default suicideFloodAction;
