import { Navbar } from "@/components/navbar/navbar";
import { SideBar } from "@/components/side bar/sidebar";
import React from "react";
import "./account.scss";

const AccountlLayout = ({ children }) => {
	return (
		<div>
			<div className="apps">
				<SideBar />
				<div className="app-container">
					<Navbar />
					<div className="all-apps">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default AccountlLayout;
