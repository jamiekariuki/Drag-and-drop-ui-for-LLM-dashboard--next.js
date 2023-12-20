import React from "react";
import "./chatbot.nav.scss";
import { useNodeAiContext } from "@/context/nodeAiContext";

const ChatbotNav = ({ setNav, nav }) => {
	const { abilities } = useNodeAiContext();

	return (
		<div className="chatbot-nav">
			<button onClick={() => setNav("General prompts")}>
				<p style={{ color: nav === "General prompts" && "#b12f9c" }}>
					General prompts
				</p>
			</button>
			{/*--------------------------------------------------------------------- */}
			<button
				disabled={!abilities.timeSchedule}
				onClick={() => setNav("Time schedule")}
			>
				<p style={{ color: nav === "Time schedule" && "#b12f9c" }}>
					Time schedule
				</p>
			</button>
			{/*--------------------------------------------------------------------- */}
			<button
				disabled={!abilities.leadExtraction}
				onClick={() => setNav("Lead extraction")}
			>
				<p style={{ color: nav === "Lead extraction" && "#b12f9c" }}>
					Lead extraction
				</p>
			</button>
			{/*--------------------------------------------------------------------- */}
			<button
				disabled={!abilities.salesAndMarketing}
				onClick={() => setNav("Sales & marketing")}
			>
				<p style={{ color: nav === "Sales & marketing" && "#b12f9c" }}>
					Sales & marketing
				</p>
			</button>
			{/*--------------------------------------------------------------------- */}
			<button
				disabled={!abilities.multiModal}
				onClick={() => setNav("Multimodal")}
			>
				<p style={{ color: nav === "Multimodal" && "#b12f9c" }}>
					Multimodal
				</p>
			</button>
			{/*--------------------------------------------------------------------- */}
			<button onClick={() => setNav("Knowledge retrival")}>
				<p
					style={{
						color: nav === "Knowledge retrival" && "#b12f9c",
					}}
				>
					Knowledge retrival
				</p>
			</button>
		</div>
	);
};

export default ChatbotNav;
