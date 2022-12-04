import { RadioGroup, Radio } from "@chakra-ui/react"
import * as React from "react"
import { useRecoilState } from "recoil"
import { TestAreaState } from "../atom"
import { TestArea } from "../levels"
import "./styles.css"

export const ModeSelector = () => {

	const [testArea, setTestArea] = useRecoilState(TestAreaState)

	return (
		<RadioGroup defaultValue={TestArea.READING} onChange={(e) => setTestArea(e as TestArea)}>
			<div className="radio-wrapper">
				<Radio value={TestArea.READING} size='sm' onClick={() => setTestArea(TestArea.READING)}>Reading</Radio>
				<Radio value={TestArea.LISTENING} size='sm' onClick={() => setTestArea(TestArea.LISTENING)}>Listening</Radio>
				<Radio value={TestArea.SPEAKING} size='sm' onClick={() => setTestArea(TestArea.READING)}>Speaking</Radio>
				<Radio value={TestArea.WRITING} size='sm' onClick={() => setTestArea(TestArea.READING)}>Writing</Radio>
			</div>
		</RadioGroup>
	)
}