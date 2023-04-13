import { Filter as FilterT } from "../constants";

export type Filter = { id: string; text: string } & (
	| {
			type: FilterT.Checkbox;
			value: boolean;
		}
	| {
			type: FilterT.Input;
			value: string;
		}
	| {
			type: FilterT.Select;
			value: string[];
		}
);
