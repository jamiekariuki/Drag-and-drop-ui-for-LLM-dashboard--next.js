"use client";
import React from "react";
import "./create.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import Inputs, {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import Image from "next/image";
import { Button } from "@mui/material";

const CreateAgent = ({ open, onClose, avatar }) => {
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
						<div>
							<h4>Create your Agent Name</h4>
							<Inputs2
								/* error={
							companyName.replace(/\s/g, "").length >=
							companyNameLength
						} */
								type={"text"}
								label={"Agent name"}
								id={"agent-name"}
								/* value={companyName}
						changeValue={(e) => {
							setCompanyName(e);
						}} */
							/>
						</div>

						<div>
							<h4>Agent descripton</h4>
							<TextArea2
								/* error={
							systemPrompt.replace(/\s/g, "").length >=
							systemPromptLength
						} */

								label={"Enter Agent description..."}
								id={"agen-desc"}
								/* value={systemPrompt}
						inputHeight={"150px"}
						changeValue={(e) => {
							setSystemPrompt(e);
						}} */
							/>
						</div>
					</div>
				</div>

				<div className="edit-agent-footer">
					<Button
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={onClose}
					>
						<p>submit</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default CreateAgent;
