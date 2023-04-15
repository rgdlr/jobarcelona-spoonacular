import { useState } from "react";
import { Cards, Loader, SearchBar } from "../../components";
import { getRandomRecipes } from "../../services/recipes";
import { enableMockInterceptor } from "../../utils";

enableMockInterceptor();

export function Home() {
	const { data: randomRecipesResponse, error, loading } = getRandomRecipes({ number: 25 });
	const [searchData, setSearchData] = useState([]);

	const updateData = (data: any) => setSearchData(data.results);

	return (
		<>
			<SearchBar onSearch={updateData} />
			{loading && <Loader />}
			{error && error.message}
			{!searchData && (
				<Cards items={randomRecipesResponse?.recipes?.filter((_recipe, index) => index < 25)} />
			)}
			{searchData && <Cards items={searchData} />}
		</>
	);
}
