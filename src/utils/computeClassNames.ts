const EMPTY = "";
const SPACE = " ";

export function computeClassNames(...classNames: Array<string | undefined>): string {
	return classNames
		.map((className) => className ?? EMPTY)
		.join(SPACE)
		.replace(/\s+/g, " ")
		.trim();
}
