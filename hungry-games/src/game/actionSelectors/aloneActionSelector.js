import aloneActionDAY from "../actions/standart-action/day/aloneActionDAY.js";
import aloneActionNIGHT from "../actions/standart-action/night/aloneActionNIGHT.js";
import aloneFloodAction from "../actions/flood-action/aloneFloodAction.js";
import aloneFireAction from "../actions/fire-action/aloneFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";

function aloneActionSelector(arr) {
  let [actionType, user, time] = arr;
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = aloneFloodAction(
        getRandonNumber(aloneFloodAction.caseLength),
        user.name
      );
    case FIRE:
      textMessage = aloneFireAction(
        getRandonNumber(aloneFireAction.caseLength),
        user.name
      );
    default:
      if (time == DAY) {
        textMessage = aloneActionDAY(
          getRandonNumber(aloneActionDAY.caseLength),
          user.name,
          time
        );
      } else {
        textMessage = aloneActionNIGHT(
          getRandonNumber(aloneActionNIGHT.caseLength),
          user.name,
          time
        );
      }
  }
  return {
    text: textMessage,
    isAlive: true,
    murdersNumber: user.murdersNumber,
  };
}

export default aloneActionSelector;
