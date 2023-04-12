import { HTMLAttributes, useEffect, useState } from "react";
import { Filters, Search } from "../../components";
import { filtersList } from "../../constants";
import "./index.css";
import { computeClassNames } from "../../utils";

export interface SearchBarAttributes<T> extends HTMLAttributes<HTMLElement> {
	onSearch?(results: T): void;
}

export function SearchBar(attributes: SearchBarAttributes<any>): JSX.Element {
	const { children, className, onSearch, ...restAttributes } = attributes;

	const [textSearch, setTextSearch] = useState("");
	const [filterSearch, setFilterSearch] = useState("");

	const onTextSearch = (search: string) => {
		setTextSearch(search);
	};

	const onFilterSearch = (search: string) => {
		setFilterSearch(search);
	};

	useEffect(() => {
		if (!textSearch && !filterSearch) {
			onSearch && onSearch([]);
			return;
		}
		const url =
			"/recipes/complexSearch" +
			filterSearch +
			(filterSearch ? `&${textSearch}` : `?${textSearch}`);
		fetch(url)
			.then((data) => data.json())
			.then((data) => onSearch && onSearch(data));
	}, [textSearch, filterSearch]);

	return (
		<section {...restAttributes} className={computeClassNames("search-bar", className)}>
			<Search onSearch={onTextSearch} />
			<Filters onSearch={onFilterSearch} items={filtersList} />
			{children}
		</section>
	);
}
