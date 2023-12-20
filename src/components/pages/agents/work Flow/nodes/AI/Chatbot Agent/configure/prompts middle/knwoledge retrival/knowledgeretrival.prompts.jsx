import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import Switch from "@mui/material/Switch";
import { Inputs2 } from "@/components/styled components/inputs/inputs";

const KnowledgeRetrivalPrompts = () => {
	const {
		internalRetrival,
		setInternalRetrival,
		fqa,
		setFqa,
		fqaLength,
		products,
		setProducts,
		productsLength,
		customTitle,
		setCustomTitle,
		customTitleLength,
		customPrompt,
		setCustomPrompt,
		customPromptLength,
	} = useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>Internal Knowledge retrival</h6>
					<Tooltip tip={<p>sometimes user might refuse</p>} />
				</div>
				<div className="switch-input">
					<Switch
						checked={internalRetrival}
						onChange={(e) => setInternalRetrival(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable Internal knowledge retrival </p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}

			{internalRetrival && (
				<div className="prompt-container">
					<div className="header">
						<h6>FQA</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={fqa.replace(/\s/g, "").length >= fqaLength}
							label={
								"Enter frequent as questions eg Q: what is your opening time A: 8:00 AM daily ..."
							}
							id={"fqaprompt"}
							value={fqa}
							inputHeight={"150px"}
							changeValue={(e) => {
								setFqa(e);
							}}
						/>
						<p
							style={{
								color:
									fqa.replace(/\s/g, "").length >=
										fqaLength && "rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{fqa.replace(/\s/g, "").length}/{fqaLength}
						</p>
					</div>
				</div>
			)}
			{/*-------------------------------------------------------- */}

			{internalRetrival && (
				<div className="prompt-container">
					<div className="header">
						<h6>Products</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								products.replace(/\s/g, "").length >=
								productsLength
							}
							label={
								"Enter your products in JSON format eg.  ..."
							}
							id={"productsprompt"}
							value={products}
							inputHeight={"150px"}
							changeValue={(e) => {
								setProducts(e);
							}}
						/>
						<p
							style={{
								color:
									products.replace(/\s/g, "").length >=
										productsLength &&
									"rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{products.replace(/\s/g, "").length}/
							{productsLength}
						</p>
					</div>
				</div>
			)}

			{/*-------------------------------------------------------- */}
			{internalRetrival && (
				<div className="prompt-container">
					<div className="header">
						<h6>Custom Knowledge Title</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<Inputs2
							error={
								customTitle.replace(/\s/g, "").length >=
								customTitleLength
							}
							type={"text"}
							label={"Schedule title"}
							id={"customtitle"}
							value={customTitle}
							changeValue={(e) => {
								setCustomTitle(e);
							}}
						/>
						<p
							style={{
								color:
									customTitle.replace(/\s/g, "").length >=
										customTitleLength &&
									"rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{customTitle.replace(/\s/g, "").length}/
							{customTitleLength}
						</p>
					</div>
				</div>
			)}

			{/*-------------------------------------------------------- */}

			{internalRetrival && (
				<div className="prompt-container">
					<div className="header">
						<h6>Custom knowledge</h6>
						<Tooltip tip={<p>tip</p>} />
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								customPrompt.replace(/\s/g, "").length >=
								customPromptLength
							}
							label={
								"Enter frequent as questions eg Q: what is your opening time A: 8:00 AM daily ..."
							}
							id={"customKnowledgePrompt"}
							value={customPrompt}
							inputHeight={"150px"}
							changeValue={(e) => {
								setCustomPrompt(e);
							}}
						/>
						<p
							style={{
								color:
									customPrompt.replace(/\s/g, "").length >=
										customPromptLength &&
									"rgba(255, 0, 0, 0.7)",
								fontSize: "11px",
							}}
						>
							{customPrompt.replace(/\s/g, "").length}/
							{customPromptLength}
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default KnowledgeRetrivalPrompts;
