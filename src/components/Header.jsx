import React from "react";
import { Link } from "react-router-dom";
import spacesvg from "../img/space-svg.svg";
import ricksvg from "../img/rick.svg";

const Header = () => {
	return (
		<header className="header container">
			<nav>
				<Link to="/">
					<img src={spacesvg} alt="spacesvg" />
				</Link>
			</nav>
			<nav>
				<Link to="/RickAndMorty">
					<img src={ricksvg} alt="ricksvg" />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
