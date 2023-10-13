import React from "react";
import "./todays.platform.activities.scss";

const TodaysPlatformActivities = () => {
	const platfromActivities = [
		{
			name: "@john_wayne",
			action: "commented",
			date: "9:00am",
			platform: "Instagram",
		},
		{
			name: "@judith_lilian",
			action: "sent a message",
			date: "9:00am",
			platform: "Facebook",
		},
		{
			name: "sacco safe",
			action: "sent an email attachment",
			date: "4:45pm",
			platform: "Gmail",
		},
		{
			name: "@david_smith",
			action: "shared your update",
			date: "11:30am",
			platform: "Twitter",
		},
		{
			name: "@lisa_jones",
			action: "commented",
			date: "12:45pm",
			platform: "LinkedIn",
		},
		{
			name: "@peter_parker",
			action: "replied to your comment",
			date: "1:00pm",
			platform: "Facebook",
		},
		{
			name: "@sophia_grace",
			action: "retweeted your tweet",
			date: "2:15pm",
			platform: "Twitter",
		},

		{
			name: "mc_coorparates",
			action: "sent an email",
			date: "4:45pm",
			platform: "Gmail",
		},
		{
			name: "@oliver_queen",
			action: "sent a message",
			date: "5:00pm",
			platform: "Facebook",
		},
	];

	return (
		<div className="todays-platform-activities">
			<div className="todays-platfrom-title">
				<h4>Todays events</h4>
			</div>

			<div className="todays-platform-container">
				{platfromActivities.map((activity, index) => (
					<div key={index} className="todays-platfrom-wrapper">
						<div className="platfrom-wrapper">
							<h6>{activity.name}</h6>
							<p>{activity.action}</p>
							<p className="paltfrom-time">At: {activity.date}</p>
						</div>

						<div className="platfrom-name">
							<h4>{activity.platform}</h4>
						</div>
					</div>
				))}
			</div>
			<div className="todays-platform-footer">
				<p>See all</p>
			</div>
		</div>
	);
};

export default TodaysPlatformActivities;
