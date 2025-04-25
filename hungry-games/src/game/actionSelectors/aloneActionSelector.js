import aloneActionDAY from "../actions/standart-action/day/aloneActionDAY.js";
import aloneActionNIGHT from "../actions/standart-action/night/aloneActionNIGHT.js"
import aloneFloodAction from "../actions/flood-action/aloneFloodAction.js";
import aloneFireAction from "../actions/fire-action/aloneFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';

function aloneActionSelector(actionType, user, time) {
  switch (actionType) {
    case "flood":
      return {
        text: aloneFloodAction(
          getRandonNumber(aloneFloodAction.caseLength),
          user.name
        ),
        isAlive: true,
        murdersNumber: user.murdersNumber,
      };
    case "fire":
      return {
        text: aloneFireAction(
          getRandonNumber(aloneFireAction.caseLength),
          user.name
        ),
        isAlive: true,
        murdersNumber: user.murdersNumber,
      };
    default:
      if (time == DAY) {
        return {
          text: aloneActionDAY(getRandonNumber(aloneActionDAY.caseLength), user.name, time),
          isAlive: true,
          murdersNumber: user.murdersNumber,
        };
      } else {
        return {
          text: aloneActionNIGHT(getRandonNumber(aloneActionNIGHT.caseLength), user.name, time),
          isAlive: true,
          murdersNumber: user.murdersNumber,
        };
      }

  }
}

export default aloneActionSelector;
