import { useEffect, useMemo, useRef, useState } from "react";
import { Cards, Error, FilterBar, Loader, SearchBar } from "../../components";
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
	const [sortAscending, setSortAscending] = useState<boolean>(false);

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
			return sortableProperty(sortAscending ? b : a)?.localeCompare(
				sortableProperty(sortAscending ? a : b)
			);
		});
	}, [filteredRandomRecipes, sortType, sortAscending]);

	useEffect(() => void (initialRandomRecipes.current = randomRecipes?.recipes), []);

	return (
		<>
			<SearchBar onSearch={setSearchData} />
			<FilterBar onFilter={setFilterText} onOrder={setSortAscending} onSort={setSortType} />
			{loading && <Loader />}
			{error && <Error />}
			<Cards items={sortedRandomRecipes?.filter((_recipe, index) => index < 25)} />
		</>
	);
}
