import { HTMLAttributes, useEffect, useState } from "react";
import { Filters, Search } from "../../components";
import { filtersList } from "../../constants";
import { Recipe } from "../../interfaces";
import { getRecipesSearch } from "../../services";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface SearchBarAttributes<T> extends HTMLAttributes<HTMLElement> {
	onSearch?(results: T): void;
}

export function SearchBar(attributes: SearchBarAttributes<Recipe[]>): JSX.Element {
	const { children, className, onSearch, ...restAttributes } = attributes;

	const [query, setQuery] = useState("");
	const [filters, setFilter] = useState("");
	const { data } = getRecipesSearch({ filters, query });

	useEffect(() => onSearch && onSearch(data?.results ?? []), [data]);

	return (
		<section {...restAttributes} className={computeClassNames("search-bar", className)}>
			<Search onSearch={setQuery} />
			<Filters onSearch={setFilter} items={filtersList} />
			{children}
		</section>
	);
}
