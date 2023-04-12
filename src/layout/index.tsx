import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function Layout(attributes: PropsWithChildren) {
	return (
		<>
			<Header />
			<Main>
				<Outlet />
			</Main>
			<Footer />
		</>
	);
}

export { Footer, Header, Main };
