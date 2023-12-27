import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import { aiSystemPrompt } from "../../../../ai.tooltip";

const GeneralPrompts = () => {
	const {
		systemPrompt,
		setSystemPrompt,
		systemPromptLength,
		companyName,
		setCompanyName,
		companyNameLength,
		companyInfo,
		setCompanyInfo,
		companyInfoLength,
		contact,
		setContact,
		contactLength,
		email,
		setEmail,
		emailLength,
		location,
		setLocation,
		locationLength,
		extraInfo,
		setExtraInfo,
		extraInfoLength,
	} = useNodeAiContext();

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
						id={"chatbot-prompt"}
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
					<h6>Business/Company name</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This field allows users to input the name of
								their business or company. Providing this
								information enables the AI to contextualize
								responses
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<Inputs2
						error={
							companyName.replace(/\s/g, "").length >=
							companyNameLength
						}
						type={"text"}
						label={"Business/Company name"}
						id={"businessname"}
						value={companyName}
						changeValue={(e) => {
							setCompanyName(e);
						}}
					/>
					<p
						style={{
							color:
								companyName.replace(/\s/g, "").length >=
									companyNameLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{companyName.replace(/\s/g, "").length}/
						{companyNameLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Business/Company information</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field gathers comprehensive details
								about the business or company. Users can input
								relevant information such as industry, address,
								size, services offered, and any other pertinent
								details. Furnishing this information assists the
								AI in grasping the context, enabling more
								accurate and customized responses or
								recommendations tailored to the business or
								company profile
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<TextArea2
						error={
							companyInfo.replace(/\s/g, "").length >=
							companyInfoLength
						}
						node={true}
						label={"Enter information..."}
						id={"company info"}
						value={companyInfo}
						inputHeight={"150px"}
						changeValue={(e) => {
							setCompanyInfo(e);
						}}
					/>
					<p
						style={{
							color:
								companyInfo.replace(/\s/g, "").length >=
									companyInfoLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{companyInfo.replace(/\s/g, "").length}/
						{companyInfoLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>contacts</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field allows users to input multiple
								contacts associated with the business or
								company.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<Inputs2
						error={
							contact.replace(/\s/g, "").length >= contactLength
						}
						type={"text"}
						label={"contacts eg. +245123456789 or +254987654321"}
						id={"businesscontact"}
						value={contact}
						changeValue={(e) => {
							setContact(e);
						}}
					/>
					<p
						style={{
							color:
								contact.replace(/\s/g, "").length >=
									contactLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{contact.replace(/\s/g, "").length}/{contactLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Emails</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field allows users to input multiple
								emails associated with the business or company.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<Inputs2
						error={email.replace(/\s/g, "").length >= emailLength}
						type={"text"}
						label={"Emails eg. john@gmail.com or jane@yahoo.com"}
						id={"businessemail"}
						value={email}
						changeValue={(e) => {
							setEmail(e);
						}}
					/>
					<p
						style={{
							color:
								email.replace(/\s/g, "").length >=
									emailLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{email.replace(/\s/g, "").length}/{emailLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Location</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field accepts a Google Maps URL
								pinpointing the location of the business or
								company.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<Inputs2
						error={
							location.replace(/\s/g, "").length >= locationLength
						}
						type={"text"}
						label={"google map location URL"}
						id={"businesslocation"}
						value={location}
						changeValue={(e) => {
							setLocation(e);
						}}
					/>
					<p
						style={{
							color:
								location.replace(/\s/g, "").length >=
									locationLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{location.replace(/\s/g, "").length}/{locationLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Extra information</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field serves as an open space for
								users to include supplementary details, such as
								social media links (e.g., LinkedIn, Twitter,
								etc.), additional notes, or any other relevant
								information pertaining to the business or
								company. Users can utilize this section to
								enrich the AI's understanding and access
								additional context for a more comprehensive
								overview of the enterprise.
							</p>
						}
					/>
				</div>

				<div className="text-input">
					<TextArea2
						error={
							extraInfo.replace(/\s/g, "").length >=
							extraInfoLength
						}
						node={true}
						label={
							"Enter extra information eg. your social links: instagram: @abcd , facebook: zxcvb, twitter: @12abcd"
						}
						id={"extra info"}
						value={extraInfo}
						inputHeight={"150px"}
						changeValue={(e) => {
							setExtraInfo(e);
						}}
					/>
					<p
						style={{
							color:
								extraInfo.replace(/\s/g, "").length >=
									extraInfoLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{extraInfo.replace(/\s/g, "").length}/{extraInfoLength}
					</p>
				</div>
			</div>
		</div>
	);
};

export default GeneralPrompts;
