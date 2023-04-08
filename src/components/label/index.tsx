import { ReactElement } from "react";
import "./index.css";

export function Label(attributes: any): ReactElement {
	const { children, className, position = "bottom", ...restAttributes } = attributes;
	return (
		<label {...restAttributes} className={`label label--${position}`}>
			{children}
		</label>
	);
}
