import friendlyFloodAction from "../flood-action/friendlyFloodAction.js"
import friendlyAction from "../standart-action/friendlyAction"
import getRandonNumber from "../helpers/getRandonNumber.js";

function friendlyActionSelector(actionType, user, secondName, anotherUserIndex) {
    if (actionType === 'standart') {
        return { text: friendlyAction(getRandonNumber(friendlyAction.caseLength), user.name, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
    } else {
        return { text: friendlyFloodAction(getRandonNumber(friendlyFloodAction.caseLength), user.name, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
    }
}

export default friendlyActionSelector;