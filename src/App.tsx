import * as React from "react"
import { ChakraProvider, LightMode } from "@chakra-ui/react"
import { SelectorList } from "./components/SelectorList/SelectorList"
import { RecoilRoot } from "recoil"
import { ACTFLLevelTable } from "./components/LevelTable/ACTFLLevelTable"
import { CEFRLLevelTable } from "./components/LevelTable/CEFRLLevelTable"
import "./App.css"
import { ModeSelector } from "./components/ModeSelector/ModeSelector"
import { MainTable } from "./components/MainTable/MainTable"

export const App = () => (
	<ChakraProvider>
		<LightMode>
			<RecoilRoot>
				<div className="root-wrapper">
					<div className="header">French Language Standards</div>
					<div className="header-wrapper">
						<SelectorList />
						<ModeSelector />
					</div>
					<div className="table-flex">
						<div>
							<ACTFLLevelTable />
							<CEFRLLevelTable />
						</div>
						<MainTable />
					</div>
					<div className="credits">
						Built at&nbsp;<b>Brown</b>&nbsp;by Nuj Naguleswaran and&nbsp;<a href="https://www.xchai.me" rel="noreferrer" target="_blank">Xinzhe Chai</a>
					</div>
				</div>
			</RecoilRoot>
		</LightMode>
	</ChakraProvider>
)
