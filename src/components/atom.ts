import { atom } from "recoil";
import { ACTFLLevel } from "./levels";

export const ACTFLLevelState = atom({
	key: 'ACTFLLevelState', // unique ID (with respect to other atoms/selectors)
	default: ACTFLLevel.NOVICE_LOW, // default value (aka initial value)
});