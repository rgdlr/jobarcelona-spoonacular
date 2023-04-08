import { useEffect, useState } from "react";

export function useFetch<Type>(url: string) {
	const [controller, setController] = useState<AbortController>();
	const [data, setData] = useState<Type>();
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState<boolean>(true);

	const abort = () => {
		if (controller) {
			controller.abort();
			setError({ name: "AbortError", message: "Cancelled Request" });
		}
	};

	useEffect(() => {
		const abortController = new AbortController();
		setController(abortController);

		fetch(url, { signal: abortController.signal })
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error: Error) => setError(error))
			.finally(() => setLoading(false));

		return () => abortController.abort();
	}, []);

	return { data, loading, error, abort };
}
