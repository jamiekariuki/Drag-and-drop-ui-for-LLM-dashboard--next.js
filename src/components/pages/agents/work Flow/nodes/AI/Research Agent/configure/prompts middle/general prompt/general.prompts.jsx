import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import { aiSystemPrompt } from "../../../../ai.tooltip";

const GeneralPrompts = () => {
	const {
		systemPrompt,
		setSystemPrompt,
		systemPromptLength,
		format,
		setFormat,
		formatLength,
	} = useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>System prompt</h6>
					<Tooltip tip={aiSystemPrompt} />
				</div>
				<div className="text-input">
					<TextArea2
						error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						}
						node={true}
						label={"Enter prompt..."}
						id={"research-prompt"}
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
			<div className="prompt-container">
				<div className="header">
					<h6>Format</h6>
					<Tooltip
						tip={
							<p>
								This input field allows users to specify the
								desired format for a research report. Users can
								input instructions or guidelines regarding the
								structure, layout, or specific formatting
								requirements they prefer for research reports
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<TextArea2
						error={format.replace(/\s/g, "").length >= formatLength}
						node={true}
						label={
							"Enter a format you would like eg. Report that contains heading, intro, body , conclusion, refrencess(links)..."
						}
						id={"formating"}
						value={format}
						inputHeight={"150px"}
						changeValue={(e) => {
							setFormat(e);
						}}
					/>
					<p
						style={{
							color:
								format.replace(/\s/g, "").length >=
									formatLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{format.replace(/\s/g, "").length}/{formatLength}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GeneralPrompts;
