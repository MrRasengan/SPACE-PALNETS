import React from "react";
import telegram from "../img/telegram.svg";
import github from "../img/github.svg";

const Footer = () => {
	return (
		<footer className="footer container">
			<div>
				<p>&copy; 2024 SPACE & PLANETS</p>
			</div>
			<div className="links">
				<a href="https://t.me/mrRasengan">
					<img src={telegram} alt="telegram" />
				</a>
				<a href="https://github.com/MrRasengan">
					<img src={github} alt="github" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
