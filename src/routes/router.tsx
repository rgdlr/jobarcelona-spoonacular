import { PropsWithChildren } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { Home, NotFound, Recipe } from "../pages";

export function Router(attributes: PropsWithChildren) {
	const { children } = attributes;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="recipes" element={<Home />} />
					<Route path="recipes/:id" element={<Recipe />} />
					<Route path="*" element={<NotFound />} />
					{children}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
