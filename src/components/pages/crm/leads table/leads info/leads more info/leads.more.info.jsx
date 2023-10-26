"use client";
import React from "react";
import "./leads.more.info.scss";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SourceIcon from "@mui/icons-material/Source";
import ArticleIcon from "@mui/icons-material/Article";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["rgba(31, 197, 31, 0.891)", "rgba(197, 31, 31, 0.891)"];

const LeadsMoreInfo = ({ userData }) => {
	const data = [
		{ name: "Propapiblity of closing a deal", value: userData.probability },
		{
			name: "Propapiblity of loosing this lead",
			value: 100 - userData.probability,
		},
	];

	return (
		<div className="leads-more-info">
			<div className="leads-more-info-profile">
				<div className="lead-profile-wrapper">
					<div className="lead-profile-container">
						<Image
							className="lead-profile-pic"
							src={userData.profilePicture}
							alt="avatar"
							fill={true}
						/>
					</div>
				</div>

				<div className="leads-profile-info">
					<div className="lead-name">
						<p>{userData.type}</p>
						<h2>{userData.name}</h2>
					</div>
					<div className="lead-information">
						<CallIcon className="lead-info-icon" />
						<h6>Phone:</h6>
						<p>{userData.contact}</p>
					</div>
					<div className="lead-information">
						<EmailIcon className="lead-info-icon" />
						<h6>Email:</h6>
						<p>{userData.email}</p>
					</div>
					<div className="lead-information">
						<CheckCircleIcon className="lead-info-icon" />
						<h6>Lead status:</h6>
						<p>{userData.status}</p>
					</div>
					<div className="lead-information">
						<ContactSupportIcon className="lead-info-icon" />
						<h6>Contacted:</h6>
						<p>{userData.contacted}</p>
					</div>
					<div className="lead-information">
						<SourceIcon className="lead-info-icon" />
						<h6>Source:</h6>
						<p>{userData.source}</p>
					</div>
					<div className="lead-information">
						<ArticleIcon className="lead-info-icon" />
						<h6>Industry:</h6>
						<p>{userData.industry}</p>
					</div>

					<div className="lead-information">
						<LanguageIcon className="lead-info-icon" />
						<h6>Website:</h6>
						<p>{userData.website}</p>
					</div>
					<div className="lead-information">
						<CalendarMonthIcon className="lead-info-icon" />
						<h6>Date Added:</h6>
						<p>{Date.now()}</p>
					</div>
				</div>
			</div>

			<div className="leads-summary">
				<h4>Lead summary</h4>

				<div className="lead-summary-container">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. A corporis natus impedit labore voluptates quod,
						suscipit voluptatum ducimus laboriosam? Aut, non
						asperiores eaque quo eius temporibus eum nisi eveniet
						molestiae. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Commodi reprehenderit amet ut
						doloribus consectetur sequi molestiae architecto nihil
						natus vero repellat nostrum corporis ipsam rerum eum
						assumenda, quis fugiat earum?
					</p>
				</div>
			</div>

			<div className="leads-stats">
				<h4>Lead stats</h4>

				<div className="leads-stats-container">
					<div className="leads-stats-chart">
						<ResponsiveContainer height="99%" width="99%">
							<PieChart>
								<Pie
									data={data}
									innerRadius="75%"
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
					<div className="leads-stats-keys">
						<div className="leads-stats-keys-wrapper">
							<div className="key-container">
								<div
									className="key-color"
									style={{ background: COLORS[0] }}
								/>
								<p>
									{data[0].name} {": "} {data[0].value}%
								</p>
							</div>
							<div className="key-container">
								<div
									className="key-color"
									style={{ background: COLORS[1] }}
								/>
								<p>
									{data[1].name} {": "} {data[1].value}%
								</p>
							</div>
						</div>

						<div className="leads-stats-reason">
							<h6>Reason:</h6>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Officia, rem, nemo,
								consectetur iure vitae commodi neque obcaecati
								perspiciatis ullam nostrum debitis nam? Fuga
								minus dicta nostrum quia voluptas perspiciatis
								totam!
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeadsMoreInfo;
