import { atom } from "recoil";
import { ACTFLLevel, CEFRLLevel, TestArea } from "./levels";

export const ACTFLLevelState = atom({
	key: 'ACTFLLevelState', // unique ID (with respect to other atoms/selectors)
	default: ACTFLLevel.NOVICE_LOW, // default value (aka initial value)
});

export const CEFRLLevelState = atom({
	key: 'CEFRLLevelState', // unique ID (with respect to other atoms/selectors)
	default: CEFRLLevel.BREAKTHROUGH // default value (aka initial value)
});

export const isAlternativeSubCategoryState = atom({
	key: 'isAlternativeSubCategoryState', // unique ID (with respect to other atoms/selectors)
	default: false // default value (aka initial value)
});

export const TestAreaState = atom({
	key: 'TestAreaState',
	default: TestArea.READING
})