"use client";
import React from "react";
import "./total.credits.scss";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

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
		uv: 3400,
		pv: 5800,
		amt: 2290,
	},
	{
		name: "Page D",
		uv: 2780,
		pv: 4908,
		amt: 2000,
	},
	{
		name: "Page E",
		uv: 1890,
		pv: 2800,
		amt: 2181,
	},
	{
		name: "Page F",
		uv: 8390,
		pv: 3800,
		amt: 2500,
	},
	{
		name: "Page G",
		uv: 2490,
		pv: 6300,
		amt: 2100,
	},
];

const TotalCredits = () => {
	return (
		<div className="total-credits">
			<div className="total-credit-title">
				<h4>Credits</h4>

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

			<div className="credit-comparison">
				<div className="counter">
					<div>
						<p>Tools</p>
						<h1>789</h1>
					</div>
					<div>
						<p>Agents</p>
						<h1>789</h1>
					</div>
				</div>

				<div className="credit-info">
					<div className="rocket-container">
						<Image
							alt="rocket"
							src="https://i.postimg.cc/mDvYTJFW/icons8-rocket-96.png"
							fill={true}
							className="rocket"
							quality={20}
						/>
					</div>
					<div className="info">
						<h6>Upgrade to pro</h6>
						<p>
							Get more credits and increased storage space to
							supercharge your projects.
						</p>

						<button>
							<p>Upgrade now</p>
							<EastIcon className="upgrade-icon" />
						</button>
					</div>
				</div>
			</div>

			<div className="total-credit-chart">
				<ResponsiveContainer width="99%" height="99%">
					<AreaChart data={data}>
						<defs>
							<linearGradient
								id="colorUv"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="#8884d8"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="#8884d8"
									stopOpacity={0}
								/>
							</linearGradient>
							<linearGradient
								id="colorPv"
								x1="0"
								y1="0"
								x2="0"
								y2="1"
							>
								<stop
									offset="5%"
									stopColor="#82ca9d"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="#82ca9d"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<XAxis dataKey="name" tick={{ fontSize: 10 }} />
						<YAxis
							tick={{ fontSize: 10 }}
							label={{
								value: "Total credits",
								angle: -90,
								position: "insideLeft",
							}}
							axisLine={{ stroke: "transparent" }}
						/>
						<CartesianGrid
							vertical={false}
							stroke="rgba(133, 133, 133, 0.324)"
							strokeDasharray="1"
						/>
						<Tooltip
							contentStyle={{
								background: "white",
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
						<Area
							type="monotone"
							dataKey="uv"
							stroke="#8884d8"
							fillOpacity={1}
							fill="url(#colorUv)"
						/>
						<Area
							type="monotone"
							dataKey="pv"
							stroke="#82ca9d"
							fillOpacity={1}
							fill="url(#colorPv)"
						/>
						<Legend />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TotalCredits;
