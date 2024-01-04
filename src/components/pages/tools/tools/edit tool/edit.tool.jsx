"use client";
import React, { useState } from "react";
import "./edit.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";

const EditTool = ({ open, onClose, item, handleToolChange, index }) => {
	const [formData, setFormData] = useState(item);
	const [saveBtn, setSaveBtn] = useState(false);

	const maxTitleLength = 20;
	const maxDescLength = 70;
	const maxPromptLength = 1000;

	const handleChange = (name, value) => {
		const updatedFormData = {
			...formData,
			[name]: value,
		};

		setSaveBtn(true);

		if (
			(name === "title" &&
				value.replace(/\s/g, "").length <= maxTitleLength) ||
			(name === "desc" &&
				value.replace(/\s/g, "").length <= maxDescLength) ||
			(name === "prompt" &&
				value.replace(/\s/g, "").length <= maxPromptLength)
		) {
			setFormData(updatedFormData);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title={"Edit tool"}>
			<div className="edit-tool">
				<div className="edit-tool-container">
					<div className="edit-tool-wrapper">
						<div className=" ct-input-doc">
							<h3>Upload document</h3>
							<div className="ct-upload-doc">
								<IoDocumentTextOutline className="upload-icon" />
								<h6>Click or drag and Drop</h6>
								<p>to upload files</p>
							</div>
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
								id={"tool-prompt-e"}
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
								id={"tool-desc-e"}
								value={formData.desc}
								inputHeight={"150px"}
								changeValue={(e) => {
									handleChange("desc", e);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="edit-tool-footer">
					<Button
						disabled={!saveBtn || formData.title === ""}
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={() => {
							handleToolChange(formData, index);
							onClose();
							setSaveBtn(false);
						}}
					>
						<p
							style={{
								//if btn is false it will be grey
								color:
									saveBtn && formData.title === "" && "grey",
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

export default EditTool;
