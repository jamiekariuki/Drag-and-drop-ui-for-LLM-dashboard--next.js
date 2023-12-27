import { TextArea2 } from "@/components/styled components/inputs/inputs";
import SelectOption from "@/components/styled components/inputs/select.option";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";

const LeadExtractionPrompts = () => {
	const {
		leadsField,
		setLeadsField,
		leadsFieldLength,
		leadsSaveDestination,
		setleadsSaveDestination,
	} = useNodeAiContext();

	const savingList = [
		"google sheets",
		"invetory table",
		"google docs",
		"google drive as txt",
	];

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>Lead fields</h6>
					<Tooltip
						tip={
							<p>
								This field allows users to specify the lead
								information fields that the AI should extract
								during customer conversations. Users can input
								details such as name, email, phone number,
								preferences, or any other specific lead
								information categories they intend the AI to
								extract. Providing these details assists the AI
								in identifying, extracting, and organizing
								pertinent lead information during customer
								interactions for improved follow-ups or
								personalized engagement.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<TextArea2
						error={
							leadsField.replace(/\s/g, "").length >=
							leadsFieldLength
						}
						label={
							"Enter Leads you might want to collect from user eg. email, phoneNumber, adress..."
						}
						id={"chatbot-prompt"}
						value={leadsField}
						inputHeight={"60px"}
						changeValue={(e) => {
							setLeadsField(e);
						}}
					/>
					<p
						style={{
							color:
								leadsField.replace(/\s/g, "").length >=
									leadsFieldLength && "rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{leadsField.replace(/\s/g, "").length}/
						{leadsFieldLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Save Destination</h6>
					<Tooltip
						tip={
							<p>
								This field designates the destination where the
								AI will store or save the extracted lead
								information. Users need to ensure that they have
								connected the specified plugin or destination to
								enable seamless storage of lead details.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<SelectOption
						label={"Save destination"}
						list={savingList}
						value={leadsSaveDestination}
						changeValue={(e) => {
							setleadsSaveDestination(e);
						}}
					/>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
		</div>
	);
};

export default LeadExtractionPrompts;
