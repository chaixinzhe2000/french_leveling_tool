import * as React from "react"
import "./styles.css"

interface SelectorProps {
	isLast?: boolean
}

export const Selector = (props: SelectorProps) => {

	const { isLast } = props

	return (
		<div className="selector-wrapper">
			<div className={isLast ? "selector-black-box-up selector-end" : "selector-black-box-up"}>
				N.L
			</div>
			<div className={isLast ? "selector-black-box-down selector-end" : "selector-black-box-down"}>
				B1.2
			</div>
		</div >
	)
}
