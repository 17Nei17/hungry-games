import friendlyFloodAction from "../actions/flood-action/friendlyFloodAction.js";
import friendlyActionDAY from "../actions/standart-action/day/friendlyActionDAY.js";
import friendlyActionNIGHT from "../actions/standart-action/night/friendlyActionNIGHT.js"
import friendlyFiredAction from "../actions/fire-action/friendlyFireAction.js";
import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';
import groupActionDAY from '../actions/standart-action/day/groupActionDAY.js'


function groupActionSelector(
    actionType,
    user,
    secondName,
    secondName2,
    anotherUserIndex,
    anotherUserIndex2,
    time
) {

    return {
        text: groupActionDAY(
            getRandonNumber(groupActionDAY.caseLength),
            user.name,
            secondName,
            secondName2,
            time
        ),
        isAlive: true,
        anotherUserIndex: anotherUserIndex,
        murdersNumber: user.murdersNumber,
    };

}

export default groupActionSelector;
