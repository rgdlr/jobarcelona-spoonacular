import { Locale } from "../constants";

export interface I18N {
	locale?: Locale;
	setLocale?(locale: Locale): void;
}
