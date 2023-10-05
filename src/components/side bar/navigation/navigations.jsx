"use client";
import React from "react";
import "./navigations.scss";
import Link from "next/link";

const Navigations = ({
	icon,
	text,
	link,
	sideBar,
	handleMobileSidebarToggle,
}) => {
	return (
		<Link href={link}>
			<button
				className="general-links"
				onClick={handleMobileSidebarToggle}
			>
				<div
					className={
						sideBar
							? "side-bar-icon side-bar-icon-collapse"
							: "side-bar-icon"
					}
				>
					{icon}
				</div>

				{!sideBar && <h5 className="h5text">{text}</h5>}
			</button>
		</Link>
	);
};

export default Navigations;
