"use client";
import React, { useEffect } from "react";
import "./mobile.sidebar.scss";
import { MobileNav } from "./mobile nav/mobile.nav";

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
			<MobileNav
				handleMobileSidebarToggle={handleMobileSidebarToggle}
				mobileSideBar={mobileSideBar}
			/>
		</div>
	);
};

export default MobileSideBarNav;
