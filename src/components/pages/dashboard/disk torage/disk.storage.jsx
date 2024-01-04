"use client";
import React from "react";
import {
	PieChart,
	Pie,
	Sector,
	Tooltip,
	Cell,
	ResponsiveContainer,
} from "recharts";
import "./disk.storage.scss";

const data = [
	{ name: "Videos", value: 70 },
	{ name: "Photos", value: 30 },
	{ name: "PDF", value: 10 },
	{ name: "Audio", value: 60 },
	{ name: "Free", value: 40 },
];
const COLORS = [
	"rgba(213, 56, 35, 0.797)",
	"rgba(35, 136, 213, 0.797)",
	"rgba(127, 35, 213, 0.797)",
	"rgba(106, 213, 35, 0.797)",
	"grey",
];

const requestedProducts = [
	{ product: "Video", number: "6", size: "46 " },
	{ product: "Photos", number: "68", size: "36 " },
	{ product: "PDF", number: "34", size: "25 " },
	{ product: "Audio", number: "2", size: "18 " },
];

const DiskStorage = () => {
	return (
		<div className="pie-chart">
			<div className="pie-chart-title">
				<h4>Disk storage</h4>
			</div>
			<div className="pie-chart-container">
				<ResponsiveContainer height="99%" width="99%">
					<PieChart>
						<Tooltip
							contentStyle={{
								background: "white",
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
					<h6>Videos</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[1] }}
					/>
					<h6>Photos</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[2] }}
					/>
					<h6>PDF</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[3] }}
					/>
					<h6>Audio</h6>
				</div>
				<div className="key-container">
					<div
						className="key-color"
						style={{ background: COLORS[4] }}
					/>
					<h6>Free</h6>
				</div>
			</div>

			<div className="totals">
				<h1>Free space 78mb / 200mb</h1>
				<div className="table">
					{requestedProducts.map((item, index) => (
						<div className="table-container" key={index}>
							<div className="item">
								<p> {item.product}</p>
							</div>
							<div className="item">
								<p>{item.number} files</p>
							</div>
							<div className="item">
								<p className="requests"> {item.number} mb</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default DiskStorage;
