export interface RecipesResponse {
	recipes?: Recipe[];
}

export interface Recipe {
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

export interface Measures {
	metric?: MetricOrUs;
	us?: MetricOrUs;
}

export interface MetricOrUs {
	amount?: number;
	unitLong?: string;
	unitShort?: string;
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
