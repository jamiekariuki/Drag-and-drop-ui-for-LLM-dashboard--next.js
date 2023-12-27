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
					<Tooltip
						node={false}
						tip={
							<p>
								Enabling this feature empowers the AI to
								generate images. Users can activate this
								functionality to allow the AI to create visual
								content, illustrations, or graphics as needed.
							</p>
						}
					/>
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
						<Tooltip
							tip={
								<p>
									This optional field allows users to provide
									specific instructions or prompts to guide
									the AI in generating images in a preferred
									or customized manner. Users can input
									details or preferences regarding image
									content, style, format, or any specific
									requirements they wish the AI to consider
									while generating images.
								</p>
							}
						/>
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
							id={"generateimageprompt2"}
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
					<Tooltip
						node={false}
						tip={
							<p>
								Enabling this feature allows the AI to process
								images, enabling it to view and interpret visual
								content. With this capability, the AI can
								analyze and derive insights from images,
								facilitating tasks such as image recognition,
								analysis, or interpretation. This functionality
								enhances the AI's ability to comprehend visual
								data, supporting various image-based tasks or
								applications within the platform.
							</p>
						}
					/>
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
						<Tooltip
							tip={
								<p>
									This input field allows users to provide
									specific instructions or prompts to guide
									the AI in its image processing tasks. Users
									can input details or preferences regarding
									image analysis, interpretation methods,
									desired insights, or any specific
									requirements they want the AI to consider
									while processing images. This guidance
									assists the AI in conducting image-related
									tasks according to user-defined parameters
									or objectives.
								</p>
							}
						/>
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
							id={"processimageprompt2"}
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
