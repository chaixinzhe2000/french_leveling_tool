import * as React from "react"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { ACTFLLevelState, TestAreaState } from "../atom"
import { ACTFLContentListening, ACTFLContentReading, ACTFLContentSpeaking, ACTFLContentWriting, CEFRLContentListening, CEFRLContentReading, CEFRLContentSpeaking, CEFRLContentWriting } from "../content"
import { ACTFLLevel, TestArea } from "../levels"
import "./styles.css"

export const MainTable = () => {

	const selectedACTFLLevel = useRecoilValue(ACTFLLevelState)
	const selectedTestArea = useRecoilValue(TestAreaState)

	const [testAreaString, setTestAreaString]: [string, any] = useState(selectedTestArea)

	const [ACTFLContentOne, setACTFLContentOne]: [string, any] = useState("")
	const [ACTFLContentTwo, setACTFLContentTwo]: [string, any] = useState("")
	const [ACTFLContentThree, setACTFLContentThree]: [string, any] = useState("")

	const [CEFRLContentOne, setCEFRLContentOne]: [string, any] = useState("")
	const [CEFRLContentTwo, setCEFRLContentTwo]: [string, any] = useState("")
	const [CEFRLContentThree, setCEFRLContentThree]: [string, any] = useState("")

	const [levelIndex, setLevelIndex]: [number, any] = useState(1)

	const ACTFLLevelHeadingArray = [
		"N/A",
		"Novice Low",
		"Novice Mid",
		"Novice High",
		"Intermediate Low",
		"Intermediate Mid",
		"Intermediate High",
		"Advanced Low",
		"Advanced Mid",
		"Advanced High",
		"Superior",
		"N/A"
	]

	const CEFRLLevelHeadingArray = [
		"N/A",
		"N/A",
		"N/A",
		"A1",
		"A2",
		"B1.1",
		"B1.2",
		"B2.1",
		"B2.2",
		"C1",
		"C2",
		"N/A"
	]

	const setLevel = () => {
		switch (selectedACTFLLevel) {
			case ACTFLLevel.NOVICE_LOW: {
				setLevelIndex(1)
				break
			}
			case ACTFLLevel.NOVICE_MID: {
				setLevelIndex(2)
				break
			}
			case ACTFLLevel.NOVICE_HIGH: {
				setLevelIndex(3)
				break
			}
			case ACTFLLevel.INTERMEDIATE_LOW: {
				setLevelIndex(4)
				break
			}
			case ACTFLLevel.INTERMEDIATE_MID: {
				setLevelIndex(5)
				break
			}
			case ACTFLLevel.INTERMEDIATE_HIGH: {
				setLevelIndex(6)
				break
			}
			case ACTFLLevel.ADVANCED_LOW: {
				setLevelIndex(7)
				break
			}
			case ACTFLLevel.ADVANCED_MID: {
				setLevelIndex(8)
				break
			}
			case ACTFLLevel.ADVANCED_HIGH: {
				setLevelIndex(9)
				break
			}
			case ACTFLLevel.SUPERIOR: {
				setLevelIndex(10)
				break
			}
		}
	}

	useEffect(() => {
		switch (selectedTestArea) {
			case TestArea.LISTENING: {
				setTestAreaString(TestArea.LISTENING)
				setACTFLContentOne(ACTFLContentListening[levelIndex - 1])
				setACTFLContentTwo(ACTFLContentListening[levelIndex])
				setACTFLContentThree(ACTFLContentListening[levelIndex + 1])
				setCEFRLContentOne(CEFRLContentListening[levelIndex - 1])
				setCEFRLContentTwo(CEFRLContentListening[levelIndex])
				setCEFRLContentThree(CEFRLContentListening[levelIndex + 1])
				break
			}
			case TestArea.READING: {
				setTestAreaString(TestArea.READING)
				setACTFLContentOne(ACTFLContentReading[levelIndex - 1])
				setACTFLContentTwo(ACTFLContentReading[levelIndex])
				setACTFLContentThree(ACTFLContentReading[levelIndex + 1])
				setCEFRLContentOne(CEFRLContentReading[levelIndex - 1])
				setCEFRLContentTwo(CEFRLContentReading[levelIndex])
				setCEFRLContentThree(CEFRLContentReading[levelIndex + 1])
				break
			}
			case TestArea.SPEAKING: {
				setTestAreaString(TestArea.SPEAKING)
				setACTFLContentOne(ACTFLContentSpeaking[levelIndex - 1])
				setACTFLContentTwo(ACTFLContentSpeaking[levelIndex])
				setACTFLContentThree(ACTFLContentSpeaking[levelIndex + 1])
				setCEFRLContentOne(CEFRLContentSpeaking[levelIndex - 1])
				setCEFRLContentTwo(CEFRLContentSpeaking[levelIndex])
				setCEFRLContentThree(CEFRLContentSpeaking[levelIndex + 1])
				break
			}
			case TestArea.WRITING: {
				setTestAreaString(TestArea.WRITING)
				setACTFLContentOne(ACTFLContentWriting[levelIndex - 1])
				setACTFLContentTwo(ACTFLContentWriting[levelIndex])
				setACTFLContentThree(ACTFLContentWriting[levelIndex + 1])
				setCEFRLContentOne(CEFRLContentWriting[levelIndex - 1])
				setCEFRLContentTwo(CEFRLContentWriting[levelIndex])
				setCEFRLContentThree(CEFRLContentWriting[levelIndex + 1])
				break
			}
			default: {
				break
			}
		}
	}, [levelIndex, selectedTestArea])

	useEffect(() => {
		setLevel()
		// eslint-disable-next-line react-hooks/exhaustive-deps	
	}, [selectedACTFLLevel])

	return (
		<table className="tg table-wrapper">
			<thead>
				<tr>
					<th className="tg-wp8o" colSpan={3}>{testAreaString}</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className="tg-mqa1" colSpan={3}>ACTFL (American Council on the Teaching of Foreign Languages)</td>
				</tr>
				<tr>
					<td className="tg-wp8o">{ACTFLLevelHeadingArray[levelIndex - 1]}</td>
					<td className="tg-wp8o">{ACTFLLevelHeadingArray[levelIndex]}</td>
					<td className="tg-baqh">{ACTFLLevelHeadingArray[levelIndex + 1]}</td>
				</tr>
				<tr>
					<td className="tg-73oq">{ACTFLContentOne}</td>
					<td className="tg-73oq">{ACTFLContentTwo}</td>
					<td className="tg-0lax">{ACTFLContentThree}</td>
				</tr>
				<tr>
					<td className="tg-wp8o" colSpan={3}><span>CEFRL (Common European Framework of Reference for Languages)</span></td>
				</tr>
				<tr>
					<td className="tg-baqh">{CEFRLLevelHeadingArray[levelIndex - 1]}</td>
					<td className="tg-baqh">{CEFRLLevelHeadingArray[levelIndex]}</td>
					<td className="tg-baqh">{CEFRLLevelHeadingArray[levelIndex + 1]}</td>
				</tr>
				<tr>
					<td className="tg-0lax">{CEFRLContentOne}</td>
					<td className="tg-0lax">{CEFRLContentTwo}</td>
					<td className="tg-0lax">{CEFRLContentThree}</td>
				</tr>
			</tbody>
		</table>
	)
}