import { useContext } from "react";
import { I18NContext } from "../contexts";

export const useI18N = () => {
	const { locale, setLocale } = useContext(I18NContext);
	return { locale, setLocale };
};
