"use client";
import "./mobile.nav.scss";
import Navigations from "./../../navigation/navigations";
import { agents, chatBot, first, general, vps } from "./../../links";
import { BsArrowLeftCircle } from "react-icons/bs";

export const MobileNav = ({ handleMobileSidebarToggle }) => {
	return (
		<div className="mobile-side-bar-container">
			<div className="mobile-side-bar-title">
				<div className="mobile-side-bar-toggle">
					<BsArrowLeftCircle
						className="close-icon"
						onClick={handleMobileSidebarToggle}
					/>
				</div>
			</div>
			<div className="mobile-side-bar-wrapper">
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
					<div className="mobile-side-bar-heading ">
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
					<div className="mobile-side-bar-heading ">
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
					<div className="mobile-side-bar-heading ">
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
					<div className="mobile-side-bar-heading ">
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
