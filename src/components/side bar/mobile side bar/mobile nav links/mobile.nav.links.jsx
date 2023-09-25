"use client";
import React from "react";
import "./mobile.nav.links.scss";

const MobileNavLinks = ({ icon, text, handleMobileSidebarToggle }) => {
	return (
		<button
			className="mobile-general-links"
			onClick={handleMobileSidebarToggle}
		>
			<div className="mobile-side-bar-icon"> {icon}</div>

			<h5 className="mobile-h5text">{text}</h5>
		</button>
	);
};

export default MobileNavLinks;
