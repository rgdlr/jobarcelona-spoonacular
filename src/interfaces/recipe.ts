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
	analyzedInstructions?: null[] | null;
	cheap?: boolean;
	creditsText?: string;
	cuisines?: null[] | null;
	dairyFree?: boolean;
	diets?: null[] | null;
	gaps?: string;
	glutenFree?: boolean;
	instructions?: string;
	ketogenic?: boolean;
	lowFodmap?: boolean;
	occasions?: null[] | null;
	sustainable?: boolean;
	vegan?: boolean;
	vegetarian?: boolean;
	veryHealthy?: boolean;
	veryPopular?: boolean;
	whole30?: boolean;
	weightWatcherSmartPoints?: number;
	dishTypes?: string[] | null;
	extendedIngredients?: ExtendedIngredients[] | null;
	summary?: string;
	winePairing?: WinePairing;
}

export interface RandomRecipe {
	aggregateLikes?: number;
	analyzedInstructions?: AnalyzedInstruction[];
	cheap?: boolean;
	cookingMinutes?: number;
	creditsText?: string;
	cuisines?: any[];
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
	occasions?: any[];
	originalId?: any;
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

export interface ExtendedIngredients {
	aisle?: string;
	amount?: number;
	consitency?: string;
	id?: number;
	image?: string;
	measures?: Measures;
	meta?: (string | null)[] | null;
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
	pairedWines?: string[] | null;
	pairingText?: string;
	productMatches?: ProductMatches[] | null;
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
