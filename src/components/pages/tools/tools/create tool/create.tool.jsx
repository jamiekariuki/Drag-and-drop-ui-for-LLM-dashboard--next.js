"use client";
import React, { useState } from "react";
import "./create.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import { Button } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import SelectOption from "@/components/styled components/inputs/select.option";

const CreateTool = ({ open, onClose, handleAddTool }) => {
	const [formData, setFormData] = useState({
		title: "",
		status: "not ready",
		desc: "",
		prompt: "",
		docs: "Disable",
	});

	const maxTitleLength = 20;
	const maxDescLength = 70;
	const maxPromptLength = 1000;

	const handleChange = (name, value) => {
		const updatedFormData = {
			...formData,
			[name]: value,
		};

		if (
			(name === "title" &&
				value.replace(/\s/g, "").length <= maxTitleLength) ||
			(name === "desc" &&
				value.replace(/\s/g, "").length <= maxDescLength) ||
			(name === "prompt" &&
				value.replace(/\s/g, "").length <= maxPromptLength)
		) {
			setFormData(updatedFormData);
		} else if (name === "docs") {
			setFormData(updatedFormData);
		}
	};

	const docsList = ["Enable", "Disable"];

	return (
		<Modal open={open} onClose={onClose} title={"Create tool"}>
			<div className="create-tool">
				<div className="create-tool-container">
					<div className="create-tool-wrapper">
						<div className="ct-input">
							<h3>Upload Documents</h3>
							<SelectOption
								label={"Upload documents"}
								list={docsList}
								value={formData.docs}
								changeValue={(e) => {
									handleChange("docs", e);
								}}
							/>
						</div>

						<div className="ct-input">
							<h3>Add a title for your project</h3>
							<Inputs2
								error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								}
								type={"text"}
								label={"Tool title"}
								id={"tool-name-e"}
								value={formData.title}
								changeValue={(e) => {
									handleChange("title", e);
								}}
							/>
						</div>

						<div className="ct-input">
							<h3>Custom prompt</h3>

							<div className="ct-info">
								<InfoIcon className="ct-info-icon" />
								<p>
									Feel free to customize the prompt area if
									you desire specific responses. However, rest
									assured that we've streamlined the process
									for you if no customization is needed.
								</p>
							</div>

							<TextArea2
								error={
									formData.desc.replace(/\s/g, "").length >=
									maxPromptLength
								}
								label={"Enter your prompt..."}
								id={"tool-prompt-e2"}
								value={formData.prompt}
								inputHeight={"150px"}
								changeValue={(e) => {
									handleChange("prompt", e);
								}}
							/>
						</div>

						<div className="ct-input">
							<h3>Tool descripton</h3>
							<TextArea2
								error={
									formData.desc.replace(/\s/g, "").length >=
									maxDescLength
								}
								label={"Enter Tool description..."}
								id={"tool-desc-e2"}
								value={formData.desc}
								inputHeight={"150px"}
								changeValue={(e) => {
									handleChange("desc", e);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="create-tool-footer">
					<Button
						disabled={formData.title === ""}
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={() => {
							handleAddTool(formData);
							onClose();
							setFormData({
								status: "not ready",
								title: "",
								desc: "",
								prompt: "",
								docs: "Disable",
							});
						}}
					>
						<p
							style={{
								//if btn is false it will be grey
								color: formData.title === "" && "grey",
							}}
						>
							save
						</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default CreateTool;
