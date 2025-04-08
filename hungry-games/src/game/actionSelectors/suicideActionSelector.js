import suicideAction from "../actions/standart-action/suicideAction.js";
import suicideFloodAction from "../actions/flood-action/suicideFloodAction.js";
import suicideFireAction from "../actions/fire-action/suicideFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";

function suicideActionSelector(actionType, user) {
  switch (actionType) {
    case "flood":
      return {
        text: suicideFloodAction(
          suicideFloodAction(suicideAction.caseLength),
          user.name
        ),
        isAlive: false,
        murdersNumber: user.murdersNumber,
      };
    case "fire":
      return {
        text: suicideFireAction(
          suicideFireAction(suicideAction.caseLength),
          user.name
        ),
        isAlive: false,
        murdersNumber: user.murdersNumber,
      };
    default:
      return {
        text: suicideAction(
          getRandonNumber(suicideAction.caseLength),
          user.name
        ),
        isAlive: false,
        murdersNumber: user.murdersNumber,
      };
  }
}

export default suicideActionSelector;
