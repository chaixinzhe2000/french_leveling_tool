import * as React from "react"
import { useEffect, useState } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { ACTFLLevelState, isAlternativeSubCategoryState, TestAreaState } from "../atom"
import { ACTFLContentListeningRichTextAlternative, ACTFLContentListeningRichTextMain, ACTFLContentReadingRichTextAlternative, ACTFLContentReadingRichTextMain, ACTFLContentSpeakingRichTextAlternative, ACTFLContentSpeakingRichTextMain, ACTFLContentWritingRichTextAlternative, ACTFLContentWritingRichTextMain, CEFRLContentListeningRichTextAlternative, CEFRLContentListeningRichTextMain, CEFRLContentReadingRichTextAlternative, CEFRLContentReadingRichTextMain, CEFRLContentSpeakingRichTextAlternative, CEFRLContentSpeakingRichTextMain, CEFRLContentWritingRichTextAlternative, CEFRLContentWritingRichTextMain } from "../content"
import { ACTFLLevel, TestArea } from "../levels"
import "./styles.css"

export const MainTable = () => {

	const selectedACTFLLevel = useRecoilValue(ACTFLLevelState)
	const selectedTestArea = useRecoilValue(TestAreaState)
	const [isAlternativeSubCategory, setIsAlternativeSubCategory] = useRecoilState(isAlternativeSubCategoryState)

	const [testAreaString, setTestAreaString]: [string, any] = useState(selectedTestArea)

	const [ACTFLContentOne, setACTFLContentOne]: [React.ReactElement, any] = useState(<></>)
	const [ACTFLContentTwo, setACTFLContentTwo]: [React.ReactElement, any] = useState(<></>)
	const [ACTFLContentThree, setACTFLContentThree]: [React.ReactElement, any] = useState(<></>)

	const [CEFRLContentOne, setCEFRLContentOne]: [React.ReactElement, any] = useState(<></>)
	const [CEFRLContentTwo, setCEFRLContentTwo]: [React.ReactElement, any] = useState(<></>)
	const [CEFRLContentThree, setCEFRLContentThree]: [React.ReactElement, any] = useState(<></>)

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

	const handleIsAlternativeSubCategoryChange = (isAlternative: boolean) => {
		setIsAlternativeSubCategory(isAlternative)
	}

	const getAssessmentAreaHeadingMain = () => {
		switch (selectedTestArea) {
			case TestArea.LISTENING: {
				return <>✵ InterPRETIVE Communication<br />★ Listening</>
			}
			case TestArea.READING: {
				return <>✵ InterPRETIVE Communication<br />★ Reading</>
			}
			case TestArea.SPEAKING: {
				return <>✵ InterPERSONAL Communication<br />★ Spoken Interaction</>
			}
			case TestArea.WRITING: {
				return <>✵ Presentational Communication<br />★ Writing</>
			}
		}
	}

	const getAssessmentAreaHeadingAlternative = () => {
		switch (selectedTestArea) {
			case TestArea.LISTENING: {
				return <>✵ InterPERSONAL Communication<br />★ Listening</>
			}
			case TestArea.READING: {
				return <>✵ InterPERSONAL Communication<br />★ Reading</>
			}
			case TestArea.SPEAKING: {
				return <>✵ Presentational Comms<br />★ Spoken Production</>
			}
			case TestArea.WRITING: {
				return <>✵ InterPERSONAL Communication<br />★ Writing</>
			}
		}
	}


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
		// main 
		if (!isAlternativeSubCategory) {
			switch (selectedTestArea) {
				case TestArea.LISTENING: {
					setTestAreaString(TestArea.LISTENING)
					setACTFLContentOne(ACTFLContentListeningRichTextMain[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentListeningRichTextMain[levelIndex])
					setACTFLContentThree(ACTFLContentListeningRichTextMain[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentListeningRichTextMain[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentListeningRichTextMain[levelIndex])
					setCEFRLContentThree(CEFRLContentListeningRichTextMain[levelIndex + 1])
					break
				}
				case TestArea.READING: {
					setTestAreaString(TestArea.READING)
					setACTFLContentOne(ACTFLContentReadingRichTextMain[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentReadingRichTextMain[levelIndex])
					setACTFLContentThree(ACTFLContentReadingRichTextMain[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentReadingRichTextMain[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentReadingRichTextMain[levelIndex])
					setCEFRLContentThree(CEFRLContentReadingRichTextMain[levelIndex + 1])
					break
				}
				case TestArea.SPEAKING: {
					setTestAreaString(TestArea.SPEAKING)
					setACTFLContentOne(ACTFLContentSpeakingRichTextMain[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentSpeakingRichTextMain[levelIndex])
					setACTFLContentThree(ACTFLContentSpeakingRichTextMain[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentSpeakingRichTextMain[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentSpeakingRichTextMain[levelIndex])
					setCEFRLContentThree(CEFRLContentSpeakingRichTextMain[levelIndex + 1])
					break
				}
				case TestArea.WRITING: {
					setTestAreaString(TestArea.WRITING)
					setACTFLContentOne(ACTFLContentWritingRichTextMain[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentWritingRichTextMain[levelIndex])
					setACTFLContentThree(ACTFLContentWritingRichTextMain[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentWritingRichTextMain[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentWritingRichTextMain[levelIndex])
					setCEFRLContentThree(CEFRLContentWritingRichTextMain[levelIndex + 1])
					break
				}
				default: {
					break
				}
			}
			// alternative
		} else {
			switch (selectedTestArea) {
				case TestArea.LISTENING: {
					setTestAreaString(TestArea.LISTENING)
					setACTFLContentOne(ACTFLContentListeningRichTextAlternative[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentListeningRichTextAlternative[levelIndex])
					setACTFLContentThree(ACTFLContentListeningRichTextAlternative[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentListeningRichTextAlternative[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentListeningRichTextAlternative[levelIndex])
					setCEFRLContentThree(CEFRLContentListeningRichTextAlternative[levelIndex + 1])
					break
				}
				case TestArea.READING: {
					setTestAreaString(TestArea.READING)
					setACTFLContentOne(ACTFLContentReadingRichTextAlternative[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentReadingRichTextAlternative[levelIndex])
					setACTFLContentThree(ACTFLContentReadingRichTextAlternative[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentReadingRichTextAlternative[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentReadingRichTextAlternative[levelIndex])
					setCEFRLContentThree(CEFRLContentReadingRichTextAlternative[levelIndex + 1])
					break
				}
				case TestArea.SPEAKING: {
					setTestAreaString(TestArea.SPEAKING)
					setACTFLContentOne(ACTFLContentSpeakingRichTextAlternative[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentSpeakingRichTextAlternative[levelIndex])
					setACTFLContentThree(ACTFLContentSpeakingRichTextAlternative[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentSpeakingRichTextAlternative[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentSpeakingRichTextAlternative[levelIndex])
					setCEFRLContentThree(CEFRLContentSpeakingRichTextAlternative[levelIndex + 1])
					break
				}
				case TestArea.WRITING: {
					setTestAreaString(TestArea.WRITING)
					setACTFLContentOne(ACTFLContentWritingRichTextAlternative[levelIndex - 1])
					setACTFLContentTwo(ACTFLContentWritingRichTextAlternative[levelIndex])
					setACTFLContentThree(ACTFLContentWritingRichTextAlternative[levelIndex + 1])
					setCEFRLContentOne(CEFRLContentWritingRichTextAlternative[levelIndex - 1])
					setCEFRLContentTwo(CEFRLContentWritingRichTextAlternative[levelIndex])
					setCEFRLContentThree(CEFRLContentWritingRichTextAlternative[levelIndex + 1])
					break
				}
				default: {
					break
				}
			}
		}
	}, [levelIndex, selectedTestArea, isAlternativeSubCategory])

	useEffect(() => {
		setLevel()
		// eslint-disable-next-line react-hooks/exhaustive-deps	
	}, [selectedACTFLLevel])

	return (
		<div>
			<table className="tg table-wrapper">
				<tr>
					<th
						className={`main-table-header ${!isAlternativeSubCategory && "selected-cell"}`}
						colSpan={1}
						style={{ paddingLeft: 15 }}
						onClick={() => { handleIsAlternativeSubCategoryChange(false) }}>
						{testAreaString}<br /><p style={{ display: "inline", fontWeight: 500 }}>{getAssessmentAreaHeadingMain()}</p>
					</th>
					<th className={`main-table-header ${isAlternativeSubCategory && "selected-cell"}`}
						colSpan={1}
						style={{ paddingLeft: 15 }}
						onClick={() => { handleIsAlternativeSubCategoryChange(true) }}>
						{testAreaString}<br /><p style={{ display: "inline", fontWeight: 500 }}>{getAssessmentAreaHeadingAlternative()}</p>
					</th>
				</tr>
			</table>
			<table className="tg table-wrapper" style={{ marginTop: 10 }}>
				<tbody>
					<tr>
						<td className="tg-mqa1 actfl-header" colSpan={6}>✵ <b>ACTFL</b> (<b>A</b>merican <b>C</b>ouncil on the <b>T</b>eaching of <b>F</b>oreign <b>L</b>anguages)</td>
					</tr>
					<tr>
						<td className="tg-wp8o actfl-level-one">{ACTFLLevelHeadingArray[levelIndex - 1]}</td>
						<td className="tg-wp8o actfl-level-one selected-cell">{ACTFLLevelHeadingArray[levelIndex]}</td>
						<td className="tg-baqh actfl-level-one">{ACTFLLevelHeadingArray[levelIndex + 1]}</td>
					</tr>
					<tr>
						<td className="tg-73oq">{ACTFLContentOne}</td>
						<td className="tg-73oq">{ACTFLContentTwo}</td>
						<td className="tg-73oq">{ACTFLContentThree}</td>
					</tr>
					<tr>
						<td className="tg-mqa1 cefrl-header" colSpan={3}>★ <b>CEFRL</b> (<b>C</b>ommon <b>E</b>uropean <b>F</b>ramework of <b>R</b>eference for <b>L</b>anguages)</td>
					</tr>
					<tr>
						<td className="tg-baqh cefrl-level-one">{CEFRLLevelHeadingArray[levelIndex - 1]}</td>
						<td className="tg-baqh cefrl-level-one selected-cell">{CEFRLLevelHeadingArray[levelIndex]}</td>
						<td className="tg-baqh cefrl-level-one">{CEFRLLevelHeadingArray[levelIndex + 1]}</td>
					</tr>
					<tr>
						<td className="tg-73oq">{CEFRLContentOne}</td>
						<td className="tg-73oq">{CEFRLContentTwo}</td>
						<td className="tg-73oq">{CEFRLContentThree}</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}