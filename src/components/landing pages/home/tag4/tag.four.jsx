import React from "react";
import "./tag.four.scss";
import StyleIcon from "@mui/icons-material/Style";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ChatIcon from "@mui/icons-material/Chat";
import EventNoteIcon from "@mui/icons-material/EventNote";

const TagFour = () => {
	const list = [
		{
			icon: <StyleIcon className="tag-4-icon" />,
			title: "title",
			paragraph:
				"Quam delectus quae ducimus aliquam sint beatae deserunt officia impedit qui odi",
			color: "red",
		},
		{
			icon: <AssessmentIcon className="tag-4-icon" />,
			title: "title",
			paragraph:
				"Lorem  elit.Quam delectus quae ducimus aliquam sint beatae deserunt officia impedit qui odi",
			color: "blue",
		},
		{
			icon: <ChatIcon className="tag-4-icon" />,
			title: "title",
			paragraph:
				"Lorem i elit.Quam delectus quae ducimus aliquam sint beatae deserunt officia impedit qui odi",
			color: "green",
		},
		{
			icon: <EventNoteIcon className="tag-4-icon" />,
			title: "title",
			paragraph:
				"Lorem iectu  dgfdh dfgdgdf sint beatae  delectus quae ducimus a deserunt officia impedit qui odi",
			color: "yellow",
		},
	];

	return (
		<div className="tag-4">
			{list.map((item, index) => (
				<div className="tag-4-box-container" key={index}>
					{/* <div className="icon-backdrop" /> */}
					<div className="tag-4-container">
						<div className="icon-container">{item.icon}</div>
						<h1>{item.title}</h1>
						<p>{item.paragraph}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default TagFour;
