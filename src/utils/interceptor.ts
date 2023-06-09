import { monkeyPatching } from "../utils";

type FetchParameters = [input: URL | RequestInfo, init?: RequestInit | undefined];
type FetchCallback = (...[input, init]: FetchParameters) => FetchParameters;

export function fetchInterceptor(callback: FetchCallback) {
	monkeyPatching(window, "fetch", (propertyPatched, ...[input, init]) => {
		const [inputPatched, initPatched] = callback(...([input, init] as FetchParameters));
		return propertyPatched(inputPatched, initPatched);
	});
}
