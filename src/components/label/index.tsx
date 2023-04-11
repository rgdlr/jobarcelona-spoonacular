import { LabelHTMLAttributes } from "react";
import { Position } from "../../constants";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface CustomLabelAttributes extends LabelHTMLAttributes<HTMLLabelElement> {
	position?: Position;
}

export function Label(attributes: CustomLabelAttributes): JSX.Element {
	const { children, className, position = Position.BOTTOM, ...restAttributes } = attributes;
	return (
		<label
			{...restAttributes}
			className={computeClassNames("label", `label--${position}`, className)}>
			{children}
		</label>
	);
}
