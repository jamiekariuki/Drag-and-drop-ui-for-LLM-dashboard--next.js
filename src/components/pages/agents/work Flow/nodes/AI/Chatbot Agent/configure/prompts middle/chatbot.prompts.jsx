import React from "react";
import "./chatbot.prompts.scss";
import GeneralPrompts from "./general prompt/general.prompts";
import TimeschedulePrompts from "./time schedule prompts/timeschedule.prompts";
import LeadExtractionPrompts from "./lead extraction/leadextraction.prompts";
import SalesAndMarketingPrompts from "./sales & marketing/salesandmarketing.prompts";
import MultimodalPrompts from "./multimodal/multimodal.prompts";
import KnowledgeRetrivalPrompts from "./knwoledge retrival/knowledgeretrival.prompts";

const ChatbotPrompts = ({ nav }) => {
	return (
		<div className="chatbot-prompts ">
			{nav === "General prompts" && <GeneralPrompts />}
			{nav === "Time schedule" && <TimeschedulePrompts />}
			{nav === "Lead extraction" && <LeadExtractionPrompts />}
			{nav === "Sales & marketing" && <SalesAndMarketingPrompts />}
			{nav === "Multimodal" && <MultimodalPrompts />}
			{nav === "Knowledge retrival" && <KnowledgeRetrivalPrompts />}
		</div>
	);
};

export default ChatbotPrompts;
