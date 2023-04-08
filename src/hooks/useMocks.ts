import { useInterceptor } from "../hooks";

export function useMocks() {
	useInterceptor((input, init) => {
		const entryPoint = import.meta.env.VITE_SPOONACULAR_ENTRY_POINT;
		const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;

		if (typeof input !== "string" || input.includes(entryPoint)) {
			return [input, init];
		}

		const url = new URL(entryPoint + input);
		url.searchParams.append("apiKey", apiKey);

		return [url, init];
	});
}