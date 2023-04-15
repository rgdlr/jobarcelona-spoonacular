export interface UseFetch<Type> {
	abort: () => void;
	data: Type | undefined;
	error: Error | undefined;
	loading: boolean;
}
