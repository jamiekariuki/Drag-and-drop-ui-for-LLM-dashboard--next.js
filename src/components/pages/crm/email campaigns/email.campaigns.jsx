"use client";
import React from "react";
import "./email.campaigns.scss";
import {
	ComposedChart,
	Line,
	Area,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{
		name: "mon",
		email: 590,
	},
	{
		name: "tue",
		email: 868,
	},
	{
		name: "wed",
		email: 497,
	},
	{
		name: "thur",
		email: 580,
	},
	{
		name: "fri",
		email: 820,
	},
	{
		name: "sat",
		email: 400,
	},
];

const EmailCampaigns = () => {
	return (
		<div className="email-campaigns">
			<div className="email-campaigns-title">
				<h4>Email campaigns</h4>
			</div>

			<div className="email-campaigns-chart">
				<ResponsiveContainer width="100%" height="100%">
					<ComposedChart data={data}>
						<CartesianGrid
							vertical={false}
							stroke="rgba(133, 133, 133, 0.324)"
							strokeDasharray="1"
						/>
						<XAxis dataKey="name" tick={{ fontSize: 10 }} />
						<YAxis
							tick={{ fontSize: 10 }}
							label={{
								value: "Emails sent",
								angle: -90,
								position: "insideLeft",
							}}
							axisLine={{ stroke: "transparent" }}
						/>
						<Tooltip
							contentStyle={{
								background: "rgba(137, 138, 138, 0.9) ",
								borderRadius: "5px",
								border: "none",
								height: "120px",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "15px",
							}}
							cursor={{ fill: "rgba(90, 90, 90, 0.2)" }}
						/>

						<Bar dataKey="email" barSize={20} fill="#413ea0" />
						<Line
							type="monotone"
							dataKey="email"
							stroke="#ff7300"
						/>
					</ComposedChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default EmailCampaigns;
