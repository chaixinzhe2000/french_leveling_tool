import * as React from "react"
import { useRecoilState } from "recoil"
import { ACTFLLevelState } from "../atom"
import { ACTFLLevel } from "../levels"
import "./styles.css"

interface SelectorProps {
	ACTFL: ACTFLLevel
	isLast?: boolean
}

export const Selector = (props: SelectorProps) => {

	const { isLast, ACTFL } = props
	const [selectedLevel, setSelectedLevel] = useRecoilState(ACTFLLevelState)

	const isSelected = selectedLevel === ACTFL

	return (
		<div
			className={isSelected ? "selector-wrapper-selected" : "selector-wrapper"}
			onClick={() => { setSelectedLevel(ACTFL) }}
		>
			<div className={isLast ? "selector-black-box-up selector-end" : "selector-black-box-up"}>
				{ACTFL}
			</div>
			<div className={isLast ? "selector-black-box-down selector-end" : "selector-black-box-down"}>
				B1.2
			</div>
		</div >
	)
}