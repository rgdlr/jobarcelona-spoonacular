import { HTMLAttributes } from "react";
import { Card } from "../../components";
import { RandomRecipe, Recipe } from "../../interfaces";
import { computeClassNames } from "../../utils";
import "./index.css";

export interface CardsAttributes<T> extends HTMLAttributes<HTMLUListElement> {
	items?: T;
}

export function Cards(attributes: CardsAttributes<(RandomRecipe | Recipe)[]>): JSX.Element {
	const { children, className, items, ...restAttributes } = attributes;

	return (
		<ul {...restAttributes} className={computeClassNames("cards", className)}>
			{items?.map((item) => (
				<Card item={item} key={item.id} />
			))}
			{children}
		</ul>
	);
}
