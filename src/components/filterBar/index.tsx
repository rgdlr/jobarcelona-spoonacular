import { HTMLAttributes } from "react";
import { Sort } from "../../components";
import { SortableProperties } from "../../constants";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface FilterBarAttributes extends HTMLAttributes<HTMLElement> {
	current?: SortableProperties;
	onFilter?(results: string): void;
	onOrder?(ascending: boolean): void;
	onSort?(property: SortableProperties): void;
}

export function FilterBar(attributes: FilterBarAttributes) {
	const { className, current, onOrder, onSort, onFilter, ...restAttributes } = attributes;

	return (
		<div {...restAttributes} className={computeClassNames("filter-bar", className)}>
			<input
				className="input"
				type="search"
				onChange={(event) => onFilter && onFilter(event.target.value)}
				placeholder="Filter results"
			/>
			<Sort current={current} onOrder={onOrder} onSort={onSort} />
		</div>
	);
}
