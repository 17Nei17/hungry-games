import IdleAction from "../standart-action/idleAction"
import IdleFloodAction from "../flood-action/idleFloodAction.js"
import getRandonNumber from "../helpers/getRandonNumber.js";

function idleActionSelector(actionType, user) {
    if (actionType === 'standart') {
        return { text: IdleAction(getRandonNumber(IdleAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    } else {
        return { text: IdleFloodAction(getRandonNumber(IdleFloodAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    }
}

export default idleActionSelector;