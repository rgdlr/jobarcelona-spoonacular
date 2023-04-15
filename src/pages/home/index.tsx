import { useState } from "react";
import { Cards, Error, Loader, SearchBar } from "../../components";
import { getRandomRecipes } from "../../services/recipes";
import { enableMockInterceptor } from "../../utils";
import { Recipe } from "../../interfaces";

enableMockInterceptor();

export function Home() {
	const { data: randomRecipes, error, loading } = getRandomRecipes({ number: 25 });
	const [searchData, setSearchData] = useState<Recipe[]>();

	return (
		<>
			<SearchBar onSearch={setSearchData} />
			{loading && <Loader />}
			{error && <Error />}
			<Cards
				items={
					searchData?.length
						? searchData
						: randomRecipes?.recipes?.filter((_recipe, index) => index < 25)
				}
			/>
		</>
	);
}
