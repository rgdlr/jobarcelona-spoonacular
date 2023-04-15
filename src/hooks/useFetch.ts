import { useEffect, useState } from "react";
import { useIsFirstRender } from "../hooks";
import { UseHttp, UseHttpOptions } from "../interfaces";

export function useFetch<Type>(
	input: RequestInfo | URL,
	init?: RequestInit | undefined,
	options?: UseHttpOptions
): UseHttp<Type> {
	const { onFirstRender = true, meetsRestrictions = true } = options ?? {};

	const isFirstRender = useIsFirstRender();

	const [controller, setController] = useState<AbortController>();
	const [data, setData] = useState<Type>();
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState<boolean>(true);

	const abort = () => {
		if (!controller) throw new Error("abort: undefined controller");
		controller.abort();
		setError({ name: "AbortError", message: "The user aborted a request." });
	};

	const setFetch = (data: Type | undefined, error: Error | undefined, loading: boolean) => {
		setData(data);
		setError(error);
		setLoading(loading);
		return false;
	};

	const responseToJson = (response: Response) =>
		setFetch(undefined, undefined, true) || response.json();
	const jsonToData = (json: Type) => setFetch(json, undefined, false);
	const responseToError = (error: Error) => setFetch(undefined, error, false);
	const setLoadingOff = () => setLoading(false);

	useEffect(() => {
		if (isFirstRender && !onFirstRender) return;
		if (!meetsRestrictions) return;

		const abortController = new AbortController();
		setController(abortController);

		fetch(input, { ...init, signal: abortController.signal })
			.then(responseToJson)
			.then(jsonToData)
			.catch(responseToError)
			.finally(setLoadingOff);

		return () => abortController.abort();
	}, [input]);

	return { abort, data, error, loading };
}
