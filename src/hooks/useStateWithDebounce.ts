import { useEffect, useState } from "react";
import { useDebounce } from "../hooks";

export function useStateWithDebounce<T>(
	initialState: T,
	delay: number = 500,
	onSetState?: Function,
	onSetStateWithDebounce?: Function
): [
	stateWithDebounce: typeof stateWithDebounce,
	setStateWithDebounce: typeof setStateWithDebounce,
	state: typeof state,
	setState: typeof setState
] {
	const [timer, setTimer] = useState<number>();
	const [state, setState] = useState<T>(initialState);
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
	delay?: number,
	onSetState?: Function,
	onSetStateWithDebounce?: Function
): [
	stateWithDebounce: typeof stateWithDebounce,
	setStateWithDebounce: typeof setStateWithDebounce,
	state: typeof state,
	setState: typeof setState
] {
	const [state, setStateWithDebounce] = useState(initialState);
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
