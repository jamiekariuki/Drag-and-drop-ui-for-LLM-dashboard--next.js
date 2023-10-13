"use client";
import React, { useEffect, useState } from "react";
import "./todays.tasks.scss";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CachedIcon from "@mui/icons-material/Cached";

const TodaysTasks = () => {
	const [anime, setAnime] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setAnime(true);
		}, 30);

		return () => clearTimeout(timer);
	}, []);

	const taskData = [
		{
			title: "Drafting emails",
			description:
				"Working on drafting promotional emails for the upcoming campaign.",
			status: "In progress",
			progress: "23%",
			agents: ["Virtual Assistant Agent"],
		},
		{
			title: "Market Research",
			description:
				"Conducting market research to identify new target audiences and leads.",
			status: "Completed",
			progress: "100%",
			agents: ["Research Agent", "Marketing Agents"],
		},
		{
			title: "Financial Analysis",
			description: "Analyzing financial data and generating reports.",
			status: "In progress",
			progress: "46%",
			agents: ["Accounting Agent"],
		},
		{
			title: "Social Media Management",
			description:
				"Scheduling posts and engaging with followers on social media.",
			status: "In progress",
			progress: "75%",
			agents: ["Virtual Assistant Agent", "Marketing Agent"],
		},
		{
			title: "Customer Support",
			description:
				"Handling customer inquiries and resolving support tickets.",
			status: "In progress",
			progress: "56%",
			agents: ["Chat Bot Agent"],
		},
		{
			title: "Data Analysis",
			description: "Analyzing user data to identify trends and insights.",
			status: "In progress",
			progress: "9%",
			agents: ["AI Data Analyst"],
		},
		{
			title: "Meeting Scheduling",
			description: "Assisting with scheduling meetings and appointments.",
			status: "Completed",
			progress: "100%",
			agents: ["Virtual Assistant Agent"],
		},
		{
			title: "Content Creation",
			description: "Generating creative content for marketing campaigns.",
			status: "In progress",
			progress: "89%",
			agents: ["Content Creation AI", "Marketing Agent"],
		},
	];

	return (
		<div className="todays-tasks">
			<div className="todays-tasks-title">
				<h4>Today's tasks</h4>
			</div>
			<div className="todays-tasks-wrapper">
				{taskData.map((task, index) => (
					<div key={index} className="todays-tasks-container">
						<h6>{task.title}</h6>
						<div className="task-description-container">
							<p>{task.description}</p>
						</div>

						<div className="task-status-container ">
							<h5>
								Status:{" "}
								<span
									style={{
										color:
											parseInt(task.progress) < 25
												? "rgba(194, 30, 30, 0.731)"
												: parseInt(task.progress) < 50
												? "rgb(184, 31, 161)"
												: parseInt(task.progress) < 75
												? "rgba(33, 33, 168, 0.731)"
												: parseInt(task.progress) < 100
												? "rgb(196, 182, 25)"
												: "rgb(55, 164, 27)",
									}}
								>
									{task.status}
								</span>
							</h5>
							{task.status === "Completed" ? (
								<CheckCircleIcon
									className="task-icon-completed"
									style={{
										color:
											parseInt(task.progress) < 25
												? "rgba(194, 30, 30, 0.731)"
												: parseInt(task.progress) < 50
												? "rgb(184, 31, 161)"
												: parseInt(task.progress) < 75
												? "rgba(33, 33, 168, 0.731)"
												: parseInt(task.progress) < 100
												? "rgb(196, 182, 25)"
												: "rgb(55, 164, 27)",
									}}
								/>
							) : (
								<CachedIcon
									className="task-icon"
									style={{
										color:
											parseInt(task.progress) < 25
												? "rgba(194, 30, 30, 0.731)"
												: parseInt(task.progress) < 50
												? "rgb(184, 31, 161)"
												: parseInt(task.progress) < 75
												? "rgba(33, 33, 168, 0.731)"
												: parseInt(task.progress) < 100
												? "rgb(196, 182, 25)"
												: "rgb(55, 164, 27)",
									}}
								/>
							)}
						</div>

						<div className="task-progress-container">
							<div className="task-progress">
								<div
									className="task-progress-bar"
									style={{
										width: anime ? task.progress : "0%",
										background:
											parseInt(task.progress) < 25
												? "rgba(194, 30, 30, 0.731)"
												: parseInt(task.progress) < 50
												? "rgb(184, 31, 161)"
												: parseInt(task.progress) < 75
												? "rgba(33, 33, 168, 0.731)"
												: parseInt(task.progress) < 100
												? "rgb(196, 182, 25)"
												: "rgb(55, 164, 27)",
									}}
								/>
							</div>
							<p> {task.progress}</p>
						</div>

						<div className="task-agent-container">
							<p>
								Assigned Agents:{" "}
								<span> {task.agents.join(", ")} </span>
							</p>
						</div>
					</div>
				))}
			</div>
			<button className="todays-tasks-footer">
				<p>See Task Queues</p>
			</button>
		</div>
	);
};

export default TodaysTasks;
