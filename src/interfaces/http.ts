export interface UseHttp<Type> {
	abort(): void;
	data: Type | undefined;
	error: Error | undefined;
	loading: boolean;
}

export interface UseHttpOptions {
	onFirstRender?: boolean;
	meetsRestrictions?: boolean;
}
