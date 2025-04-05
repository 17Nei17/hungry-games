import aloneAction from "../standart-action/aloneAction"
import aloneFloodAction from "../flood-action/aloneFloodAction.js"
import getRandonNumber from "../helpers/getRandonNumber.js";

function aloneActionSelector(actionType, user) {
    if (actionType === 'standart') {
        return { text: aloneAction(getRandonNumber(aloneAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    } else {
        return { text: aloneFloodAction(getRandonNumber(aloneFloodAction.caseLength), user.name), isAlive: true, murdersNumber: user.murdersNumber };
    }
}

export default aloneActionSelector;