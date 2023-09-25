"use client";
import React from "react";
import "./navigations.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navigations = ({
	icon,
	text,
	link,
	sideBar,
	activeIndex,
	isAccordion,
	handleMobileSidebarToggle,
}) => {
	return (
		<button className="general-links" onClick={handleMobileSidebarToggle}>
			<div
				className={
					sideBar
						? "side-bar-icon side-bar-icon-collapse"
						: "side-bar-icon"
				}
			>
				{" "}
				{icon}
			</div>

			{!sideBar && <h5 className="h5text">{text}</h5>}

			{isAccordion && <MdKeyboardArrowDown className="arrow-up" />}
		</button>
	);
};

export default Navigations;
