import { PropsWithChildren } from "react";
import "./index.css";

export function Main(attributes: PropsWithChildren) {
	const { children } = attributes;
	return <main className="main">{children}</main>;
}
