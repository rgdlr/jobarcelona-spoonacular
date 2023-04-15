import "./index.css";

export function Loader(): JSX.Element {
	return (
		<div className="loader">
			<div className="loader__text">Preparing recipe</div>
			<div className="loader__omelet" />
			<div className="pan-container">
				<div className="pan__base" />
				<div className="pan__handle" />
			</div>
			<div className="loader__shadow" />
		</div>
	);
}
