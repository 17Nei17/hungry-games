import friendlyFloodAction from "../actions/flood-action/friendlyFloodAction.js";
import friendlyActionDAY from "../actions/standart-action/day/friendlyActionDAY.js";
import friendlyActionNIGHT from "../actions/standart-action/night/friendlyActionNIGHT.js";
import friendlyFiredAction from "../actions/fire-action/friendlyFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";

function friendlyActionSelector(
  actionType,
  user,
  secondName,
  anotherUserIndex,
  time
) {
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = friendlyFloodAction(
        getRandonNumber(friendlyFloodAction.caseLength),
        user.name,
        secondName
      );
    case FIRE:
      textMessage = friendlyFiredAction(
        getRandonNumber(friendlyFiredAction.caseLength),
        user.name,
        secondName
      );
    default:
      if (time == DAY) {
        textMessage = friendlyActionDAY(
          getRandonNumber(friendlyActionDAY.caseLength),
          user.name,
          secondName,
          time
        );
      } else {
        textMessage = friendlyActionNIGHT(
          getRandonNumber(friendlyActionNIGHT.caseLength),
          user.name,
          secondName,
          time
        );
      }
  }
  return {
    text: textMessage,
    isAlive: true,
    anotherUserIndex: anotherUserIndex,
    murdersNumber: user.murdersNumber,
  };
}

export default friendlyActionSelector;
