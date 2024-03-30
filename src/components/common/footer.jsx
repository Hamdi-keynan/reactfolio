import React from "react";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer" style={{display: "flex", justifyContent: "center"}}>
				<div className="footer-credits-text">
					© 2024 Hamdi Keynan. All Rights Reserved.
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
