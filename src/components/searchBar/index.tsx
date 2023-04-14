import { HTMLAttributes, useEffect, useState } from "react";
import { Filters, Search } from "../../components";
import { filtersList } from "../../constants";
import { Recipe } from "../../interfaces";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface SearchBarAttributes<T> extends HTMLAttributes<HTMLElement> {
	onSearch?(results: T): void;
}

export function SearchBar(attributes: SearchBarAttributes<Recipe[]>): JSX.Element {
	const { children, className, onSearch, ...restAttributes } = attributes;

	const [textSearch, setTextSearch] = useState("");
	const [filterSearch, setFilterSearch] = useState("");

	useEffect(() => {
		if (!textSearch && !filterSearch) {
			onSearch && onSearch([]);
			return;
		}
		const url = "recipes/complexSearch" + filterSearch + (filterSearch ? `&${textSearch}` : `?${textSearch}`);
		fetch(url)
			.then((data) => data.json())
			.then((data) => onSearch && onSearch(data));
	}, [textSearch, filterSearch]);

	return (
		<section {...restAttributes} className={computeClassNames("search-bar", className)}>
			<Search onSearch={setTextSearch} />
			<Filters onSearch={setFilterSearch} items={filtersList} />
			{children}
		</section>
	);
}
