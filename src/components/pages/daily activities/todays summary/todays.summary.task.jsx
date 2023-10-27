"use client";
import React from "react";
import "./todays.summary.scss";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const TodaysSummaryTasks = () => {
	const tokenData = {
		number: "13",
		percent: "-7%",
		positive: false,
	};

	return (
		<div className="todays-summary">
			<div className="todays-summary-left">
				<div className="todays-summary-left-top">
					<p>Completed tasks</p>
				</div>
				<div className="todays-summary-left-bottom">
					<div className="todays-summary-shadow todays-summary-shadow-task" />
					<AssignmentTurnedInIcon className="ts-icon ts-icon-task" />
				</div>
			</div>

			<div className="todays-summary-right">
				<div className="todays-summary-right-top">
					<h6>
						{tokenData.number >= 1000000
							? `${Math.round(tokenData.number / 100000) / 10}M`
							: tokenData.number >= 1000
							? `${Math.round(tokenData.number / 100) / 10}K`
							: tokenData.number}
					</h6>
				</div>
				<div className="todays-summary-right-bottom">
					<div
						className={
							tokenData.positive
								? "ts-percentage-container ts-percentage-container-positive"
								: "ts-percentage-container"
						}
					>
						<ArrowUpwardIcon className="ts-percentage-icon" />
						<h6>{tokenData.percent}</h6>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodaysSummaryTasks;
