import { PropsWithChildren } from "react";
import { I18NProvider } from "../contexts";

export function ContextProvider({ children }: PropsWithChildren): JSX.Element {
	return <I18NProvider>{children}</I18NProvider>;
}
