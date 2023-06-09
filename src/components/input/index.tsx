import { InputHTMLAttributes } from "react";
import { computeClassNames } from "../../utils";
import "./index.css";

export type CustomInputAttributes = InputHTMLAttributes<HTMLInputElement>;

export function Input(attributes: CustomInputAttributes): JSX.Element {
	const { className, ...restAttributes } = attributes;
	return <input {...restAttributes} className={computeClassNames("input", className)} />;
}
