import * as React from "react"
import { useRecoilValue } from "recoil"
import { ACTFLLevelState } from "../atom"
import { ACTFLLevel } from "../levels"
import "./styles.css"

interface SelectorProps {
	isLast?: boolean
}

export const LevelTable = (props: SelectorProps) => {

	const selectedLevel = useRecoilValue(ACTFLLevelState)

	const getTopLevelClass = (levelArray: ACTFLLevel[]) => {
		let isSubClassSelected = false
		for (let i = 0; i < levelArray.length; i++) {
			if (levelArray[i] === selectedLevel) {
				isSubClassSelected = true
				break
			}
		}
		return isSubClassSelected ? "bold" : "normal"

	}
	const getSubLevelClass = (level: ACTFLLevel) => {
		return selectedLevel === level ? "bold" : "normal"
	}

	return (
		<table className="tg">
			<thead>
				<tr>
					<th className="tg-0pky" colSpan={2}>* ACTFL Levels</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="tg-0lax">
						<span
							className={getTopLevelClass([
								ACTFLLevel.NOVICE_LOW,
								ACTFLLevel.NOVICE_MID,
								ACTFLLevel.NOVICE_HIGH])}>
							N = Novice
						</span>
					</td>
					<td className="tg-0lax">
						<span className={getSubLevelClass(ACTFLLevel.NOVICE_LOW)}>Low</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.NOVICE_MID)}>Mid</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.NOVICE_HIGH)}>High</span></td>
				</tr>
				<tr>
					<td className="tg-0lax">
						<span
							className={getTopLevelClass([
								ACTFLLevel.INTERMEDIATE_LOW,
								ACTFLLevel.INTERMEDIATE_MID,
								ACTFLLevel.INTERMEDIATE_HIGH])}>
							I = Intermediate
						</span>
					</td>
					<td className="tg-0lax">
						<span className={getSubLevelClass(ACTFLLevel.INTERMEDIATE_LOW)}>Low</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.INTERMEDIATE_MID)}>Mid</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.INTERMEDIATE_HIGH)}>High</span></td>
				</tr>
				<tr>
					<td className="tg-0lax">
						<span
							className={getTopLevelClass([
								ACTFLLevel.ADVANCED_LOW,
								ACTFLLevel.ADVANCED_MID,
								ACTFLLevel.ADVANCED_HIGH])}>
							A = Advanced
						</span>
					</td>
					<td className="tg-0lax">
						<span className={getSubLevelClass(ACTFLLevel.ADVANCED_LOW)}>Low</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.ADVANCED_MID)}>Mid</span> |&nbsp;
						<span className={getSubLevelClass(ACTFLLevel.ADVANCED_HIGH)}>High</span></td>
				</tr>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							ACTFLLevel.SUPERIOR])}>
							S = Superior
						</span>
					</td>
					<td className="tg-0lax"></td>
				</tr>
			</tbody>
		</table >
	)
}
