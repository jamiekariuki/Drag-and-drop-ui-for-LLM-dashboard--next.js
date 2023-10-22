import React from "react";
import "./recent.leads.scss";

const RecentLeads = () => {
	const LeadData = [
		{
			name: "Joyne Wayne",
			platform: "Email",
		},
		{
			name: "Linda Smith",
			platform: "LinkedIn",
		},
		{
			name: "Michael Johnson",
			platform: "Facebook",
		},
		{
			name: "Emily White",
			platform: "Twitter",
		},
		{
			name: "John Doe",
			platform: "Instagram",
		},
		{
			name: "Sarah Brown",
			platform: "WhatsApp",
		},
		{
			name: "David Wilson",
			platform: "Website",
		},
		{
			name: "Sophia Anderson",
			platform: "Event",
		},
		{
			name: "Daniel Lee",
			platform: "Email",
		},
		{
			name: "Olivia Taylor",
			platform: "google",
		},
		{
			name: "William Clark",
			platform: "LinkedIn",
		},
	];

	return (
		<div className="recent-leads">
			<div className="recent-leads-title">
				<h4>Todays events</h4>
			</div>

			<div className="recent-leads-container">
				{LeadData.map((lead, index) => (
					<div key={index} className="recent-leads-wrapper">
						<h6>{lead.name}</h6>

						<p>{lead.platform}</p>
					</div>
				))}
			</div>
			<div className="recent-leads-footer">
				<p>See all</p>
			</div>
		</div>
	);
};

export default RecentLeads;
