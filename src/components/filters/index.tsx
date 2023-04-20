import { FormEvent, HTMLAttributes, useRef, useState } from "react";
import { Filter } from "../../components";
import { Filter as FilterT, filtersList } from "../../constants";
import { useOnBlur } from "../../hooks";
import { Filter as FilterI } from "../../interfaces";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface FiltersAttributes<T> extends HTMLAttributes<HTMLUListElement> {
	items?: T;
	onSearch(search: string): void;
}

export function Filters(attributes: FiltersAttributes<FilterI[]>): JSX.Element {
	const { children, className, items, onSearch, ...restAttributes } = attributes;

	const filtersRef = useRef(null);
	const [show, setShow] = useState(false);
	useOnBlur(filtersRef, () => setShow(false), show);

	const toggleShow = () => setShow((prevShow) => !prevShow);
	const onFilter = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const formProperties = Object.fromEntries(formData);
		const url = new URL(window.location.href);
		Object.entries(formProperties).forEach(([key, value]) => {
			const filter = filtersList.find((filter) => filter.id === key);

			if (!filter?.id) {
				return;
			}

			if (filter?.type === FilterT.Checkbox) {
				url.searchParams.set(filter.id, "true");
			} else {
				url.searchParams.set(filter.id, value.toString());
			}
		});
		typeof onSearch === "function" && onSearch(url.search);
	};

	return (
		<div className={computeClassNames("filters", className)} ref={filtersRef}>
			<button className="filters__button" onClick={toggleShow}>
				<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
					<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
				</svg>
			</button>
			<form
				className={computeClassNames("filters__form", show ? "filters__form--show" : "")}
				onSubmit={onFilter}>
				<ul {...restAttributes} className="filters__list">
					{items && items?.map((item) => <Filter item={item} key={item.id} />)}
					{children}
					<Filter>
						<input className="filter__input" type="reset" name="reset" />
						<input className="filter__input" type="submit" name="submit" />
					</Filter>
				</ul>
			</form>
		</div>
	);
}
