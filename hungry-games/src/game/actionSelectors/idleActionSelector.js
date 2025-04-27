import idleActionDAY from "../actions/standart-action/day/idleActionDAY.js";
import idleActionNIGHT from "../actions/standart-action/night/idleActionNIGHT.js";
import IdleFloodAction from "../actions/flood-action/idleFloodAction.js";
import idleFireAction from "../actions/fire-action/idleFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";

function idleActionSelector(arr) {
  let [actionType, user, time] = arr;
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = IdleFloodAction(
        getRandonNumber(IdleFloodAction.caseLength),
        user.name
      );
    case FIRE:
      textMessage = idleFireAction(
        getRandonNumber(idleFireAction.caseLength),
        user.name
      );
    default:
      if (time == DAY) {
        textMessage = idleActionDAY(
          getRandonNumber(idleActionDAY.caseLength),
          user.name
        );
      } else {
        textMessage = idleActionNIGHT(
          getRandonNumber(idleActionNIGHT.caseLength),
          user.name
        );
      }
  }
  return {
    text: textMessage,
    isAlive: true,
    murdersNumber: user.murdersNumber,
  };
}

export default idleActionSelector;
