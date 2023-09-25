"use client";
import React, { useContext, useEffect, useState } from "react";
import "./sidebar.scss";
import { SlMenu } from "react-icons/sl";
import Navigations from "./navigation/navigations";
import { agents, chatBot, first, general, vps } from "./links";

import { BsArrowLeftCircle } from "react-icons/bs";

export const SideBar = ({ handleMobileSidebarToggle }) => {
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
					<BsArrowLeftCircle
						className="close-icon"
						onClick={handleMobileSidebarToggle}
					/>
				</div>
			</div>
			<div className="side-bar-wrapper">
				{first.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>Chat Bot</p>
					</div>
				)}

				{chatBot.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>Agents</p>
					</div>
				)}

				{agents.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>VPS</p>
					</div>
				)}

				{vps.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				{!sideBar && (
					<div className="side-bar-heading ">
						<p>General</p>
					</div>
				)}

				{general.map((item, index) => (
					<Navigations
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						sideBar={sideBar}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}
			</div>
		</div>
	);
};
