import React, { useState } from "react";
import "./custom.schedule.modal.scss";
import Modal from "@/components/styled components/modals/modal";
import DateRange from "./date range/date.range";
import MultipleSchedules from "./multiple schedules/multiple.schedules";
import GoogleCalenderSchedule from "./google calender/google.calender.schedule";

const CustomScheduleModal = ({ open, onClose, data }) => {
	const [activeTab, setActiveTab] = useState("multiple schedules");

	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div className="custom-schedules">
				<div className="cs-heading">
					<div className="cs-title">
						<h1>Advance Schedules</h1>
					</div>

					<div className="cs-tab">
						<button
							className="leads-tab-wrapper"
							onClick={() => handleTabClick("multiple schedules")}
							style={{
								backgroundColor:
									activeTab === "multiple schedules" &&
									"#b12f9c",
							}}
						>
							<p
								style={{
									color:
										activeTab === "multiple schedules" &&
										"white",
								}}
							>
								multiple schedules
							</p>
						</button>

						<button
							className="leads-tab-wrapper"
							onClick={() => handleTabClick("date range")}
							style={{
								backgroundColor:
									activeTab === "date range" && "#b12f9c",
							}}
						>
							<p
								style={{
									color:
										activeTab === "date range" && "white",
								}}
							>
								date range
							</p>
						</button>
						<button
							className="leads-tab-wrapper"
							onClick={() => handleTabClick("google calender")}
							style={{
								backgroundColor:
									activeTab === "google calender" &&
									"#b12f9c",
							}}
						>
							<p
								style={{
									color:
										activeTab === "google calender" &&
										"white",
								}}
							>
								google calender
							</p>
						</button>
					</div>
				</div>

				<div className="scheduling-container">
					{activeTab === "multiple schedules" && (
						<MultipleSchedules data={data} />
					)}
					{activeTab === "date range" && <DateRange data={data} />}
					{activeTab === "google calender" && (
						<GoogleCalenderSchedule data={data} />
					)}
				</div>
			</div>
		</Modal>
	);
};

export default CustomScheduleModal;

//random time between two period

//google calender events
//AI create schedules
//date range will have random too
//multiple schedules
