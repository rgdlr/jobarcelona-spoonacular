import { useHttp } from "../hooks";
import {
	RandomRecipesResponse,
	Recipe,
	RecipeAutocomplete,
	RecipeComplexSearch,
	UseHttp
} from "../interfaces";

export function getRandomRecipes({ number = 25 } = {}): UseHttp<RandomRecipesResponse> {
	return useHttp<RandomRecipesResponse>(`recipes/random?number=${number}`);
}

export function getRecipeInformation({ id }: { id: string }): UseHttp<Recipe> {
	return useHttp<Recipe>(`recipes/${id}/information`);
}

export function getRecipesAutocomplete({ number = 5, query = "" } = {}): UseHttp<
	RecipeAutocomplete[]
> {
	return useHttp<RecipeAutocomplete[]>(
		`recipes/autocomplete?number=${number}&query=${query}`,
		undefined,
		{ onFirstRender: false, meetsRestrictions: Boolean(query.length) }
	);
}

export function getRecipesSearch({ filters = "", query = "" } = {}): UseHttp<RecipeComplexSearch> {
	return useHttp<RecipeComplexSearch>(
		`recipes/complexSearch${filters}${filters ? `&${query}` : `?${query}`}`,
		undefined,
		{
			onFirstRender: false,
			meetsRestrictions: Boolean(filters.length) || Boolean(query.length)
		}
	);
}
