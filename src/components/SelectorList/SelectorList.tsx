import * as React from "react"
import { Selector } from "../Selector/Selector"
import "./styles.css"

export const SelectorList = () => {

	return (
		<div className="selector-list-wrapper">
			<Selector />
			<Selector />
			<Selector />
			<Selector isLast={true} />

		</div>
	)
}
