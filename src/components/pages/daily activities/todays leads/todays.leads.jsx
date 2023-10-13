"use client";
import React from "react";
import "./todays.leads.scss";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "7:00", today: "5", yesterday: "3" },
	{ name: "8:00", today: "4", yesterday: "9" },
	{ name: "9:00", today: "7", yesterday: "5" },
	{ name: "10:00", today: "8", yesterday: "1" },
	{ name: "11:00", today: "11", yesterday: "7" },
	{ name: "12:00", today: "8", yesterday: "6" },
	{ name: "13:00", today: "5", yesterday: "8" },
	{ name: "14:00", today: "9", yesterday: "11" },
];

const TodaysLeads = () => {
	return (
		<div className="todays-leads">
			<div className="tpdays-leads-title">
				<h4>Todays leads compared to yesterday</h4>
			</div>

			<div className="todays-lead-chart">
				<ResponsiveContainer width="99%" height="99%">
					<LineChart data={data}>
						<CartesianGrid
							vertical={false}
							stroke="rgba(133, 133, 133, 0.324)"
							strokeDasharray="1"
						/>
						<XAxis dataKey="name" tick={{ fontSize: 10 }} />
						<YAxis
							tick={{ fontSize: 10 }}
							label={{
								value: "Leads",
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
						<Legend />
						<Line
							type="monotone"
							dataKey="today"
							stroke="#8884d8"
							activeDot={{ r: 8 }}
							dot={false}
						/>
						<Line
							type="monotone"
							dataKey="yesterday"
							stroke="#82ca9d"
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TodaysLeads;
