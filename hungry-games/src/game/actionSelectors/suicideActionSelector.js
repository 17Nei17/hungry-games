import suicideActionDAY from "../actions/standart-action/day/suicideActionDAY.js";
import suicideActionNIGHT from "../actions/standart-action/night/suicideActionNIGHT.js"
import suicideFloodAction from "../actions/flood-action/suicideFloodAction.js";
import suicideFireAction from "../actions/fire-action/suicideFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';

function suicideActionSelector(actionType, user, time) {
  switch (actionType) {
    case "flood":
      return {
        text: suicideFloodAction(
          suicideFloodAction(suicideFloodAction.caseLength),
          user.name
        ),
        isAlive: false,
        murdersNumber: user.murdersNumber,
      };
    case "fire":
      return {
        text: suicideFireAction(
          suicideFireAction(suicideFireAction.caseLength),
          user.name
        ),
        isAlive: false,
        murdersNumber: user.murdersNumber,
      };
    default:
      if (time == DAY) {
        return {
          text: suicideActionDAY(
            getRandonNumber(suicideActionDAY.caseLength),
            user.name
          ),
          isAlive: false,
          murdersNumber: user.murdersNumber,
        };
      } else {
        return {
          text: suicideActionNIGHT(
            getRandonNumber(suicideActionNIGHT.caseLength),
            user.name
          ),
          isAlive: false,
          murdersNumber: user.murdersNumber,
        };
      }

  }
}

export default suicideActionSelector;
