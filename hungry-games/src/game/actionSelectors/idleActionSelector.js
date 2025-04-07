import IdleAction from "../actions/standart-action/idleAction.js"
import IdleFloodAction from "../actions/flood-action/idleFloodAction.js"
import idleFireAction from "../actions/fire-action/idleFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";

function idleActionSelector(actionType, user) {
    switch (actionType) {
        case 'flood':
            return { text: IdleFloodAction(getRandonNumber(IdleFloodAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
        case 'fire':
            return { text: idleFireAction(getRandonNumber(idleFireAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
        default:
            return { text: IdleAction(getRandonNumber(IdleAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    }
}

export default idleActionSelector;