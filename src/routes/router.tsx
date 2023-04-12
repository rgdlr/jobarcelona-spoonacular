import { PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { Card, Cards } from "../components";
import { Home, NotFound } from "../pages";

export function Router(attributes: PropsWithChildren) {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/recipes" element={<Cards />} />
					<Route path="/recipes/:id" element={<Card />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
