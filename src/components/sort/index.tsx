import { HTMLAttributes } from "react";
import { Switch } from "../../components";
import { SortableProperties } from "../../constants";
import "./index.css";
import { computeClassNames } from "../../utils";

const descendingIcon = (
	<svg
		fill="currentColor"
		height="18"
		width="18"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512">
		<path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z" />
	</svg>
);

const ascendingIcon = (
	<svg
		fill="currentColor"
		height="18"
		width="18"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 576 512">
		<path d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z" />
	</svg>
);

export interface CustomSortAttributes extends HTMLAttributes<HTMLInputElement> {
	current?: SortableProperties;
	onSort?(property: SortableProperties): void;
	onOrder?(ascending: boolean): void;
}

export function Sort(attributes: CustomSortAttributes) {
	const { className, current, onSort, onOrder, ...restAttributes } = attributes;

	return (
		<div {...restAttributes} className={computeClassNames("sort", className)}>
			<label htmlFor="sort">Sort by</label>
			<select
				className="sort__select"
				defaultValue={SortableProperties.None}
				name="sort"
				id="sort"
				onChange={(event) => onSort && onSort(event.target.value as SortableProperties)}>
				<option className="filter__option" key="sort" value="sort" disabled>
					sort
				</option>
				{Object.values(SortableProperties).map((option) => (
					<option className="filter__option" key={option} value={option}>
						{option}
					</option>
				))}
			</select>
			<Switch
				id="descending"
				name="descending"
				onChange={(event) => onOrder && onOrder(event.target.checked)}
				disabled={current === SortableProperties.None}
				leftLabel={descendingIcon}
				rightLabel={ascendingIcon}
			/>
		</div>
	);
}
