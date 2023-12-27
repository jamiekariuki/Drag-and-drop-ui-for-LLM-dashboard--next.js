import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import { aiSystemPrompt } from "../../../../ai.tooltip";

const GeneralPrompts = () => {
	const { systemPrompt, setSystemPrompt, systemPromptLength } =
		useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>System prompt</h6>
					<Tooltip node={false} tip={aiSystemPrompt} />
				</div>
				<div className="text-input">
					<TextArea2
						error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						}
						node={true}
						label={"Enter prompt..."}
						id={"virtual-prompt"}
						value={systemPrompt}
						inputHeight={"150px"}
						changeValue={(e) => {
							setSystemPrompt(e);
						}}
					/>
					<p
						style={{
							color:
								systemPrompt.replace(/\s/g, "").length >=
									systemPromptLength &&
								"rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{systemPrompt.replace(/\s/g, "").length}/
						{systemPromptLength}
					</p>
				</div>
			</div>

			{/*-------------------------------------------------------- */}
		</div>
	);
};

export default GeneralPrompts;
