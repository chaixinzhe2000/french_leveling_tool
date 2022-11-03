import * as React from "react"
import {
	ChakraProvider,
	theme,
} from "@chakra-ui/react"
import { SelectorList } from "./components/SelectorList/SelectorList"
import { RecoilRoot } from "recoil"
import { LevelTable } from "./components/LevelTable/LevelTable"

export const App = () => (
	<ChakraProvider theme={theme}>
		<RecoilRoot>
			<SelectorList />
			<LevelTable />
		</RecoilRoot>
	</ChakraProvider>
)
