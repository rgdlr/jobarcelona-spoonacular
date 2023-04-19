export function monkeyPatching<Type>(
	object: Type,
	propertyName: keyof Type,
	propertyPatcher: (propertyPatched: Type[keyof Type], ...args: unknown[]) => Type[keyof Type]
): void {
	const { [propertyName]: monkeyPatching } = object;
	const objectProperty = (...args: unknown[]) => propertyPatcher(monkeyPatching, ...args);
	object[propertyName] = objectProperty as Type[keyof Type];
}
