import "./index.css";

export function Loader() {
	return (
		<div className="loader">
			<div className="loader__text">Cooking...</div>
			<div className="loader__omelet"></div>
			<div className="pan-container">
				<div className="pan__base"></div>
				<div className="pan__handle"></div>
			</div>
			<div className="loader__shadow"></div>
		</div>
	);
}
