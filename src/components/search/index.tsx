import { useEffect, useState } from "react";
import { Input, Label } from "../../components";
import { useStateWithDebounce } from "../../hooks";
import "./index.css";

const mockPredictions = [{ text: "yogurt" }, { text: "yellow" }, { text: "yes" }, { text: "no" }];

export function Search() {
	const [searchWithDebounce, setSearchWithDebounce, search, setSearch] = useStateWithDebounce("");
	const [predictions, setPredictions] = useState<{ text: string }[]>([]);

	const updatePredictions = (event: any) => {
		const updatedPredictions = event.target.value
			? mockPredictions.filter((prediction) =>
					prediction.text.toLowerCase().includes(event.target.value.toLowerCase())
			  )
			: [];
		setSearch(event.target.value);
		setPredictions(updatedPredictions);

		const url = new URL(window.location.href);
		!/\s+$/g.test(event.target.value)
			? url.searchParams.set("search", event.target.value.trim())
			: url.searchParams.delete("search");
		window.history.replaceState(null, "", url);
	};

	const updateSearch = (event: any) => {
		const updatedSearch = event.target.innerText;
		setSearch(updatedSearch);

		const url = new URL(window.location.href);
		url.searchParams.set("search", event.target.innerText);
		window.history.replaceState(null, "", url);
	};

	return (
		<div className="search">
			<Label>Search</Label>
			<Input onChange={updatePredictions} value={search}></Input>
			<ul className="search__predictions">
				{predictions.map((prediction) => (
					<li className="search__prediction" key={prediction.text}>
						<button className="search__prediction-button" onMouseDown={updateSearch}>
							{prediction.text}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
