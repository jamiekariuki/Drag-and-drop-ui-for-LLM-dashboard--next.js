"use client";
import React, { useEffect } from "react";
import "./navbar.scss";
import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import AccountMenu from "./account menu/account.menu";
import MobileSideBarNav from "../side bar/mobile side bar/mobile.sidebar";

export const Navbar = () => {
	const [mobileSideBar, setMobileSideBar] = useState(false);

	const handleMobileSidebarToggle = () => {
		setMobileSideBar(!mobileSideBar);
	};

	return (
		<nav>
			<MobileSideBarNav
				mobileSideBar={mobileSideBar}
				handleMobileSidebarToggle={handleMobileSidebarToggle}
			/>
			<div
				className={
					mobileSideBar
						? "side-bar-background side-bar-background-open"
						: "side-bar-background"
				}
				onClick={handleMobileSidebarToggle}
			/>
			<div className="container">
				<div className="left">
					<div
						className="mobile-nav"
						onClick={handleMobileSidebarToggle}
					>
						<SlMenu className="menu-icon" />
					</div>
					<div className="logo">
						<h1>Android 0.4</h1>
					</div>
				</div>

				<div className="right">
					{" "}
					<AccountMenu />{" "}
				</div>
			</div>
		</nav>
	);
};
