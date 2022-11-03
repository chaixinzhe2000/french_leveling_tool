import * as React from "react"
import { ACTFLLevel } from "../levels"
import { Selector } from "../Selector/Selector"
import "./styles.css"

export const SelectorList = () => {

	return (
		<div className="selector-list-wrapper">
			<Selector ACTFL={ACTFLLevel.NOVICE_LOW} />
			<Selector ACTFL={ACTFLLevel.NOVICE_MID} />
			<Selector ACTFL={ACTFLLevel.NOVICE_HIGH} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_LOW} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_MID} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_HIGH} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_LOW} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_MID} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_HIGH} />
			<Selector ACTFL={ACTFLLevel.SUPERIOR} isLast={true} />
		</div>
	)
}
