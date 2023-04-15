import { useFetch } from "../hooks";
import { UseHttp, UseHttpOptions } from "../interfaces";

export function useHttp<Type>(
	input: RequestInfo | URL,
	init?: RequestInit | undefined,
	options?: UseHttpOptions
): UseHttp<Type> {
	return useFetch<Type>(input, init, options);
}
