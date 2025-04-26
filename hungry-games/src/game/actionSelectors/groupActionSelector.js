import getRandonNumber from "../helpers/getRandonNumber.js";
import { DAY } from '../helpers/constants.js';
import groupActionDAY from '../actions/standart-action/day/groupActionDAY.js'
import groupActionNIGHT from '../actions/standart-action/night/groupActionNIGHT.js'
import groupFloodAction from '../actions/flood-action/groupFloodAction.js'
import groupFireAction from '../actions/fire-action/groupFireAction.js'

function groupActionSelector(
    actionType,
    user,
    secondName,
    secondName2,
    anotherUserIndex,
    anotherUserIndex2,
    time
) {
    switch (actionType) {
        case "flood":
            return {
                text: groupFloodAction(
                    getRandonNumber(groupFloodAction.caseLength),
                    user.name,
                    secondName,
                    secondName2,
                    time
                ),
                isAlive: true,
                anotherUserIndex: anotherUserIndex,
                anotherUserIndex2: anotherUserIndex2,
                murdersNumber: user.murdersNumber,
            };
        case "fire":
            return {
                text: groupFireAction(
                    getRandonNumber(groupFireAction.caseLength),
                    user.name,
                    secondName,
                    secondName2,
                    time
                ),
                isAlive: true,
                anotherUserIndex: anotherUserIndex,
                anotherUserIndex2: anotherUserIndex2,
                murdersNumber: user.murdersNumber,
            };
        default:
            if (time == DAY) {
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
                    anotherUserIndex2: anotherUserIndex2,
                    murdersNumber: user.murdersNumber,
                };
            } else {
                return {
                    text: groupActionNIGHT(
                        getRandonNumber(groupActionNIGHT.caseLength),
                        user.name,
                        secondName,
                        secondName2,
                        time
                    ),
                    isAlive: true,
                    anotherUserIndex: anotherUserIndex,
                    anotherUserIndex2: anotherUserIndex2,
                    murdersNumber: user.murdersNumber,
                };
            }
    }


}

export default groupActionSelector;
