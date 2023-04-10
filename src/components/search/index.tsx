import { useState } from "react";
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
		!/^\s*$/g.test(event.target.value)
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
			<Label htmlFor="search">Search</Label>
			<Input id="search" onChange={updatePredictions} type="search" value={search}></Input>
			<svg
				className="search__icon"
				aria-labelledby="search"
				fill="none"
				height="18"
				width="18"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
					stroke="currentColor"
					strokeWidth="1.333"
					strokeLinecap="round"
					strokeLinejoin="round"></path>
			</svg>
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
