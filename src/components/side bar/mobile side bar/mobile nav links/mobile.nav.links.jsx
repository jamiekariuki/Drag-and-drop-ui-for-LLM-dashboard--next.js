"use client";
import React from "react";
import "./mobile.nav.links.scss";
import Link from "next/link";

const MobileNavLinks = ({ icon, text, handleMobileSidebarToggle, link }) => {
	return (
		<Link href={link}>
			<button
				className="mobile-general-links"
				onClick={handleMobileSidebarToggle}
			>
				<div className="mobile-side-bar-icon"> {icon}</div>

				<h5 className="mobile-h5text">{text}</h5>
			</button>
		</Link>
	);
};

export default MobileNavLinks;
