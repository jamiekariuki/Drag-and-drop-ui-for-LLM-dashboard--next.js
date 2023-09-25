"use client";
import "./mobile.nav.scss";
import { agents, chatBot, first, general, vps } from "./../../links";
import { BsArrowLeftCircle } from "react-icons/bs";
import MobileNavLinks from "../mobile nav links/mobile.nav.links";

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
					<MobileNavLinks
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				<div className="mobile-side-bar-heading ">
					<p>Chat Bot</p>
				</div>

				{chatBot.map((item, index) => (
					<MobileNavLinks
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				<div className="mobile-side-bar-heading ">
					<p>Agents</p>
				</div>

				{agents.map((item, index) => (
					<MobileNavLinks
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				<div className="mobile-side-bar-heading ">
					<p>VPS</p>
				</div>

				{vps.map((item, index) => (
					<MobileNavLinks
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}

				<div className="mobile-side-bar-heading ">
					<p>General</p>
				</div>

				{general.map((item, index) => (
					<MobileNavLinks
						key={index}
						icon={item.icon}
						text={item.text}
						link={item.link}
						handleMobileSidebarToggle={handleMobileSidebarToggle}
					/>
				))}
			</div>
		</div>
	);
};
