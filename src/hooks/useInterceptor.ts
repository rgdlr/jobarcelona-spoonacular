import { useMonkeyPatching } from "../hooks";

type FetchParameters = [input: URL | RequestInfo, init?: RequestInit | undefined];
type FetchCallback = (...[input, init]: FetchParameters) => Promise<FetchParameters>;

export function useInterceptor(callback: FetchCallback) {
	useMonkeyPatching(
		window,
		"fetch",
		async (propertyPatched: FetchCallback, ...[input, init]: FetchParameters) => {
			const [inputPatched, initPatched] = await callback(input, init);
			return await propertyPatched(inputPatched, initPatched);
		}
	);
}
