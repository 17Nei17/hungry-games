import suicideAction from "../standart-action/suicideAction.js"
import suicideFloodAction from "../flood-action/suicideFloodAction.js"
import getRandonNumber from "../helpers/getRandonNumber.js";

function suicideActionSelector(actionType, user) {
    if (actionType === 'standart') {
        return { text: suicideAction(getRandonNumber(suicideAction.caseLength), user.name), isAlive: false, murdersNumber: user.murdersNumber };
    } else {
        return { text: suicideFloodAction(suicideFloodAction(suicideAction.caseLength), user.name), isAlive: false, murdersNumber: user.murdersNumber };
    }
}

export default suicideActionSelector;