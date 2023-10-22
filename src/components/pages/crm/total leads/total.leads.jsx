"use client";
import React from "react";
import "./total.leads.scss";
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

const data = [
	{
		name: "Jan",
		leads: 3200,
	},
	{
		name: "Feb",
		leads: 2500,
	},
	{
		name: "Mar",
		leads: 3340,
	},
	{
		name: "Apr",
		leads: 2900,
	},
	{
		name: "May",
		leads: 3800,
	},
	{
		name: "Jun",
		leads: 3000,
	},
	{
		name: "Jul",
		leads: 2200,
	},
	{
		name: "Aug",
		leads: 3600,
	},
	{
		name: "Sep",
		leads: 4800,
	},
	{
		name: "Oct",
		leads: 3900,
	},
	{
		name: "Nov",
		leads: 5300,
	},
	{
		name: "Dec",
		leads: 4200,
	},
];

const TotalLeads = () => {
	return (
		<div className="total-leads">
			<div className="total-lead-title">
				<h4>Leads</h4>
			</div>
			<div className="total-lead-chart">
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
									stopColor="rgba(250, 175, 36, 0.735)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="rgba(250, 175, 36, 0.735)"
									stopOpacity={0}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid
							vertical={false}
							stroke="rgba(133, 133, 133, 0.324)"
							strokeDasharray="1"
						/>
						<XAxis dataKey="name" tick={{ fontSize: 10 }} />
						<YAxis
							tick={{ fontSize: 10 }}
							label={{
								value: "Total leads",
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
						<Area
							type="monotone"
							dataKey="leads"
							stroke="rgba(250, 175, 36, 0.735)"
							fillOpacity={1}
							fill="url(#colorUv)"
						/>
						<Legend />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default TotalLeads;
