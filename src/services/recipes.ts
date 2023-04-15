import { useFetch } from "../hooks";
import { RandomRecipesResponse, Recipe, RecipeAutocomplete, UseFetch } from "../interfaces";

export function getRandomRecipes({ number = 25 } = {}): UseFetch<RandomRecipesResponse> {
	return useFetch<RandomRecipesResponse>(`recipes/random?number=${number}`);
}

export function getRecipeInformation({ id }: { id: string }): UseFetch<Recipe> {
	return useFetch<Recipe>(`recipes/${id}/information`);
}

export function getRecipesAutocomplete({ number = 5, query = "" } = {}): UseFetch<
	RecipeAutocomplete[]
> {
	return useFetch<RecipeAutocomplete[]>(
		`recipes/autocomplete?number=${number}&${query}`,
		undefined,
		{ onFirstRender: false, meetsRestrictions: Boolean(query.length) }
	);
}

export function getRecipesSearch({ filterSearch = "", textSearch = "" } = {}): UseFetch<Recipe[]> {
	return useFetch<Recipe[]>(
		`recipes/complexSearch${filterSearch}${filterSearch ? `&${textSearch}` : `?${textSearch}`}`,
		undefined,
		{
			onFirstRender: false,
			meetsRestrictions: Boolean(filterSearch.length) || Boolean(textSearch.length)
		}
	);
}
