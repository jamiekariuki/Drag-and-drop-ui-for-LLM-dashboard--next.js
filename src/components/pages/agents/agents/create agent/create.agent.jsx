"use client";
import React, { useState } from "react";
import "./create.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import Image from "next/image";
import { Button } from "@mui/material";

const CreateAgent = ({ open, onClose, handleAddAgent }) => {
	const [formData, setFormData] = useState({
		avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
		title: "",
		status: "not ready",
		desc: "",
	});

	const maxTitleLength = 20;
	const maxDescLength = 70;

	const handleChange = (name, value) => {
		const updatedFormData = {
			...formData,
			[name]: value,
		};

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
		<Modal open={open} onClose={onClose} title={"Create Agent"}>
			<div className="create-agent">
				<div className="create-agent-container">
					<form /* onSubmit={handleSubmit} */>
						<label htmlFor="profilePicture">
							<div className="profile-wrapper-input">
								<Image
									className="profile-image-input"
									src="https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg"
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
							<h3>Create your Agent Name</h3>
							<Inputs2
								error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								}
								type={"text"}
								label={"Agent name"}
								id={"agent-name"}
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
								id={"agen-desc"}
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
						disabled={formData.title === ""}
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={() => {
							handleAddAgent(formData);
							onClose();
							setFormData({
								avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
								status: "not ready",
								title: "",
								desc: "",
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

export default CreateAgent;
