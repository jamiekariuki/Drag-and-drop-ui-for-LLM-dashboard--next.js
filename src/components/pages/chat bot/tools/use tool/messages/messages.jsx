import React from "react";
import "./messages.scss";
import { BsCpuFill } from "react-icons/bs";
import Image from "next/image";

const Messages = () => {
	const conversationData = [
		{ name: "You", message: "Hi there! I need help with my project." },
		{
			name: "AI",
			message: `Absolutely, I'd be happy to help you with your project. Could you provide more information about the specific issues or challenges you're facing? This will allow me to better understand your requirements and provide more tailored assistance.`,
		},
		{
			name: "You",
			message: `Sure, I'm encountering some difficulties with implementing a feature that involves complex data processing and rendering. The code seems to run into performance issues when handling large datasets.`,
		},
		{
			name: "AI",
			message: `Ah, I see. When working with complex data processing and rendering tasks, optimizing performance is crucial. One approach to consider is optimizing the algorithms used for data processing. By employing more efficient algorithms and data structures, you can potentially improve the processing speed and reduce resource usage.`,
		},
		{
			name: "AI",
			message: `Additionally, optimizing the rendering process by implementing virtualization techniques can significantly enhance performance when dealing with large datasets. Virtualization involves rendering only the visible portions of data, thereby reducing the rendering overhead.`,
		},
		{
			name: "AI",
			message: `Moreover, analyzing and profiling your codebase using performance monitoring tools can identify bottlenecks and areas for improvement. This proactive approach enables targeted optimizations to enhance the overall performance of your application.`,
		},
		{
			name: "You",
			message: `Thank you for the detailed insights! I'll explore these suggestions and implement the optimizations.`,
		},
		{
			name: "AI",
			message: `You're welcome! Should you encounter any further challenges or need additional guidance during the implementation, feel free to reach out. I'm here to assist you.`,
		},
	];

	const loading = true;
	return (
		<div className="messages">
			{conversationData.map((item, index) => (
				<div
					key={index}
					className={
						item.name !== "AI" ? "human-message message" : "message"
					}
				>
					{item.name === "AI" ? (
						<BsCpuFill className="ai-icon" />
					) : (
						<div className="message-avatar">
							<Image
								alt="map background"
								src="https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg"
								fill={true}
								className="m-avatar"
								quality={20}
							/>
						</div>
					)}
					<div className="message-container">
						<h3>{item.name}</h3>
						<p>{item.message}</p>
					</div>
				</div>
			))}

			{loading && (
				<div className="loading">
					<div class="load">
						<div class="progress"></div>
						<div class="progress"></div>
						<div class="progress"></div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Messages;
