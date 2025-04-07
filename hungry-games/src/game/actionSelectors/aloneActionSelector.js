import aloneAction from "../actions/standart-action/aloneAction.js"
import aloneFloodAction from "../actions/flood-action/aloneFloodAction.js"
import aloneFireAction from "../actions/fire-action/aloneFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";

function aloneActionSelector(actionType, user) {
    switch (actionType) {
        case 'flood':
            return { text: aloneFloodAction(getRandonNumber(aloneFloodAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
        case 'fire':
            return { text: aloneFireAction(getRandonNumber(aloneFireAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
        default:
            return { text: aloneAction(getRandonNumber(aloneAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    }
}

export default aloneActionSelector;