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
		<li {...restAttributes} className={computeClassNames("filters__filter", className)}>
			{item?.type === FilterT.Input && (
				<input className="filters__input" name={item.id} placeholder={item.text}></input>
			)}
			{item?.type === FilterT.Checkbox && (
				<>
					<input className="filters__input" id={item.id} name={item.id} type="checkbox" />
					<label className="filters__label" htmlFor={item.id}>
						{item.text}
					</label>
				</>
			)}
			{item?.type === FilterT.Select && (
				<select className="filters__select" defaultValue={item.id} name={item.id}>
					<option className="filters__option" disabled value={item.id}>
						{item.text}
					</option>
					{item.value?.map((option) => (
						<option className="filters__option" key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			)}
			{children}
		</li>
	);
}
