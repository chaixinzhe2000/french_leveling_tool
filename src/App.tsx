import * as React from "react"
import {
	ChakraProvider, Radio, RadioGroup, Stack,
} from "@chakra-ui/react"
import { SelectorList } from "./components/SelectorList/SelectorList"
import { RecoilRoot } from "recoil"
import { ACTFLLevelTable } from "./components/LevelTable/ACTFLLevelTable"
import { CEFRLLevelTable } from "./components/LevelTable/CEFRLLevelTable"
import "./App.css"
import { ModeSelector } from "./components/ModeSelector/ModeSelector"

export const App = () => (
	<ChakraProvider>
		<RecoilRoot>
			<div className="root-wrapper">
				<div className="header-wrapper">
					<SelectorList />
					<ModeSelector />
				</div>
				<div>
					<ACTFLLevelTable />
					<CEFRLLevelTable />
				</div>
			</div>
		</RecoilRoot>
	</ChakraProvider>
)
