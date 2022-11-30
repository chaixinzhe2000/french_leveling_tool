import { RadioGroup, Stack, Radio } from "@chakra-ui/react"
import * as React from "react"
import "./styles.css"

export const ModeSelector = () => {

	return (
		<RadioGroup defaultValue='reading'>
			<div className="radio-wrapper">
				<Radio value='reading' size='sm'>Reading</Radio>
				<Radio value='listening' size='sm'>Listening</Radio>
				<Radio value='speaking' size='sm'>Speaking</Radio>
				<Radio value='writing' size='sm'>Writing</Radio>
			</div>
		</RadioGroup>
	)
}