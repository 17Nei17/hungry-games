import {
  SUICIDE,
  IDLE,
  FRIENDLY,
  AGGRESIVE,
  GROUP,
} from "../helpers/constants";

function actionSelector(num) {
  let action;
  if (num >= 0 && num <= 10) {
    action = SUICIDE;
  } else if (num > 10 && num <= 45) {
    action = IDLE;
  } else if (num > 45 && num <= 75) {
    action = FRIENDLY;
  } else if (num > 75 && num <= 90) {
    action = AGGRESIVE;
  } else if (num > 90 && num <= 100) {
    action = GROUP;
  }

  return action;
}

export default actionSelector;
