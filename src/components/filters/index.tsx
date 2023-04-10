import { FormEvent, useRef, useState } from "react";
import { useOnBlur } from "../../hooks";
import "./index.css";

const selectOptions = {
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

const filters = {
	query: [
		{
			param: "includeIngredients",
			text: "Include Ingredients",
			value: ""
		},
		{
			param: "excludeIngredients",
			text: "Exclude Ingredients",
			value: ""
		},
		{
			param: "author",
			text: "Author",
			value: ""
		}
	],
	select: [
		{
			param: "cuisine",
			text: "Include Cuisine",
			value: selectOptions.cuisine
		},
		{
			param: "excludeCuisine",
			text: "Exclude Cuisine",
			value: selectOptions.cuisine
		},
		{
			param: "type",
			text: "Type",
			value: selectOptions.type
		},
		{
			param: "intolerances",
			text: "Intolerances",
			value: selectOptions.intolerance
		}
	],
	switch: [
		{
			param: "instructionsRequired",
			text: "Instructions Required",
			value: [true, false]
		},
		{
			param: "fillIngredients",
			text: "Fill Ingredients",
			value: [true, false]
		},
		{
			param: "addRecipeInformation",
			text: "Add Recipe Information",
			value: [true, false]
		},
		{
			param: "addRecipeNutrition",
			text: "Add Recipe Nutrition",
			value: [true, false]
		}
	]
};

const sort = [
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

export function Filters() {
	const filtersRef = useRef(null);
	const [show, setShow] = useState(false);
	useOnBlur(filtersRef, () => setShow(false), show);

	const toggleShow = (_event: any) => setShow((prevShow) => !prevShow);
	const onFilter = (event: FormEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const formProperties = Object.fromEntries(formData);
		Object.entries(formProperties).forEach(([key, value]) => console.log(key, value));
	};

	return (
		<div className="filters" ref={filtersRef}>
			<button className="filters__button" onClick={toggleShow}>
				<svg width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
					<path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
				</svg>
			</button>
			<form onSubmit={onFilter}>
				<ul className={`filters__list filters__list--${show ? "show" : "hidden"}`}>
					{filters.query.map((filter) => (
						<li className="filters__filter" key={filter.param}>
							<input
								className="filters__input"
								name={filter.param}
								placeholder={filter.text}></input>
						</li>
					))}
					{filters.select.map((filter) => (
						<li className="filters__filter" key={filter.param}>
							<select className="filters__select" defaultValue={filter.param} name={filter.param}>
								<option className="filters__option" disabled value={filter.param}>
									{filter.text}
								</option>
								{filter.value?.map((option) => (
									<option className="filters__option" key={option} value={option}>
										{option}
									</option>
								))}
							</select>
						</li>
					))}
					{filters.switch.map((filter) => (
						<li className="filters__filter" key={filter.param}>
							<input
								className="filters__input"
								id={filter.param}
								name={filter.param}
								type="checkbox"
							/>
							<label className="filters__label" htmlFor={filter.param}>
								{filter.text}
							</label>
						</li>
					))}
					<li className="filters__filter">
						<input className="filters__input" type="reset" name="reset" />
						<input className="filters__input" type="submit" name="submit" />
					</li>
				</ul>
			</form>
		</div>
	);
}
