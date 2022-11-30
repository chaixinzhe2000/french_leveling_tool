import * as React from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { ACTFLLevelState, CEFRLLevelState } from "../atom"
import { ACTFLLevel, CEFRLLevel } from "../levels"
import "./styles.css"

interface SelectorProps {
	ACTFL: ACTFLLevel
	CEFRL: CEFRLLevel
	isLast?: boolean
}

export const Selector = (props: SelectorProps) => {

	const { isLast, ACTFL, CEFRL } = props
	const [selectedACTFLLevel, setSelectedACTFLLevel] = useRecoilState(ACTFLLevelState)
	const setSelectedCEFRLLevel = useSetRecoilState(CEFRLLevelState)

	const isSelected = selectedACTFLLevel === ACTFL

	return (
		<div
			className={isSelected ? "selector-wrapper-selected" : "selector-wrapper"}
			onClick={() => { setSelectedACTFLLevel(ACTFL); setSelectedCEFRLLevel(CEFRL) }}
		>
			<div className={isLast ? "selector-black-box-up selector-end" : "selector-black-box-up"}>
				{ACTFL}
			</div>
			<div className={isLast ? "selector-black-box-down selector-end" : "selector-black-box-down"}>
				{CEFRL === CEFRLLevel.UNDEFINED ? "-" : CEFRL}
			</div>
		</div >
	)
}