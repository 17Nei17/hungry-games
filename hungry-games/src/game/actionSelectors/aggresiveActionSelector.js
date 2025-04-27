import AggresiveActionDAY from "../actions/standart-action/day/AggresiveActionDAY.js";
import AggresiveActionNIGHT from "../actions/standart-action/night/AggresiveActionNIGHT.js";
import AggresiveFloodAction from "../actions/flood-action/aggresiveFloodAction.js";
import aggresiveFireAction from "../actions/fire-action/aggresiveFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";

function aggresiveActionSelector(arr, diedUser, diedUserIndex) {
  let [actionType, user, time] = arr;
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = AggresiveFloodAction(
        getRandonNumber(AggresiveFloodAction.caseLength),
        user.name,
        diedUser
      );
    case FIRE:
      textMessage = aggresiveFireAction(
        getRandonNumber(aggresiveFireAction.caseLength),
        user.name,
        diedUser
      );
    default:
      if (time == DAY) {
        textMessage = AggresiveActionDAY(
          getRandonNumber(AggresiveActionDAY.caseLength),
          user.name,
          diedUser
        );
      } else {
        textMessage = AggresiveActionNIGHT(
          getRandonNumber(AggresiveActionNIGHT.caseLength),
          user.name,
          diedUser
        );
      }
  }
  return {
    text: textMessage,
    isAlive: true,
    anotherUserIndex: diedUserIndex,
    isAggresiveAction: true,
    murdersNumber: user.murdersNumber + 1,
  };
}

export default aggresiveActionSelector;
