import { FIRE, FLOOD, STANDART } from "../helpers/constants";

let dayStatusList = [
  { action: "Ничего необычного", actionType: STANDART },
  { action: "Наводнение", actionType: FLOOD },
  { action: "Пожар", actionType: FIRE },
];

export default dayStatusList;
