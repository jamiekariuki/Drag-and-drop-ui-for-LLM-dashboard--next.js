"use client";
import React from "react";
import "./leads.location.scss";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Nairobi", value: 540 },
	{ name: "Mombasa", value: 150 },
	{ name: "Kampala", value: 360 },
	{ name: "Lagos", value: 200 },
];

const COLORS = [
	"rgba(170, 50, 170, 0.501)",
	"rgba(155, 255, 5, 0.55)",
	"rgba(255, 122, 5, 0.616)",
	"rgba(5, 122, 255, 0.616)",
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text
			x={x}
			y={y}
			fill="white"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	);
};

const LeadsLocation = () => {
	return (
		<div className="leads-location">
			<div className="leads-location-title">
				<h4>Leads top location</h4>
			</div>

			<div className="leads-location-chart">
				<ResponsiveContainer width="99%" height="99%">
					<PieChart>
						<Pie
							data={data}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={100}
							fill="#8884d8"
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

			<div className="leads-location-keys">
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[0] }}
					/>
					<h6>Nairobi</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[1] }}
					/>
					<h6>Mombasa</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[2] }}
					/>
					<h6>Kampala</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[3] }}
					/>
					<h6>Lagos</h6>
				</div>
			</div>
		</div>
	);
};

export default LeadsLocation;
