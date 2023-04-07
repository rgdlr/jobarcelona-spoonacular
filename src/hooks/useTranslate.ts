import { useEffect, useState } from "react";
import { Locale } from "../constants";
import { useI18N } from "../hooks";

async function getTranslations(locale: Locale | undefined) {
	const translations = await import(`../i18n/${locale}.json`);
	return translations.default;
}

function getKeyArgsAmount(key: string) {
	return key
		.split(" ")
		.reduce(
			(numberOfKeyArgs, keyArg) => (/\$\d+/g.test(keyArg) ? ++numberOfKeyArgs : numberOfKeyArgs),
			0
		);
}

export function useTranslate() {
	const { locale } = useI18N();
	const [translations, setTranslations] = useState();

	useEffect(() => {
		async function updateTranslations() {
			setTranslations(await getTranslations(locale));
		}
		updateTranslations();
	}, [locale]);

	const translate = (key: string, ...args: (number | string | undefined)[]) => {
		const keyArgsAmount = getKeyArgsAmount(key);
		if (keyArgsAmount !== args.length) {
			throw new Error("number of arguments does not match in translate");
		}
		if (translations) {
			let translation: string = translations[key] || key;
			args.forEach((arg, index) => {
				translation = translation.replace(`$${++index}`, String(arg ?? "?"));
			});
			return translation;
		}
	};

	return { translate };
}
