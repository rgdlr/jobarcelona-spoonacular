import { useEffect, useState } from "react";

export function useDebounce<T>(
	value: T,
	delay?: number
): [debounced: T, setDebounced: typeof setDebouncedValue] {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
		return () => clearTimeout(timer);
	}, [delay, value]);

	return [debouncedValue, setDebouncedValue];
}
