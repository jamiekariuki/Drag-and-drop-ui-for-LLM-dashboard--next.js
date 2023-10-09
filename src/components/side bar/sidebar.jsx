"use client";
import React, { useState } from "react";
import "./sidebar.scss";
import { SlMenu } from "react-icons/sl";
//import Navigations from "./navigation/navigations";
//import { agents, chatBot, first, general, vps } from "./links";

export const SideBar = () => {
	const [sideBar, setSideBar] = useState(false);

	const handleSidebarToggle = () => {
		setSideBar(!sideBar);
	};

	return (
		<div
			className={
				sideBar
					? "side-bar-container side-bar-collapse"
					: "side-bar-container"
			}
		>
			<div className="side-bar-title">
				<div className="side-bar-toggle">
					<SlMenu
						className="open-icon"
						onClick={handleSidebarToggle}
					/>
				</div>
			</div>
			{/* <div className="side-bar-wrapper">
				{first.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>Chat Bot</p>
						<div className="nav-divider" />
					</div>
				)}

				{chatBot.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>Agents</p>
						<div className="nav-divider" />
					</div>
				)}

				{agents.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>VPS</p>
						<div className="nav-divider" />
					</div>
				)}

				{vps.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>General</p>
						<div className="nav-divider" />
					</div>
				)}

				{general.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
					/>
				))}
			</div> */}
		</div>
	);
};
