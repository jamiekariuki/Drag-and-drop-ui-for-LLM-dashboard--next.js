"use client";
import React from "react";
import "./navigations.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigations = ({
	icon,
	text,
	link,
	sideBar,
	handleMobileSidebarToggle,
}) => {
	const pathname = usePathname();

	return (
		<Link href={link}>
			<button
				className="general-links"
				onClick={handleMobileSidebarToggle}
				style={{
					backgroundColor: pathname === link && "#b12f9c",
				}}
			>
				<div
					className={
						sideBar
							? "side-bar-icon side-bar-icon-collapse"
							: "side-bar-icon"
					}
				>
					<div className={pathname === link ? "link-color" : "link"}>
						{icon}
					</div>
				</div>

				{!sideBar && (
					<h5
						className="h5text"
						style={{
							color: pathname === link && "white",
						}}
					>
						{text}
					</h5>
				)}
			</button>
		</Link>
	);
};

export default Navigations;
