import { useEffect, useState } from "react";
import { Filters, Search } from "../../components";
import { filtersList } from "../../constants";
import "./index.css";

export function SearchBar({ onSearch }: { onSearch: (results: any) => void }): JSX.Element {
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
			onSearch([]);
			return;
		}
		const url =
			"/recipes/complexSearch" +
			filterSearch +
			(filterSearch ? `&${textSearch}` : `?${textSearch}`);
		fetch(url)
			.then((data) => data.json())
			.then((data) => onSearch(data));
	}, [textSearch, filterSearch]);

	return (
		<div className="search-bar">
			<Search onSearch={onTextSearch} />
			<Filters onSearch={onFilterSearch} items={filtersList} />
		</div>
	);
}
