import { atom } from "recoil";
import { ACTFLLevel, CEFRLLevel } from "./levels";

export const ACTFLLevelState = atom({
	key: 'ACTFLLevelState', // unique ID (with respect to other atoms/selectors)
	default: ACTFLLevel.NOVICE_LOW, // default value (aka initial value)
});

export const CEFRLLevelState = atom({
	key: 'CEFRLLevelState', // unique ID (with respect to other atoms/selectors)
	default: CEFRLLevel.BREAKTHROUGH // default value (aka initial value)
});