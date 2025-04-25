import AggresiveActionDAY from "../actions/standart-action/day/AggresiveActionDAY.js";
import AggresiveActionNIGHT from "../actions/standart-action/night/AggresiveActionNIGHT.js"
import AggresiveFloodAction from "../actions/flood-action/aggresiveFloodAction.js";
import aggresiveFireAction from "../actions/fire-action/aggresiveFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';

function aggresiveActionSelector(actionType, user, diedUser, diedUserIndex, time) {
  switch (actionType) {
    case "flood":
      return {
        text: AggresiveFloodAction(
          getRandonNumber(AggresiveFloodAction.caseLength),
          user.name,
          diedUser
        ),
        isAlive: true,
        anotherUserIndex: diedUserIndex,
        isAggresiveAction: true,
        murdersNumber: user.murdersNumber + 1,
      };
    case "fire":
      return {
        text: aggresiveFireAction(
          getRandonNumber(aggresiveFireAction.caseLength),
          user.name,
          diedUser
        ),
        isAlive: true,
        anotherUserIndex: diedUserIndex,
        isAggresiveAction: true,
        murdersNumber: user.murdersNumber + 1,
      };
    default:
      if (time == DAY) {
        return {
          text: AggresiveActionDAY(
            getRandonNumber(AggresiveActionDAY.caseLength),
            user.name,
            diedUser
          ),
          isAlive: true,
          anotherUserIndex: diedUserIndex,
          isAggresiveAction: true,
          murdersNumber: user.murdersNumber + 1,
        };
      } else {
        return {
          text: AggresiveActionNIGHT(
            getRandonNumber(AggresiveActionNIGHT.caseLength),
            user.name,
            diedUser
          ),
          isAlive: true,
          anotherUserIndex: diedUserIndex,
          isAggresiveAction: true,
          murdersNumber: user.murdersNumber + 1,
        };
      }

  }
}

export default aggresiveActionSelector;
