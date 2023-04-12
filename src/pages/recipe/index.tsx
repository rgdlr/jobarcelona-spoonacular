import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Recipe as RecipeI } from "../../interfaces";
import "./index.css";
import { Loader } from "../../components";

export function Recipe() {
	const { id: recipeId } = useParams();
	const [recipe, setRecipe] = useState<RecipeI>();

	useEffect(() => {
		fetch(`recipes/${recipeId}/information`)
			.then((data) => data.json())
			.then((data) => setRecipe(data));
	}, []);

	return (
		<div className="recipe">
			{!recipe ? (
				<Loader />
			) : (
				<>
					<div className="recipe__cover">
						<img className="recipe__image" src={recipe.image}></img>
						{recipe.dishTypes?.at(0) && (
							<div className="recipe__type">{recipe.dishTypes?.at(0) || "?"}</div>
						)}
						<div className="recipe__score">{recipe.spoonacularScore || "?"}</div>
						<div className="recipe__info">
							<h2 className="recipe__title">{recipe.title}</h2>
							<div className="recipe__data">
								<div className="recipe__time">
									<svg
										fill="currentColor"
										height={12}
										width={12}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
									</svg>
									<span>{recipe.readyInMinutes} min</span>
								</div>
								<div className="recipe__likes">
									<svg
										fill="currentColor"
										height={12}
										width={12}
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512">
										<path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
									</svg>
									<span>{recipe.aggregateLikes}</span>
								</div>
							</div>
						</div>
					</div>

					<h3 className="recipe__subtitle">
						<svg
							className="recipe__icon"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 512 512">
							<path d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z" />
						</svg>
						Ingredients
					</h3>
					<ul className="recipe__ingredients">
						{recipe.extendedIngredients?.map((ingredient) => (
							<li className="recipe__ingredient" key={ingredient.id}>
								<img
									className="recipe__ingredient-image"
									src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
								/>
								{ingredient.name}
							</li>
						))}
					</ul>

					<h3 className="recipe__subtitle">
						<svg
							className="recipe__icon"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 448 512">
							<path d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
						</svg>
						Details
					</h3>
					<div
						className="recipe__summary"
						dangerouslySetInnerHTML={{ __html: recipe.summary ?? "" }}></div>
				</>
			)}
		</div>
	);
}
