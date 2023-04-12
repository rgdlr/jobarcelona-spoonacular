import { Link } from "react-router-dom";
import "./index.css";

export function Header() {
	return (
		<header className="header">
			<img height={24} width={24} src="assets/jobarcelona.png" alt="logo" />
			<Link to="/">JOBARCELONA SPOONACULAR</Link>
		</header>
	);
}
