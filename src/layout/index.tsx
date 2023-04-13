import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function Layout(attributes: PropsWithChildren) {
	const { children } = attributes;

	return (
		<>
			<Header />
			<Main>
				<Outlet />
				{children}
			</Main>
			<Footer />
		</>
	);
}

export { Footer, Header, Main };
