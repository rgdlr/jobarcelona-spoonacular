import { PropsWithChildren } from "react";
import { Footer } from "./footer";
import { Header } from "./header";
import { Main } from "./main";

export function Layout(attributes: PropsWithChildren) {
	const { children } = attributes;
	return (
		<>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</>
	);
}

export { Footer, Header, Main };
