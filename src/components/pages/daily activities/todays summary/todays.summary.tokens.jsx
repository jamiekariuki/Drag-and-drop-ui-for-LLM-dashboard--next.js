"use client";
import React from "react";
import "./todays.summary.scss";
import TokenIcon from "@mui/icons-material/Token";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const TodaysSummaryTokens = () => {
	const tokenData = {
		number: "1347",
		percent: "+67%",
		positive: true,
	};

	return (
		<div className="todays-summary">
			<div className="todays-summary-left">
				<div className="todays-summary-left-top">
					<p>Tokens used </p>
				</div>
				<div className="todays-summary-left-bottom">
					<div className="todays-summary-shadow" />
					<TokenIcon className="ts-icon" />
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

export default TodaysSummaryTokens;
