import { useEffect, useRef, useState } from "react";
import { Input, Label } from "../../components";
import { useOnBlur, useStateWithDebounce } from "../../hooks";
import "./index.css";

interface Autocomplete {
	id: string;
	imageType: string;
	title: string;
}

export function Search() {
	const searchRef = useRef(null);
	const [show, setShow] = useState(false);
	const [searchWithDebounce, setSearchWithDebounce, search, setSearch] = useStateWithDebounce("");
	const [predictions, setPredictions] = useState<Autocomplete[]>([]);

	useOnBlur(searchRef, () => setShow(false), show);

	const updatePredictions = (event: any) => {
		setSearch(event.target.value);

		const hasContent = !/^\s*$/g.test(event.target.value);
		hasContent || setShow(false);

		const url = new URL(window.location.href);
		hasContent
			? url.searchParams.set("query", event.target.value.trim())
			: url.searchParams.delete("query");
		window.history.replaceState(null, "", url);
	};

	const updateSearch = (event: any) => {
		const updatedSearch = event.target.innerText;
		setSearch(updatedSearch);

		const url = new URL(window.location.href);
		url.searchParams.set("query", event.target.innerText);
		window.history.replaceState(null, "", url);
	};

	useEffect(() => {
		if (!searchWithDebounce) {
			return;
		}
		fetch(`recipes/autocomplete?number=5&query=${searchWithDebounce}`)
			.then((data) => data.json())
			.then((data) => {
				setPredictions(data);
				setShow(Boolean(data?.length));
			});
		return () => setPredictions([]);
	}, [searchWithDebounce]);

	return (
		<div className="search" ref={searchRef}>
			<Label htmlFor="search">Search</Label>
			<Input id="search" onChange={updatePredictions} type="search" value={search}></Input>
			<button className="search__icon">
				<svg
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
			</button>
			<ul className={`search__predictions search__predictions--${show ? "show" : "hidden"}`}>
				{predictions.map((prediction) => (
					<li className="search__prediction" key={prediction.id}>
						<button className="search__prediction-button" onMouseDown={updateSearch}>
							{prediction.title}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
