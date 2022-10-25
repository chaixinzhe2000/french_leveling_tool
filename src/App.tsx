import * as React from "react"
import {
	ChakraProvider,
	Box,
	Text,
	Link,
	VStack,
	Code,
	Grid,
	theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Selector } from "./components/Selector/Selector"
import { SelectorList } from "./components/SelectorList/SelectorList"

export const App = () => (
	<ChakraProvider theme={theme}>
		<SelectorList />
	</ChakraProvider>
)
