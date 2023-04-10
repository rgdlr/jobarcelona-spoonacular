import { Cards, Loader, SearchBar } from "../components";
import { useFetch, useMocks } from "../hooks";
import { RecipesResponse } from "../interfaces";
import { Layout } from "../layout";

useMocks();

export function App() {
	const { data: recipesResponse } = useFetch<RecipesResponse>("recipes/random?number=15");

	return (
		<Layout>
			<SearchBar />
			{recipesResponse ? (
				<Cards items={recipesResponse?.recipes?.filter((_recipe, index) => index < 25)} />
			) : (
				<Loader />
			)}
		</Layout>
	);
}
