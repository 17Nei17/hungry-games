let AggresiveActionArr = [];

function AggresiveAction(number = 0, name1 = "", name2 = "") {
  AggresiveActionArr = [
    `<span class='member-name'>${name1}</span> нападает на <span class='member-name'>${name2}</span> и убивает его`,
    `<span class='member-name'>${name1}</span> подложил <span class='member-name'>${name2}</span> дичь со смертельной отравой`,
    `<span class='member-name'>${name1}</span> хладнокровно убивает <span class='member-name'>${name2}</span>`,
    `<span class='member-name'>${name1}</span> нанёс <span class='member-name'>${name2}</span> травмы, несовместимое с жизнью`,
    `<span class='member-name'>${name1}</span> умышленно толкнул <span class='member-name'>${name2}</span>, из-за чего тот упал с дерева и погиб от кровотечений`,
    `<span class='member-name'>${name1}</span> заманивает <span class='member-name'>${name2}</span> на высокую скалу и сталкивает его вниз`,
    `<span class='member-name'>${name1}</span> втирается в доверие <span class='member-name'>${name2}</span> а затем вонзает ему нож в спину`,
    `<span class='member-name'>${name1}</span> обнимает <span class='member-name'>${name2}</span>, шепча: "Доверься", — и резко вонзает нож в спину`,
    `<span class='member-name'>${name2}</span> помогает <span class='member-name'>${name1}</span> вылезти из ямы... а затем <span class='member-name'>${name1}</span> cталкивает $<span class='member-name'>${name2}</span> в яму, из-за чего тот погибает`,
    `<span class='member-name'>${name1}</span> угощает <span class='member-name'>${name2}</span> пирожком... пирожок оказался динамитом`,
    `<span class='member-name'>${name1}</span> кричит "Осторожно!" <span class='member-name'>${name2}</span>, и тот умирает от испуга, поскользнувшись на мху`,
  ];
  return AggresiveActionArr[number];
}

AggresiveAction();

AggresiveAction.caseLength = AggresiveActionArr.length;

export default AggresiveAction;
