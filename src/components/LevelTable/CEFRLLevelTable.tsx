import * as React from "react"
import { useRecoilValue } from "recoil"
import { CEFRLLevelState } from "../atom"
import { CEFRLLevel } from "../levels"
import "./styles.css"

interface SelectorProps {
	isLast?: boolean
}

export const CEFRLLevelTable = (props: SelectorProps) => {

	const selectedLevel = useRecoilValue(CEFRLLevelState)

	const getTopLevelClass = (levelArray: CEFRLLevel[]) => {
		let isSubClassSelected = false
		for (let i = 0; i < levelArray.length; i++) {
			if (levelArray[i] === selectedLevel) {
				isSubClassSelected = true
				break
			}
		}
		return isSubClassSelected ? "bold" : "normal"

	}

	return (
		<table className="tg">
			<thead>
				<tr>
					<th className="tg-0pky" colSpan={1}>* CEFRL Levels</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.BREAKTHROUGH
						])}>
							A1 = Breakthrough
						</span>
					</td>

				</tr>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.WAYSTAGE
						])}>
							A2 = Waystage
						</span>
					</td>

				</tr>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.THRESHOLD_ONE,
							CEFRLLevel.THRESHOLD_TWO
						])}>
							B1 = Threshold
						</span>
					</td>
				</tr>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.VANTAGE_ONE,
							CEFRLLevel.VANTAGE_TWO
						])}>
							B2 = Vantage
						</span>
					</td>
				</tr>
				<tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.PROFICIENCY
						])}>
							C1 = Proficiency
						</span>
					</td>
				</tr><tr>
					<td className="tg-0lax">
						<span className={getTopLevelClass([
							CEFRLLevel.MASTERY
						])}>
							C2 = Mastery
						</span>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
