import { useEffect, useMemo, useRef, useState } from "react";
import { Cards, Error, Loader, SearchBar, Sort } from "../../components";
import { SortableProperties, getSortableProperty } from "../../constants";
import { RandomRecipe, Recipe } from "../../interfaces";
import { getRandomRecipes } from "../../services/recipes";
import { enableMockInterceptor } from "../../utils";

enableMockInterceptor();

export function Home() {
	const { data: randomRecipes, error, loading } = getRandomRecipes({ number: 25 });
	const [searchData, setSearchData] = useState<Recipe[]>();

	const [filterText, setFilterText] = useState<string>("");
	const [sortType, setSortType] = useState<SortableProperties>(SortableProperties.None);
	const [sortDescending, setSortDescending] = useState<boolean>(false);

	const initialRandomRecipes = useRef<(RandomRecipe | Recipe)[] | undefined>([]);

	const filteredRandomRecipes = useMemo(() => {
		const recipes = (searchData?.length ? searchData : randomRecipes?.recipes) as RandomRecipe[];
		return recipes?.filter((recipe) =>
			recipe.title?.toLocaleLowerCase().includes(filterText.toLowerCase())
		);
	}, [randomRecipes, searchData, filterText]);

	const sortedRandomRecipes = useMemo(() => {
		if (sortType === SortableProperties.None) return filteredRandomRecipes;

		return structuredClone(filteredRandomRecipes)?.sort((a, b) => {
			const sortableProperty = getSortableProperty[sortType];
			return sortableProperty(sortDescending ? b : a)?.localeCompare(
				sortableProperty(sortDescending ? a : b)
			);
		});
	}, [filteredRandomRecipes, sortType, sortDescending]);

	useEffect(() => void (initialRandomRecipes.current = randomRecipes?.recipes), []);

	return (
		<>
			<SearchBar onSearch={setSearchData} />
			<div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBlock: "1rem" }}>
				<input
					className="input"
					type="search"
					onChange={(event) => setFilterText(event.target.value)}
					placeholder="Filter results"
				/>
				<Sort current={sortType} onSort={setSortType} onOrder={setSortDescending} />
			</div>
			{loading && <Loader />}
			{error && <Error />}
			<Cards items={sortedRandomRecipes?.filter((_recipe, index) => index < 25)} />
		</>
	);
}
