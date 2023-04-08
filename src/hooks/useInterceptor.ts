import { useMonkeyPatching } from "../hooks";

type FetchParameters = [input: URL | RequestInfo, init?: RequestInit | undefined];
type FetchCallback = (...[input, init]: FetchParameters) => FetchParameters;

export function useInterceptor(callback: FetchCallback) {
	useMonkeyPatching(
		window,
		"fetch",
		async (propertyPatched: any, ...[input, init]: FetchParameters) => {
			const [inputPatched, initPatched] = callback(input, init);
			return await propertyPatched(inputPatched, initPatched);
		}
	);
}
