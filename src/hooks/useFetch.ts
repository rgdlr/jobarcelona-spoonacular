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

	const abort = (): void => {
		if (!controller) throw new Error("Abort controller is not defined");
		controller.abort();
		setError({ name: "AbortError", message: "The user aborted a request" });
	};

	const setFetch = (data: Type | undefined, error: Error | undefined, loading: boolean): void => {
		setData(data);
		setError(error);
		setLoading(loading);
	};

	const responseToJson = (response: Response): Promise<Type> => {
		if (!response.ok) throw new Error(response.statusText);
		setFetch(undefined, undefined, true);
		return response.json();
	};

	const jsonToData = (json: Type): void => setFetch(json, undefined, false);
	const responseToError = (error: Error): void => setFetch(undefined, error, false);
	const setLoadingOff = (): void => setLoading(false);

	const fetchData = (input: RequestInfo | URL, init?: RequestInit | undefined) => {
		setFetch(undefined, undefined, true);

		const promise = fetch(input, init)
			.then(responseToJson)
			.then(jsonToData)
			.catch(responseToError)
			.finally(setLoadingOff);

		return promise;
	};

	const refetch = (): Promise<void> => fetchData(input, init);

	useEffect(() => {
		if (isFirstRender && !onFirstRender) return;
		if (!meetsRestrictions) return;

		const abortController = new AbortController();
		setController(abortController);

		fetchData(input, { ...init, signal: abortController.signal });

		return () => abortController.abort();
	}, [input]);

	return { abort, data, error, loading, refetch };
}
