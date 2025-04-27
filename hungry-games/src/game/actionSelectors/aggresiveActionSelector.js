import AggresiveActionDAY from "../actions/standart-action/day/AggresiveActionDAY.js";
import AggresiveActionNIGHT from "../actions/standart-action/night/AggresiveActionNIGHT.js";
import AggresiveFloodAction from "../actions/flood-action/aggresiveFloodAction.js";
import aggresiveFireAction from "../actions/fire-action/aggresiveFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from "../helpers/constants.js";

function aggresiveActionSelector(
  actionType,
  user,
  diedUser,
  diedUserIndex,
  time
) {
  let textMessage = "";
  switch (actionType) {
    case "flood":
      textMessage = AggresiveFloodAction(
        getRandonNumber(AggresiveFloodAction.caseLength),
        user.name,
        diedUser
      );
    case "fire":
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
