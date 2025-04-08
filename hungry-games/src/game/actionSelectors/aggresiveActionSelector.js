import AggresiveAction from "../actions/standart-action/AggresiveAction.js";
import AggresiveFloodAction from "../actions/flood-action/aggresiveFloodAction.js";
import aggresiveFireAction from "../actions/fire-action/aggresiveFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";

function aggresiveActionSelector(actionType, user, diedUser, diedUserIndex) {
  switch (actionType) {
    case "flood":
      return {
        text: AggresiveFloodAction(
          getRandonNumber(AggresiveFloodAction.caseLength),
          user.name,
          diedUser
        ),
        isAlive: true,
        anotherUserIndex: diedUserIndex,
        isAggresiveAction: true,
        murdersNumber: user.murdersNumber + 1,
      };
    case "fire":
      return {
        text: aggresiveFireAction(
          getRandonNumber(aggresiveFireAction.caseLength),
          user.name,
          diedUser
        ),
        isAlive: true,
        anotherUserIndex: diedUserIndex,
        isAggresiveAction: true,
        murdersNumber: user.murdersNumber + 1,
      };
    default:
      return {
        text: AggresiveAction(
          getRandonNumber(AggresiveAction.caseLength),
          user.name,
          diedUser
        ),
        isAlive: true,
        anotherUserIndex: diedUserIndex,
        isAggresiveAction: true,
        murdersNumber: user.murdersNumber + 1,
      };
  }
}

export default aggresiveActionSelector;
