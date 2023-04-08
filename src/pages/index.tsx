import { Cards, Filters, Search } from "../components";
import { useMocks } from "../hooks";
import { Layout } from "../layout";

useMocks();

export function App() {
	return (
		<Layout>
			<Search />
			<Filters />
			<Cards />
		</Layout>
	);
}
