"use client";
import React, { useState } from "react";
import "./leads.info.scss";
import Modal from "@/components/styled components/modals/modal";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import InfoIcon from "@mui/icons-material/Info";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import LeadsMessage from "./leads message/leads.message";
import LeadsMoreInfo from "./leads more info/leads.more.info";
import LeadsEdit from "./leads edit/leads.edit";

const LeadsInfo = ({ open, onClose, userData }) => {
	const [activeTab, setActiveTab] = useState("info");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div className="leads-info">
				<div className="leads-tab">
					<button
						className="leads-tab-wrapper"
						onClick={() => handleTabClick("info")}
						style={{
							backgroundColor: activeTab === "info" && "#b12f9c",
						}}
					>
						<InfoIcon
							className="tab-icon"
							style={{
								color: activeTab === "info" && "white",
							}}
						/>
						<h6
							style={{
								color: activeTab === "info" && "white",
							}}
						>
							Info
						</h6>
					</button>
					<button
						className="leads-tab-wrapper"
						onClick={() => handleTabClick("edit")}
						style={{
							backgroundColor: activeTab === "edit" && "#b12f9c",
						}}
					>
						<BorderColorIcon
							className="tab-icon"
							style={{
								color: activeTab === "edit" && "white",
							}}
						/>
						<h6
							style={{
								color: activeTab === "edit" && "white",
							}}
						>
							Edit
						</h6>
					</button>
					<button
						className="leads-tab-wrapper"
						onClick={() => handleTabClick("message")}
						style={{
							backgroundColor:
								activeTab === "message" && "#b12f9c",
						}}
					>
						<InsertCommentIcon
							className="tab-icon"
							style={{
								color: activeTab === "message" && "white",
							}}
						/>
						<h6
							style={{
								color: activeTab === "message" && "white",
							}}
						>
							Message
						</h6>
					</button>
				</div>

				<div className="leads-container">
					{activeTab === "info" && (
						<LeadsMoreInfo userData={userData} />
					)}
					{activeTab === "edit" && <LeadsEdit leadData={userData} />}
					{activeTab === "message" && (
						<LeadsMessage userData={userData} />
					)}
				</div>
			</div>
		</Modal>
	);
};

export default LeadsInfo;
