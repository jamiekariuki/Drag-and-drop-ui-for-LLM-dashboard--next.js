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
					<Tooltip
						tip={
							<p>
								Enabling this feature allows the AI to conduct
								internal knowledge retrieval. Users can employ
								this functionality when they have limited
								domain-specific information. They can input
								prompts or queries directly into the AI system
								instead of relying on external sources. <br />{" "}
								Please note that this method might lead to exta
								credits being used.
							</p>
						}
					/>
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
						<h6>FAQ</h6>
						<Tooltip
							tip={
								<p>
									This input field enables users to create and
									input their own Frequently Asked Questions
									(FAQ) into the system. Users can compile a
									list of commonly asked questions along with
									corresponding answers. The AI utilizes this
									user-generated FAQ to provide accurate
									responses to inquiries based on the
									information provided by the user
								</p>
							}
						/>
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
						<Tooltip
							tip={
								<p>
									This input feature allows users to input or
									integrate their products or catalog into the
									AI system. Users can input details,
									descriptions, and categorizations of their
									products, enabling the AI to access and
									utilize this catalog when responding to
									queries or requests for specific products.
								</p>
							}
						/>
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								products.replace(/\s/g, "").length >=
								productsLength
							}
							/* label={
								'Enter your products in JSON format eg.  {
									"products": [
									  {
										"id": "1",
										"name": "Product A",
										"category": "Electronics",
										"description": "Description of Product A",
										"price": "$99.99"
									  },
									  {
										"id": "2",
										"name": "Product B",
										"category": "Clothing",
										"description": "Description of Product B",
										"price": "$49.99"
									  },
									  {
										"id": "3",
										"name": "Product C",
										"category": "Home & Kitchen",
										"description": "Description of Product C",
										"price": "$129.99"
									  }
									]
								  }
								  '
							} */

							label={`
  							Enter your products in JSON format e.g.
								\
								{\n\
									"products": [\n\
									{\n\
										"id": "1",\n\
										"name": "Product A",\n\
										"category": "Electronics",\n\
										"description": "Description of Product A",\n\
										"price": "$99.99"\n\
									},\n\
									{\n\
										"id": "2",\n\
										"name": "Product B",\n\
										"category": "Clothing",\n\
										"description": "Description of Product B",\n\
										"price": "$49.99"\n\
									},\n\
									{\n\
										"id": "3",\n\
										"name": "Product C",\n\
										"category": "Home & Kitchen",\n\
										"description": "Description of Product C",\n\
										"price": "$129.99"\n\
									}\n\
									]\n\
								`}
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
						<Tooltip
							tip={
								<p>
									This input field enables users to assign a
									custom title or label to specific knowledge
									entries or information. Users can input
									titles relevant to the knowledge or
									information they intend to provide or
									reference within the system.
								</p>
							}
						/>
					</div>
					<div className="text-input">
						<Inputs2
							error={
								customTitle.replace(/\s/g, "").length >=
								customTitleLength
							}
							type={"text"}
							label={"Custom title"}
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
						<Tooltip
							tip={
								<p>
									This input field allows users to input or
									define custom knowledge entries. Users can
									provide specific information, data,
									instructions, or insights they wish to
									incorporate into the system's knowledge
									base.
								</p>
							}
						/>
					</div>
					<div className="text-input">
						<TextArea2
							node={true}
							error={
								customPrompt.replace(/\s/g, "").length >=
								customPromptLength
							}
							label={"Enter custom knowledge ..."}
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
