let suicideFloodActionArr = [];
function suicideFireAction(number = 0, name1 = '') {
    suicideFloodActionArr = [
        `<span class='member-name'>${name1}</span> растерялся и прыгнул в огонь`,
        `<span class='member-name'>${name1}</span> убегая от огня прыгнул в реку и утонул`,
        `<span class='member-name'>${name1}</span> подошел к огню чтобы пожарить еду и сам загорелся`,
    ]
    return suicideFloodActionArr[number];
}

suicideFireAction();

suicideFireAction.caseLength = suicideFloodActionArr.length;

export default suicideFireAction;