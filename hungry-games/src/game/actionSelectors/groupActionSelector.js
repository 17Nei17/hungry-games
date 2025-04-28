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
  let paramArr = [user.name, secondName, secondName2, time];
  switch (actionType) {
    case FLOOD:
      textMessage = groupFloodAction(
        getRandonNumber(groupFloodAction.caseLength),
        paramArr
      );
    case FIRE:
      textMessage = groupFireAction(
        getRandonNumber(groupFireAction.caseLength),
        paramArr
      );
    default:
      if (time == DAY) {
        textMessage = groupActionDAY(
          getRandonNumber(groupActionDAY.caseLength),
          paramArr
        );
      } else {
        textMessage = groupActionNIGHT(
          getRandonNumber(groupActionNIGHT.caseLength),
          paramArr
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
