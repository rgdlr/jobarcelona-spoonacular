export interface Recipe {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
	servings?: number;
	readyInMinutes?: number;
	license?: string;
	sourceName?: string;
	sourceUrl?: string;
	spoonacularSourceUrl?: string;
	aggregateLikes?: number;
	healthScore?: number;
	spoonacularScore?: number;
	pricePerServing?: number;
	analyzedInstructions?: null[];
	cheap?: boolean;
	creditsText?: string;
	cuisines?: null[];
	dairyFree?: boolean;
	diets?: null[];
	gaps?: string;
	glutenFree?: boolean;
	instructions?: string;
	ketogenic?: boolean;
	lowFodmap?: boolean;
	occasions?: null[];
	sustainable?: boolean;
	vegan?: boolean;
	vegetarian?: boolean;
	veryHealthy?: boolean;
	veryPopular?: boolean;
	whole30?: boolean;
	weightWatcherSmartPoints?: number;
	dishTypes?: string[];
	extendedIngredients?: ExtendedIngredients[];
	summary?: string;
	winePairing?: WinePairing;
}

export interface RandomRecipe {
	aggregateLikes?: number;
	analyzedInstructions?: AnalyzedInstruction[];
	cheap?: boolean;
	cookingMinutes?: number;
	creditsText?: string;
	cuisines?: unknown[];
	dairyFree?: boolean;
	diets?: string[];
	dishTypes?: string[];
	extendedIngredients?: ExtendedIngredient[];
	gaps?: string;
	glutenFree?: boolean;
	healthScore?: number;
	id?: number;
	image?: string;
	imageType?: string;
	instructions?: string;
	license?: string;
	lowFodmap?: boolean;
	occasions?: unknown[];
	originalId?: unknown;
	preparationMinutes?: number;
	pricePerServing?: number;
	readyInMinutes?: number;
	servings?: number;
	sourceName?: string;
	sourceUrl?: string;
	spoonacularSourceUrl?: string;
	summary?: string;
	sustainable?: boolean;
	title?: string;
	vegan?: boolean;
	vegetarian?: boolean;
	veryHealthy?: boolean;
	veryPopular?: boolean;
	weightWatcherSmartPoints?: number;
}

export interface RecipeAutocomplete {
	id?: number;
	title?: string;
	imageType?: string;
}

export interface ExtendedIngredients {
	aisle?: string;
	amount?: number;
	consitency?: string;
	id?: number;
	image?: string;
	measures?: Measures;
	meta?: string[];
	name?: string;
	original?: string;
	originalName?: string;
	unit?: string;
}

export interface Measures {
	metric?: MetricOrUs;
	us?: MetricOrUs;
}

export interface MetricOrUs {
	amount?: number;
	unitLong?: string;
	unitShort?: string;
}

export interface WinePairing {
	pairedWines?: string[];
	pairingText?: string;
	productMatches?: ProductMatches[];
}
export interface ProductMatches {
	id?: number;
	title?: string;
	description?: string;
	price?: string;
	imageUrl?: string;
	averageRating?: number;
	ratingCount?: number;
	score?: number;
	link?: string;
}

export interface RandomRecipesResponse {
	recipes?: RandomRecipe[];
}

export interface AnalyzedInstruction {
	name?: string;
	steps?: RecipeStep[];
}

export interface ExtendedIngredient {
	aisle?: string;
	amount?: number;
	consistency?: string;
	id?: number;
	image?: string;
	measures?: Measures;
	meta?: string[];
	name?: string;
	nameClean?: string;
	original?: string;
	originalName?: string;
	unit?: string;
}

export interface RecipeStep {
	equipment?: EquipmentOrIngredient[];
	ingredients?: EquipmentOrIngredient[];
	length?: Length;
	number?: number;
	step?: string;
}

export interface EquipmentOrIngredient {
	id?: number;
	image?: string;
	localizedName?: string;
	name?: string;
}

export interface Length {
	number?: number;
	unit?: string;
}

export interface RecipeComplexSearch {
	results?: RecipeComplexSearchResults[];
	offset?: number;
	number?: number;
	totalResults?: number;
}
export interface RecipeComplexSearchResults {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
}
