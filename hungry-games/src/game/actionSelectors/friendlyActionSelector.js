import friendlyFloodAction from "../actions/flood-action/friendlyFloodAction.js"
import friendlyAction from "../actions/standart-action/friendlyAction.js"
import friendlyFiredAction from "../actions/fire-action/friendlyFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";

function friendlyActionSelector(actionType, user, secondName, anotherUserIndex) {
    switch (actionType) {
        case 'flood':
            return { text: friendlyFloodAction(getRandonNumber(friendlyFloodAction.caseLength), user.name, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
        case 'fire':
            return { text: friendlyFiredAction(getRandonNumber(friendlyFiredAction.caseLength), user.name, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
        default:
            return { text: friendlyAction(getRandonNumber(friendlyAction.caseLength), user.name, secondName), isAlive: true, anotherUserIndex: anotherUserIndex, murdersNumber: user.murdersNumber };
    }
}

export default friendlyActionSelector;