import React from "react";
import {
	PieChart,
	Pie,
	Sector,
	Tooltip,
	Cell,
	ResponsiveContainer,
} from "recharts";
import "./pie.chart.scss";

const data = [
	{ name: "Instagram", value: 700 },
	{ name: "Twitter", value: 300 },
	{ name: "Facebook", value: 100 },
	{ name: "WhatsApp", value: 600 },
	{ name: "Gmail", value: 500 },
	{ name: "LinkedIn", value: 200 },
];
const COLORS = [
	"rgba(213, 56, 35, 0.797)",
	"rgba(35, 136, 213, 0.797)",
	"rgba(127, 35, 213, 0.797)",
	"rgba(106, 213, 35, 0.797)",
	"rgba(128, 128, 128, 0.904)",
	"rgba(213, 35, 168, 0.797)",
];

const SummaryPieChart = () => {
	return (
		<div className="pie-chart">
			<div className="pie-chart-title">
				<h4>Platform Activity</h4>
			</div>
			<div className="pie-chart-container">
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
							innerRadius="65%"
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
			<div className="pie-chart-keys">
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[0] }}
					/>
					<h6>Instagram</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[1] }}
					/>
					<h6>Twitter</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[2] }}
					/>
					<h6>Facebook</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[3] }}
					/>
					<h6>WhatsApp</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[4] }}
					/>
					<h6>Gmail</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[5] }}
					/>
					<h6>LinkedIn</h6>
				</div>
			</div>
		</div>
	);
};

export default SummaryPieChart;
