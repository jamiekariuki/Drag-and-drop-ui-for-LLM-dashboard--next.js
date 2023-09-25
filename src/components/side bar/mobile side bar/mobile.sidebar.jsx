"use client";
import React, { useEffect } from "react";
import "./mobile.sidebar.scss";
import { SideBar } from "../sidebar";

const MobileSideBarNav = ({ mobileSideBar, handleMobileSidebarToggle }) => {
	useEffect(() => {
		document.body.style.overflow = mobileSideBar ? "hidden" : "auto";
	}, [mobileSideBar]);

	return (
		<div
			className={
				mobileSideBar
					? "mobile-side-bar-container mobile-side-bar-open"
					: "mobile-side-bar-container"
			}
		>
			<SideBar handleMobileSidebarToggle={handleMobileSidebarToggle} />
		</div>
	);
};

export default MobileSideBarNav;
