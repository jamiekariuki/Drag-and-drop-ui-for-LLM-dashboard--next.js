import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import Switch from "@mui/material/Switch";

const MultimodalPrompts = () => {
	const {
		generateImage,
		setGenerateImage,
		generateImagePrompt,
		setGenerateImagePrompt,
		generateImagePromptLength,
		processImage,
		setProcessImage,
		processImagePrompt,
		setProcessImagePrompt,
		processImagePromptLength,
	} = useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>Generate Image</h6>
					<Tooltip tip={<p>sometimes user might refuse</p>} />
				</div>
				<div className="switch-input">
					<Switch
						checked={generateImage}
						onChange={(e) => setGenerateImage(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to Generate images </p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}

			{generateImage && (
				<div className="prompt-container">
					<div className="header">
						<h6>Image generation system prompt</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								generateImagePrompt.replace(/\s/g, "").length >=
								generateImagePromptLength
							}
							label={
								"Enter system prompt eg. generate all images in black and white..."
							}
							id={"generateimageprompt"}
							value={generateImagePrompt}
							inputHeight={"150px"}
							changeValue={(e) => {
								setGenerateImagePrompt(e);
							}}
						/>
						<p
							style={{
								color:
									generateImagePrompt.replace(/\s/g, "")
										.length >= generateImagePromptLength &&
									"rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{generateImagePrompt.replace(/\s/g, "").length}/
							{generateImagePromptLength}
						</p>
					</div>
				</div>
			)}
			{/*-------------------------------------------------------- */}

			<div className="prompt-container">
				<div className="header">
					<h6>process Image</h6>
					<Tooltip tip={<p>sometimes user might refuse</p>} />
				</div>
				<div className="switch-input">
					<Switch
						checked={processImage}
						onChange={(e) => setProcessImage(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to process images </p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}

			{processImage && (
				<div className="prompt-container">
					<div className="header">
						<h6>Image processing system prompt</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								processImagePrompt.replace(/\s/g, "").length >=
								processImagePromptLength
							}
							label={
								"Enter system prompt eg. analyze photo and tell me how i can modify them..."
							}
							id={"processimageprompt"}
							value={processImagePrompt}
							inputHeight={"150px"}
							changeValue={(e) => {
								setProcessImagePrompt(e);
							}}
						/>
						<p
							style={{
								color:
									processImagePrompt.replace(/\s/g, "")
										.length >= processImagePromptLength &&
									"rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{processImagePrompt.replace(/\s/g, "").length}/
							{processImagePromptLength}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default MultimodalPrompts;
