import { Cards, Filters, Search } from "../components";
import { Layout } from "../layout";

export function App() {
	return (
		<Layout>
			<Search />
			<Filters />
			<Cards />
		</Layout>
	);
}
