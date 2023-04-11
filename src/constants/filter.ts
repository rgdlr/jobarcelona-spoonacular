import { Filter as FilterI } from "../interfaces";

export const enum Filter {
	Checkbox = "checkbox",
	Input = "input",
	Select = "select"
}

export const filtersSelect = {
	cuisine: [
		"african",
		"american",
		"british",
		"cajun",
		"caribbean",
		"chinese",
		"eastern european",
		"european",
		"french",
		"german",
		"greek",
		"indian",
		"irish",
		"italian",
		"japanese",
		"jewish",
		"korean",
		"latin american",
		"mediterranean",
		"mexican",
		"middle eastern",
		"nordic",
		"southern",
		"spanish",
		"thai",
		"vietnamese"
	],
	intolerance: [
		"dairy",
		"egg",
		"gluten",
		"grain",
		"peanut",
		"seafood",
		"sesame",
		"shellfish",
		"soy",
		"sulfite",
		"tree nut",
		"wheat"
	],
	type: [
		"main course",
		"side dish",
		"dessert",
		"appetizer",
		"salad",
		"bread",
		"breakfast",
		"soup",
		"beverage",
		"sauce",
		"marinade",
		"fingerfood",
		"snack",
		"drink"
	]
};

export const filtersList: FilterI[] = [
	{
		id: "includeIngredients",
		text: "Include Ingredients",
		type: Filter.Input,
		value: ""
	},
	{
		id: "excludeIngredients",
		text: "Exclude Ingredients",
		type: Filter.Input,
		value: ""
	},
	{
		id: "author",
		text: "Author",
		type: Filter.Input,
		value: ""
	},
	{
		id: "cuisine",
		text: "Include Cuisine",
		type: Filter.Select,
		value: filtersSelect.cuisine
	},
	{
		id: "excludeCuisine",
		text: "Exclude Cuisine",
		type: Filter.Select,
		value: filtersSelect.cuisine
	},
	{
		id: "type",
		text: "Type",
		type: Filter.Select,
		value: filtersSelect.type
	},
	{
		id: "intolerances",
		text: "Intolerances",
		type: Filter.Select,
		value: filtersSelect.intolerance
	},
	{
		id: "instructionsRequired",
		text: "Instructions Required",
		type: Filter.Checkbox,
		value: false
	},
	{
		id: "fillIngredients",
		text: "Fill Ingredients",
		type: Filter.Checkbox,
		value: false
	},
	{
		id: "addRecipeInformation",
		text: "Add Recipe Information",
		type: Filter.Checkbox,
		value: false
	},
	{
		id: "addRecipeNutrition",
		text: "Add Recipe Nutrition",
		type: Filter.Checkbox,
		value: false
	}
];

export const filtersSort = [
	"",
	"meta-score",
	"popularity",
	"healthiness",
	"price",
	"time",
	"random",
	"max-used-ingredients",
	"min-missing-ingredients",
	"alcohol",
	"caffeine",
	"copper",
	"energy",
	"calories",
	"calcium",
	"carbohydrates",
	"carbs",
	"choline",
	"cholesterol",
	"total-fat",
	"fluoride",
	"trans-fat",
	"saturated-fat",
	"mono-unsaturated-fat",
	"poly-unsaturated-fat",
	"fiber",
	"folate",
	"folic-acid",
	"iodine",
	"iron",
	"magnesium",
	"manganese",
	"vitamin-b3",
	"niacin",
	"vitamin-b5",
	"pantothenic-acid",
	"phosphorus",
	"potassium",
	"protein",
	"vitamin-b2",
	"riboflavin",
	"selenium",
	"sodium",
	"vitamin-b1",
	"thiamin",
	"vitamin-a",
	"vitamin-b6",
	"vitamin-b12",
	"vitamin-c",
	"vitamin-d",
	"vitamin-e",
	"vitamin-k",
	"sugar",
	"zinc"
];
