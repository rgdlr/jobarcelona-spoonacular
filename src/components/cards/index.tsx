import { Card } from "../../components";
import "./index.css";

export function Cards({ items }: { items: any }) {
	return (
		<ul className="cards">
			{items?.map((item: any) => (
				<Card item={item} key={item.id}></Card>
			))}
		</ul>
	);
}
