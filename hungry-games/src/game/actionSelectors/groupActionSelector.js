import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY, FIRE, FLOOD } from "../helpers/constants.js";
import groupActionDAY from "../actions/standart-action/day/groupActionDAY.js";
import groupActionNIGHT from "../actions/standart-action/night/groupActionNIGHT.js";
import groupFloodAction from "../actions/flood-action/groupFloodAction.js";
import groupFireAction from "../actions/fire-action/groupFireAction.js";

function groupActionSelector(
  arr,
  secondName,
  secondName2,
  anotherUserIndex,
  anotherUserIndex2
) {
  let [actionType, user, time] = arr;
  let textMessage = "";
  switch (actionType) {
    case FLOOD:
      textMessage = groupFloodAction(
        getRandonNumber(groupFloodAction.caseLength),
        user.name,
        secondName,
        secondName2,
        time
      );
    case FIRE:
      textMessage = groupFireAction(
        getRandonNumber(groupFireAction.caseLength),
        user.name,
        secondName,
        secondName2,
        time
      );
    default:
      if (time == DAY) {
        textMessage = groupActionDAY(
          getRandonNumber(groupActionDAY.caseLength),
          user.name,
          secondName,
          secondName2,
          time
        );
      } else {
        textMessage = groupActionNIGHT(
          getRandonNumber(groupActionNIGHT.caseLength),
          user.name,
          secondName,
          secondName2,
          time
        );
      }
  }
  return {
    text: textMessage,
    isAlive: true,
    anotherUserIndex: anotherUserIndex,
    anotherUserIndex2: anotherUserIndex2,
    murdersNumber: user.murdersNumber,
  };
}

export default groupActionSelector;
