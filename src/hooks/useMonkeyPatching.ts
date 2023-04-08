type MonkeyPatchingObject = { [key: string | number | symbol]: any };
type MonkeyPatchingPropertyName = string | number | symbol;
type MonkeyPatchingPropertyPatch = (propertyPatched: any, ...args: any[]) => void;

export function useMonkeyPatching(
	object: MonkeyPatchingObject,
	propertyName: MonkeyPatchingPropertyName,
	propertyPatch: MonkeyPatchingPropertyPatch
): void {
	const { [propertyName]: monkeyPatching } = object;
	object[propertyName] = (...args: any[]) => propertyPatch(monkeyPatching, ...args);
}
