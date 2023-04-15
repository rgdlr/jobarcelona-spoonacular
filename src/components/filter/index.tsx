import { HTMLAttributes } from "react";
import { Filter as FilterT } from "../../constants";
import { Filter as FilterI } from "../../interfaces";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface FilterAttributes<T> extends HTMLAttributes<HTMLLIElement> {
	item?: T;
}

export function Filter(attributes: FilterAttributes<FilterI>): JSX.Element {
	const { children, className, item, ...restAttributes } = attributes;

	return (
		<li {...restAttributes} className={computeClassNames("filter", className)}>
			{item?.type === FilterT.Input && (
				<input className="filter__input" name={item.id} placeholder={item.text} />
			)}
			{item?.type === FilterT.Checkbox && (
				<>
					<input className="filter__input" id={item.id} name={item.id} type="checkbox" />
					<label className="filter__label" htmlFor={item.id}>
						{item.text}
					</label>
				</>
			)}
			{item?.type === FilterT.Select && (
				<select className="filter__select" defaultValue={item.id} name={item.id}>
					<option className="filter__option" disabled value={item.id}>
						{item.text}
					</option>
					{item.value?.map((option) => (
						<option className="filter__option" key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			)}
			{children}
		</li>
	);
}
