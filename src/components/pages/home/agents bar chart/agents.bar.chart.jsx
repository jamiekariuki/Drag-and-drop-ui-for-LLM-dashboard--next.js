"use client";
import React from "react";
import {
	BarChart,
	Bar,
	Cell,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import "./agents.bar.chart.scss";

const data = [
	{
		name: "Jan",
		chatBotAgent: 4000,
		marketingAgent: 500,
		researchAgent: 2400,
		VAagent: 1800,
	},
	{
		name: "Feb",
		chatBotAgent: 3000,
		marketingAgent: 1398,
		researchAgent: 2210,
		VAagent: 2560,
	},
	{
		name: "Mar",
		chatBotAgent: 2000,
		marketingAgent: 2800,
		researchAgent: 2290,
		VAagent: 3560,
	},
	{
		name: "Apr",
		chatBotAgent: 2780,
		marketingAgent: 3908,
		researchAgent: 2000,
		VAagent: 1700,
	},
	{
		name: "May",
		chatBotAgent: 1890,
		marketingAgent: 4800,
		researchAgent: 2181,
		VAagent: 1500,
	},
	{
		name: "Jun",
		chatBotAgent: 2390,
		marketingAgent: 3800,
		researchAgent: 1500,
		VAagent: 3500,
	},
	{
		name: "Jul",
		chatBotAgent: 5490,
		marketingAgent: 4300,
		researchAgent: 2100,
		VAagent: 3100,
	},
	{
		name: "Aug",
		chatBotAgent: 4780,
		marketingAgent: 3908,
		researchAgent: 2000,
		VAagent: 2600,
	},
];

const AgentBarChart = () => {
	return (
		<div className="line-chart">
			<div className="line-chart-title">
				<h4>Agents activity</h4>

				<div className="period-selector">
					<div className="period-container">
						<h6>year</h6>
					</div>
					<div className="period-container">
						<h6>month</h6>
					</div>
					<div className="period-container">
						<h6>week</h6>
					</div>
					<div className="period-container">
						<h6>day</h6>
					</div>
					<div className="period-container">
						<h6>hr</h6>
					</div>
				</div>
			</div>
			<div className="line-chart-container">
				<ResponsiveContainer width="99%" height="99%">
					<BarChart data={data}>
						<CartesianGrid
							vertical={false}
							stroke="rgba(133, 133, 133, 0.324)"
							strokeDasharray="1"
						/>
						<XAxis dataKey="name" tick={{ fontSize: 10 }} />
						<YAxis
							tick={{ fontSize: 10 }}
							label={{
								value: "Tokens used",
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
						<Bar
							dataKey="chatBotAgent"
							fill="rgba(18, 54, 161, 0.774)"
						/>
						<Bar
							dataKey="marketingAgent"
							fill="rgba(102, 46, 134, 0.774)"
						/>
						<Bar
							dataKey="researchAgent"
							fill="rgba(255, 166, 0, 0.648)"
						/>
						<Bar dataKey="VAagent" fill="rgba(255, 0, 0, 0.413)" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AgentBarChart;
