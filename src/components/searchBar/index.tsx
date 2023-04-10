import { Filters, Search } from "../../components";
import "./index.css";

export function SearchBar() {
	return (
		<div className="search-bar">
			<Search />
			<Filters />
		</div>
	);
}
