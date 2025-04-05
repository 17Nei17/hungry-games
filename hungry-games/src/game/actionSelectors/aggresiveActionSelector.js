import AggresiveAction from "../standart-action/AggresiveAction"
import AggresiveFloodAction from "../flood-action/aggresiveFloodAction.js"
import getRandonNumber from "../helpers/getRandonNumber.js";

function aggresiveActionSelector(actionType, user, diedUser, diedUserIndex) {
    if (actionType === 'standart') {
        return { text: AggresiveAction(getRandonNumber(AggresiveAction.caseLength), user.name, diedUser), isAlive: true, anotherUserIndex: diedUserIndex, isAggresiveAction: true, murdersNumber: user.murdersNumber + 1 };
    } else {
        return { text: AggresiveFloodAction(getRandonNumber(AggresiveFloodAction.caseLength), user.name, diedUser), isAlive: true, anotherUserIndex: diedUserIndex, isAggresiveAction: true, murdersNumber: user.murdersNumber + 1 };
    }
}

export default aggresiveActionSelector;