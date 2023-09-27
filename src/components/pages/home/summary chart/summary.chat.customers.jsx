"use client";
import React, { PureComponent } from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

import "./summary.chat.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const data = [
	{
		name: "Page A",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Page B",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
	{
		name: "Page C",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];

const SummaryChatCustomer = ({ title, number, percent, positive }) => {
	return (
		<div className="summary-chat">
			<div className="summary-chat-left">
				<h4>{title}</h4>
				<h1>{number}</h1>
				<div
					className={
						positive
							? "percentage-container percentage-container-positive"
							: "percentage-container"
					}
				>
					<ArrowDropUpIcon className="percentage-icon" />{" "}
					<h6>{percent}</h6>
				</div>
			</div>
			<div className="summary-chat-right">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart width={500} height={400} data={data}>
						<Tooltip
							contentStyle={{
								background: "transparent",
								border: "none",
							}}
							labelStyle={{ display: "none" }}
						/>
						<defs>
							<linearGradient
								id="colorUv"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="4%"
									stopColor={
										positive
											? "rgba(64, 255, 0, 0.978)"
											: "rgba(255, 0, 0, 0.748)"
									}
									stopOpacity={0.3}
								/>
								<stop
									offset="95%"
									stopColor={
										positive
											? "rgba(64, 255, 0, 0)"
											: "rgba(255, 0, 0, 0)"
									}
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<Area
							type="monotone"
							dataKey="pv"
							stroke={
								positive
									? "rgba(64, 255, 0, 0.7)"
									: "rgba(255, 0, 0, 0.7"
							}
							fillOpacity={1}
							fill="url(#colorUv)"
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default SummaryChatCustomer;
