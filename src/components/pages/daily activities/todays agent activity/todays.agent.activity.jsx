"use client";
import React from "react";
import "./todays.agent.activity.scss";
import {
	PieChart,
	Pie,
	Sector,
	Tooltip,
	Cell,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "today", value: 70 },
	{ name: "yesterday", value: 30 },
];
const COLORS = ["orange", "indigo"];

const TodaysAgentActivity = () => {
	return (
		<div className="todays-agent-activity">
			<div className="todays-agent-activity-title">
				<h4>Agents activity compared to yesterday</h4>
			</div>
			<div className="todays-agent-activity-chart">
				<ResponsiveContainer height="99%" width="99%">
					<PieChart>
						<Tooltip
							contentStyle={{
								background: "rgba(137, 138, 138, 0.803)",
								borderRadius: "5px",
								border: "none",
								height: "30px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								fontSize: "15px",
								transform: "scale(0.5)",
							}}
							labelStyle={{ display: "none" }}
						/>
						<Pie
							startAngle={180}
							endAngle={0}
							data={data}
							innerRadius="85%"
							outerRadius="95%"
							fill="red"
							paddingAngle={3}
							dataKey="value"
							stroke="none"
						>
							{data.map((entry, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index % COLORS.length]}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className="todays-agent-activity-keys">
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[0] }}
					/>
					<h6>Today</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[1] }}
					/>
					<h6>Yesterday</h6>
				</div>
			</div>
		</div>
	);
};

export default TodaysAgentActivity;
