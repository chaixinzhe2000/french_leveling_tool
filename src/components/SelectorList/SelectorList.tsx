import * as React from "react"
import { ACTFLLevel, CEFRLLevel } from "../levels"
import { Selector } from "../Selector/Selector"
import "./styles.css"

export const SelectorList = () => {

	return (
		<div className="selector-list-wrapper">
			<div
				className="selector-title-wrapper">
				<b className="box-up">
					✵ ACTFL
				</b>
				<b className="box-down">
					★ CEFRL
				</b>
			</div >
			<Selector ACTFL={ACTFLLevel.NOVICE_LOW} CEFRL={CEFRLLevel.UNDEFINED} />
			<Selector ACTFL={ACTFLLevel.NOVICE_MID} CEFRL={CEFRLLevel.UNDEFINED} />
			<Selector ACTFL={ACTFLLevel.NOVICE_HIGH} CEFRL={CEFRLLevel.BREAKTHROUGH} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_LOW} CEFRL={CEFRLLevel.WAYSTAGE} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_MID} CEFRL={CEFRLLevel.THRESHOLD_ONE} />
			<Selector ACTFL={ACTFLLevel.INTERMEDIATE_HIGH} CEFRL={CEFRLLevel.THRESHOLD_TWO} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_LOW} CEFRL={CEFRLLevel.VANTAGE_ONE} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_MID} CEFRL={CEFRLLevel.VANTAGE_TWO} />
			<Selector ACTFL={ACTFLLevel.ADVANCED_HIGH} CEFRL={CEFRLLevel.PROFICIENCY} />
			<Selector ACTFL={ACTFLLevel.SUPERIOR} isLast={true} CEFRL={CEFRLLevel.MASTERY} />
		</div>
	)
}
