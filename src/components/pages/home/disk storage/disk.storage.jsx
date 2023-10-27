"use client";
import React from "react";
import "./disk.storage.scss";
import {
	PieChart,
	Pie,
	Sector,
	Tooltip,
	Cell,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Free", value: 14 },
	{ name: "Used", value: 50 },
];
const COLORS = ["rgba(195, 0, 255, 0.204)", "#b12f9c"];

const DiskStorage = () => {
	const percentageUsed =
		(data[1].value / (data[0].value + data[1].value)) * 100;
	return (
		<div className="disk-storage">
			<div className="disk-storage-title">
				<h4>Disk storage</h4>
			</div>

			<div className="disk-chart-container">
				<div className="label-container">
					<h1>{percentageUsed.toFixed(1)}%</h1>
				</div>
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
							}}
							labelStyle={{ display: "none" }}
						/>
						<Pie
							data={data}
							innerRadius="85%"
							outerRadius="95%"
							fill="blue"
							paddingAngle={-6}
							dataKey="value"
							stroke="none"
							startAngle={90}
							endAngle={450}
							cornerRadius={10}
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
			<div className="disk-keys">
				<div className="disk-key-wrapper">
					<div
						className="disk-mark"
						style={{ background: COLORS[1] }}
					/>
					<h6>Used:</h6>
					<p>
						{data[1].value}
						{" GB"}
					</p>
				</div>

				<div className="disk-key-wrapper">
					<div
						className="disk-mark"
						style={{ background: COLORS[0] }}
					/>
					<h6>Free:</h6>
					<p>
						{data[0].value}
						{" GB"}
					</p>
				</div>
			</div>
		</div>
	);
};

export default DiskStorage;
