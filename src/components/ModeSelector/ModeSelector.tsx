import { RadioGroup, Radio } from "@chakra-ui/react"
import * as React from "react"
import { useSetRecoilState } from "recoil"
import { TestAreaState } from "../atom"
import { TestArea } from "../levels"
import "./styles.css"

export const ModeSelector = () => {

	const setTestArea = useSetRecoilState(TestAreaState)

	return (
		<RadioGroup defaultValue={TestArea.READING} onChange={(e) => setTestArea(e as TestArea)}>
			<div className="radio-wrapper">
				<Radio value={TestArea.READING} size='sm' onClick={() => setTestArea(TestArea.READING)} borderColor="black">Reading</Radio>
				<Radio value={TestArea.LISTENING} size='sm' onClick={() => setTestArea(TestArea.LISTENING)} borderColor="black">Listening</Radio>
				<Radio value={TestArea.SPEAKING} size='sm' onClick={() => setTestArea(TestArea.READING)} borderColor="black">Speaking</Radio>
				<Radio value={TestArea.WRITING} size='sm' onClick={() => setTestArea(TestArea.READING)} borderColor="black">Writing</Radio>
			</div>
		</RadioGroup>
	)
}