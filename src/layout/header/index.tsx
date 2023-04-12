import { Link } from "react-router-dom";
import "./index.css";

export function Header() {
	return (
		<header className="header">
			<Link className="header__link" to="/">
				<img height={24} width={24} src="assets/jobarcelona.png" alt="logo" />
				JOBARCELONA
			</Link>
		</header>
	);
}
