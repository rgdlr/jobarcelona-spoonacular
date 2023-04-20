import {
	ChangeEvent,
	FormEvent,
	HTMLAttributes,
	KeyboardEvent,
	MouseEvent,
	useEffect,
	useRef,
	useState
} from "react";
import { Input, Label } from "../../components";
import { useOnBlur, useStateWithDebounce } from "../../hooks";
import { getRecipesAutocomplete } from "../../services";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface SearchAttributes extends HTMLAttributes<HTMLElement> {
	onSearch?(search: string): void;
}

export function Search(attributes: SearchAttributes): JSX.Element {
	const { className, onSearch, ...restAttributes } = attributes;

	const searchRef = useRef(null);
	const [searchWithDebounce, , search, setSearch] = useStateWithDebounce("");
	const [show, setShow] = useState(false);
	useOnBlur(searchRef, () => setShow(false), show);

	const { data: predictions } = getRecipesAutocomplete({ query: searchWithDebounce });

	const updatePredictions = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		setSearch(value);

		const hasContent = !/^\s*$/g.test(value);
		hasContent || setShow(false);
		hasContent || (onSearch && onSearch(""));

		const url = new URL(window.location.href);
		hasContent ? url.searchParams.set("query", value.trim()) : url.searchParams.delete("query");
		window.history.replaceState(null, "", url);
	};

	const updateSearch = (
		event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
	) => {
		if ("key" in event && event.key !== "Enter") return;

		const updatedSearch = (event.target as HTMLButtonElement).innerText;
		setSearch(updatedSearch);

		const url = new URL(window.location.href);
		url.searchParams.set("query", updatedSearch);
		window.history.replaceState(null, "", url);

		onSearch && onSearch(`query=${updatedSearch}`);
	};

	const doSearch = (event: FormEvent) => {
		event.preventDefault();
		onSearch && (search ? onSearch(`query=${search}`) : onSearch(""));
	};

	useEffect(() => setShow(Boolean(predictions?.length)), [predictions]);

	return (
		<form
			{...restAttributes}
			autoComplete="off"
			className={computeClassNames("search", className)}
			ref={searchRef}
			onSubmit={doSearch}>
			<Label htmlFor="search">Search</Label>
			<Input id="search" onChange={updatePredictions} type="search" value={search} />
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
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			<ul className={`search__predictions search__predictions--${show ? "show" : "hidden"}`}>
				{predictions?.map((prediction) => (
					<li className="search__prediction" key={prediction.id}>
						<button
							className="search__prediction-button"
							onMouseDown={updateSearch}
							onKeyDown={updateSearch}>
							{prediction.title}
						</button>
					</li>
				))}
			</ul>
		</form>
	);
}
