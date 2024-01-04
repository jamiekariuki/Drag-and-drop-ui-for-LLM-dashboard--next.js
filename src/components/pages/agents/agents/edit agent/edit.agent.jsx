"use client";
import React, { useEffect, useState } from "react";
import "./edit.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import Image from "next/image";
import { Button } from "@mui/material";

const EditAgent = ({ open, onClose, item, handleAgentChange, index }) => {
	const [formData, setFormData] = useState(item);
	const [saveBtn, setSaveBtn] = useState(false);

	const maxTitleLength = 20;
	const maxDescLength = 70;

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
				value.replace(/\s/g, "").length <= maxDescLength)
		) {
			setFormData(updatedFormData);
		}
	};

	return (
		<Modal open={open} onClose={onClose} title={"Edit Agent"}>
			<div className="edit-agent">
				<div className="edit-agent-container">
					<form /* onSubmit={handleSubmit} */>
						<label htmlFor="profilePicture">
							<div className="profile-wrapper-input">
								<Image
									className="profile-image-input"
									src={item.avatar}
									alt="avatar"
									fill={true}
								/>
								<input
									type="file"
									id="profilePicture"
									name="profilePicture"
									hidden
								/>

								<div className="upload-text">
									<h6>
										Upload <br /> Photo
									</h6>
								</div>
							</div>
						</label>
					</form>

					<div className="edit-wrapper">
						<div className="inputs2">
							<h3>Edit your Agent Name</h3>

							<Inputs2
								error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								}
								type={"text"}
								label={"Agent name"}
								id={"agent-name-e"}
								value={formData.title}
								changeValue={(e) => {
									handleChange("title", e);
								}}
							/>
						</div>

						<div className="inputs2">
							<h3>Agent descripton</h3>
							<TextArea2
								error={
									formData.desc.replace(/\s/g, "").length >=
									maxDescLength
								}
								label={"Enter Agent description..."}
								id={"agen-desc-e"}
								value={formData.desc}
								inputHeight={"150px"}
								changeValue={(e) => {
									handleChange("desc", e);
								}}
							/>
						</div>
					</div>
				</div>

				<div className="edit-agent-footer">
					<Button
						disabled={!saveBtn || formData.title === ""}
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={() => {
							handleAgentChange(formData, index);
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

export default EditAgent;
