import { Dispatch, useEffect, useState } from "react";
import { useDebounce } from "../hooks";

export interface UseStateWithDebounceOptions<T> {
	delay?: number;
	onSetState?: Dispatch<T>;
	onSetStateWithDebounce?: Dispatch<T>;
}

export function useStateWithDebounce<T>(
	initialState?: T,
	options?: UseStateWithDebounceOptions<T>
): [
	stateWithDebounce: typeof stateWithDebounce,
	setStateWithDebounce: typeof setStateWithDebounce,
	state: typeof state,
	setState: typeof setState
] {
	const { delay = 500, onSetState, onSetStateWithDebounce } = options ?? {};

	const [timer, setTimer] = useState<number>();
	const [state, setState] = useState<T>(initialState as T);
	const [stateWithDebounce, _setStateWithDebounce] = useState<T>(state);

	const setStateWithDebounce: React.Dispatch<T> = (state: T) => {
		clearTimeout(timer);
		setTimer(setTimeout(() => _setStateWithDebounce(state), delay));
	};

	useEffect(() => setStateWithDebounce(state), [state]);
	useEffect(() => () => clearTimeout(timer), [state, stateWithDebounce]);

	useEffect(() => {
		if (onSetState) {
			onSetState(state);
		}
	}, [state]);

	useEffect(() => {
		if (onSetStateWithDebounce) {
			onSetStateWithDebounce(stateWithDebounce);
		}
	}, [stateWithDebounce]);

	return [stateWithDebounce, setStateWithDebounce, state, setState];
}

export function useStateWithUseDebounce<T>(
	initialState?: T,
	options?: UseStateWithDebounceOptions<T>
): [
	stateWithDebounce: typeof stateWithDebounce,
	setStateWithDebounce: typeof setStateWithDebounce,
	state: typeof state,
	setState: typeof setState
] {
	const { delay = 500, onSetState, onSetStateWithDebounce } = options ?? {};

	const [state, setStateWithDebounce] = useState(initialState as T);
	const [stateWithDebounce, setState] = useDebounce(state, delay);

	useEffect(() => {
		if (onSetState) {
			onSetState(state);
		}
	}, [state]);

	useEffect(() => {
		if (onSetStateWithDebounce) {
			onSetStateWithDebounce(stateWithDebounce);
		}
	}, [stateWithDebounce]);

	return [stateWithDebounce, setStateWithDebounce, state, setState];
}
