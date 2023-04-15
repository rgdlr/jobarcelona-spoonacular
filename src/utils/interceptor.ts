import { monkeyPatching } from "../utils";

type FetchParameters = [input: URL | RequestInfo, init?: RequestInit | undefined];
type FetchCallback = (...[input, init]: FetchParameters) => FetchParameters;

export function fetchInterceptor(callback: FetchCallback) {
	monkeyPatching(
		window,
		"fetch",
		(propertyPatched: FetchCallback, ...[input, init]: FetchParameters) => {
			const [inputPatched, initPatched] = callback(input, init);
			return propertyPatched(inputPatched, initPatched);
		}
	);
}
