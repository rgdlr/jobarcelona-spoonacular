import { InputHTMLAttributes } from "react";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface CustomSwitchAttributes extends InputHTMLAttributes<HTMLInputElement> {
	leftLabel?: JSX.Element;
	rightLabel?: JSX.Element;
}

export function Switch(attributes: CustomSwitchAttributes): JSX.Element {
	const { className, id, leftLabel, rightLabel, ...restAttributes } = attributes;
	return (
		<div className={computeClassNames("switch", className)}>
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
