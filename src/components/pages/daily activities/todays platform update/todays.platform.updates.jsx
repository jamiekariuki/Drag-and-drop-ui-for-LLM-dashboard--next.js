import React from "react";
import "./todays.platform.updates.scss";
import Image from "next/image";

const TodaysPlatformUpdates = () => {
	const platformUpdates = [
		{
			image: "https://i.postimg.cc/VLWZsry1/These-Are-the-Most-Ridiculously-Expensive-Perfumes-in-the-World.jpg",
			platform: ["instagram", "twitter", "facebook"],
			title: "Product Announcement",
			action: "Post",
			time: "10:00am",
		},
		{
			image: "https://i.postimg.cc/90VzcNTW/Play-Station-5-Disc-Version.jpg",
			platform: ["linkedin", "twitter"],
			title: "Product Announcement",
			action: "Post",
			time: "11:15am",
		},

		{
			image: "https://i.postimg.cc/Pxxc7122/Bosslike.jpg",
			platform: ["twitter"],
			title: "Morning Thoughts",
			action: "Tweet",
			time: "1:30pm",
		},
		{
			image: "https://i.postimg.cc/7YLx8QZn/young-businesswoman-working-with-statistics-charts-computer-monitor-analyzing-company-data-paperwork.jpg",
			platform: ["linkedin"],
			title: "Business Insights",
			action: "Post",
			time: "2:45pm",
		},
		{
			image: "https://i.postimg.cc/LXn2mV93/jordans.jpg",
			platform: ["instagram", "facebook"],
			title: "Product Showcase",
			action: "Post",
			time: "3:15pm",
		},

		{
			image: "https://i.postimg.cc/YqfL9YXY/escrow.jpg",
			platform: ["facebook"],
			title: "Customer Testimonial",
			action: "Post",
			time: "5:00pm",
		},

		{
			image: "https://i.postimg.cc/65YRcCdw/service.jpg",
			platform: ["linkedin", "twitter"],
			title: "Industry News",
			action: "Post",
			time: "4:30pm",
		},
	];

	return (
		<div className="platform-updates">
			<div className="platform-updates-title">
				<h4>Todays platform updates</h4>
			</div>
			<div className="platform-updates-container">
				{platformUpdates.map((update, index) => (
					<div key={index} className="platform-updates-wrapper">
						<div className="update-time">
							<p>
								<span>{update.time}</span>
							</p>
						</div>

						<div className="update-tag">
							<div className="update-line" />
							<div className="update-line2" />
							<div className="update-circle" />
						</div>

						<div className="update-image-container">
							<Image
								src={update.image}
								alt="post"
								className="update-image"
								fill={true}
							/>
						</div>

						<div className="update-info">
							<h6>{update.title}</h6>
							<p>{update.platform.join(", ")}</p>

							<p className="update-action">
								Action: <span>{update.action}</span>
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="plaform-updates-footer">
				<p>see more</p>
			</div>
		</div>
	);
};

export default TodaysPlatformUpdates;
