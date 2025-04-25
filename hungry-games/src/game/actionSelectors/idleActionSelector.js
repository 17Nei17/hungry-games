import idleActionDAY from "../actions/standart-action/day/idleActionDAY.js";
import idleActionNIGHT from "../actions/standart-action/night/idleActionNIGHT.js"
import IdleFloodAction from "../actions/flood-action/idleFloodAction.js";
import idleFireAction from "../actions/fire-action/idleFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';

function idleActionSelector(actionType, user, time) {
  switch (actionType) {
    case "flood":
      return {
        text: IdleFloodAction(
          getRandonNumber(IdleFloodAction.caseLength),
          user.name
        ),
        isAlive: true,
        murdersNumber: user.murdersNumber,
      };
    case "fire":
      return {
        text: idleFireAction(
          getRandonNumber(idleFireAction.caseLength),
          user.name
        ),
        isAlive: true,
        murdersNumber: user.murdersNumber,
      };
    default:
      if (time == DAY) {
        return {
          text: idleActionDAY(getRandonNumber(idleActionDAY.caseLength), user.name),
          isAlive: true,
          murdersNumber: user.murdersNumber,
        };
      } else {
        return {
          text: idleActionNIGHT(getRandonNumber(idleActionNIGHT.caseLength), user.name),
          isAlive: true,
          murdersNumber: user.murdersNumber,
        };
      }

  }
}

export default idleActionSelector;
