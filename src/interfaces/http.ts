export interface UseHttp<Type> {
	abort?(): void;
	data?: Type | undefined;
	error?: Error | undefined;
	loading?: boolean;
	refetch?(): Promise<void>;
}

export interface UseHttpOptions {
	onFirstRender?: boolean;
	meetsRestrictions?: boolean;
}
