import React from "react";
import "./virtual.prompts.scss";
import GeneralPrompts from "./general prompt/general.prompts";
import MultimodalPrompts from "./multimodal/multimodal.prompts";

const ResearchPrompts = ({ nav }) => {
	return (
		<div className="research-prompts ">
			{nav === "General prompts" && <GeneralPrompts />}
			{nav === "Multimodal" && <MultimodalPrompts />}
		</div>
	);
};

export default ResearchPrompts;
