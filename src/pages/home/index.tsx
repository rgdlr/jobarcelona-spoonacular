import { useState } from "react";
import { Cards, Loader, SearchBar } from "../../components";
import { useFetch } from "../../hooks";
import { RandomRecipesResponse } from "../../interfaces";
import { enableMockInterceptor } from "../../utils";

enableMockInterceptor();

export function Home() {
	const { data: randomRecipesResponse } = useFetch<RandomRecipesResponse>(
		"recipes/random?number=15"
	);
	const [searchData, setSearchData] = useState([]);

	const updateData = (data: any) => {
		setSearchData(data.results);
	};

	return (
		<>
			<SearchBar onSearch={updateData} />
			{!searchData &&
				(!randomRecipesResponse ? (
					<Loader />
				) : (
					<Cards items={randomRecipesResponse?.recipes?.filter((_recipe, index) => index < 25)} />
				))}
			{searchData && <Cards items={searchData} />}
		</>
	);
}
