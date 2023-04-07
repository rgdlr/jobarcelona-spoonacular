import { PropsWithChildren, createContext, useState } from "react";
import { Locale } from "../constants";
import { I18N } from "../interfaces";

export const I18NContext = createContext<I18N>({});

export const I18NProvider = ({ children }: PropsWithChildren) => {
	const [locale, setLocale] = useState<Locale>(Locale.En);
	return <I18NContext.Provider value={{ locale, setLocale }}>{children}</I18NContext.Provider>;
};
