"use client";
import React from "react";
import "./lead.source.scss";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
	Legend,
} from "recharts";

const data = [
	{
		platform: "Linked in",
		leads: "530",
		closedLeads: "320",
	},
	{
		platform: "Instagram",
		leads: "220",
		closedLeads: "130",
	},
	{
		platform: "Twitter",
		leads: "600",
		closedLeads: "530",
	},
	{
		platform: "Facebook",
		leads: "370",
		closedLeads: "230",
	},
	{
		platform: "Email",
		leads: "610",
		closedLeads: "530",
	},
	{
		platform: "Google",
		leads: "430",
		closedLeads: "230",
	},
	{
		platform: "whatsApp",
		leads: "110",
		closedLeads: "90",
	},
];

const LeadSource = () => {
	return (
		<div className="lead-source">
			<div className="lead-source-title">
				<h4>Lead source</h4>
			</div>

			<div className="lead-source-chart">
				<ResponsiveContainer width="99%" height="99%">
					<RadarChart
						cx="50%"
						cy="50%"
						outerRadius="90%"
						innerRadius="10%"
						data={data}
						axisLine={false}
					>
						<PolarGrid />
						<PolarAngleAxis dataKey="platform" />
						<PolarRadiusAxis angle={90} domain={[0, 150]} />
						<Radar
							name="Leads"
							dataKey="leads"
							stroke="#8884d8"
							fill="#8884d8"
							fillOpacity={0.6}
						/>
						<Radar
							name="Closed leads"
							dataKey="closedLeads"
							stroke="#82ca9d"
							fill="#82ca9d"
							fillOpacity={0.6}
							strokeWidth={1}
						/>
						<Legend />
					</RadarChart>
				</ResponsiveContainer>
			</div>

			<div className="lead-source-key">
				{data.map((item, index) => (
					<div key={index} className="lead-source-key-container">
						<div className="key-info">
							<div className="h-lead">
								<h6>
									{item.platform}
									{" : "}
								</h6>
							</div>

							<div className="p-lead">
								<p>
									Leads: <span>{item.leads}</span>{" "}
								</p>
							</div>

							<div className="p-lead ">
								<p>
									Closed Leads:{" "}
									<span>{item.closedLeads}</span>{" "}
								</p>
							</div>
						</div>

						<div className="key-line" />
					</div>
				))}
			</div>
		</div>
	);
};

export default LeadSource;
