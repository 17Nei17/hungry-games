import suicideActionDAY from "../actions/standart-action/day/suicideActionDAY.js";
import suicideActionNIGHT from "../actions/standart-action/night/suicideActionNIGHT.js";
import suicideFloodAction from "../actions/flood-action/suicideFloodAction.js";
import suicideFireAction from "../actions/fire-action/suicideFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";

function suicideActionSelector(actionType, user, time) {
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = suicideFloodAction(
        suicideFloodAction(suicideFloodAction.caseLength),
        user.name
      );
    case FIRE:
      textMessage = suicideFireAction(
        suicideFireAction(suicideFireAction.caseLength),
        user.name
      );
    default:
      if (time == DAY) {
        textMessage = suicideActionDAY(
          getRandonNumber(suicideActionDAY.caseLength),
          user.name
        );
      } else {
        textMessage = suicideActionNIGHT(
          getRandonNumber(suicideActionNIGHT.caseLength),
          user.name
        );
      }
  }
  return {
    text: textMessage,
    isAlive: false,
    murdersNumber: user.murdersNumber,
  };
}

export default suicideActionSelector;
