import friendlyFloodAction from "../actions/flood-action/friendlyFloodAction.js";
import friendlyActionDAY from "../actions/standart-action/day/friendlyActionDAY.js";
import friendlyActionNIGHT from "../actions/standart-action/night/friendlyActionNIGHT.js"
import friendlyFiredAction from "../actions/fire-action/friendlyFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';

function friendlyActionSelector(
  actionType,
  user,
  secondName,
  anotherUserIndex,
  time
) {
  switch (actionType) {
    case "flood":
      return {
        text: friendlyFloodAction(
          getRandonNumber(friendlyFloodAction.caseLength),
          user.name,
          secondName
        ),
        isAlive: true,
        anotherUserIndex: anotherUserIndex,
        murdersNumber: user.murdersNumber,
      };
    case "fire":
      return {
        text: friendlyFiredAction(
          getRandonNumber(friendlyFiredAction.caseLength),
          user.name,
          secondName
        ),
        isAlive: true,
        anotherUserIndex: anotherUserIndex,
        murdersNumber: user.murdersNumber,
      };
    default:
      if (time == DAY) {
        return {
          text: friendlyActionDAY(
            getRandonNumber(friendlyActionDAY.caseLength),
            user.name,
            secondName,
            time
          ),
          isAlive: true,
          anotherUserIndex: anotherUserIndex,
          murdersNumber: user.murdersNumber,
        };
      } else {
        return {
          text: friendlyActionNIGHT(
            getRandonNumber(friendlyActionNIGHT.caseLength),
            user.name,
            secondName,
            time
          ),
          isAlive: true,
          anotherUserIndex: anotherUserIndex,
          murdersNumber: user.murdersNumber,
        };
      }

  }
}

export default friendlyActionSelector;
