"use client";
import "./mobile.nav.scss";
import { BsArrowLeftCircle } from "react-icons/bs";
import MobileNavLinks from "../mobile nav links/mobile.nav.links";
import { NavigationLinks } from "../../links";

export const MobileNav = ({ handleMobileSidebarToggle, mobileSideBar }) => {
	return (
		<div className="mobile-nav-container">
			{mobileSideBar && (
				<BsArrowLeftCircle
					className="close-icon"
					onClick={handleMobileSidebarToggle}
				/>
			)}

			<div className="mobile-side-bar-wrapper">
				{NavigationLinks.map((item, index) => (
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
