import { RefObject, useEffect } from "react";

export function useOnBlur<T>(ref: RefObject<T>, callback: () => void, active = true) {
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (ref && ref.current && !(ref.current as unknown as HTMLElement).contains(event.target as HTMLElement)) {
				callback();
			}
		}
		if (active) {
			document.addEventListener("click", handleClickOutside);
		}
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [ref, active]);
}
