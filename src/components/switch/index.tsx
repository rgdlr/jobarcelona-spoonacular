import { InputHTMLAttributes } from "react";
import "./index.css";

export interface CustomSwitchAttributes extends InputHTMLAttributes<HTMLInputElement> {
	leftLabel?: JSX.Element;
	rightLabel?: JSX.Element;
}

export function Switch(attributes: CustomSwitchAttributes): JSX.Element {
	const { id, leftLabel, rightLabel, ...restAttributes } = attributes;
	return (
		<div className="switch">
			<label className="switch__label" htmlFor={id}>
				{leftLabel}
			</label>
			<input {...restAttributes} className="switch__input" id={id} type="checkbox" />
			<label className="switch__label" htmlFor={id}>
				{rightLabel}
			</label>
		</div>
	);
}
