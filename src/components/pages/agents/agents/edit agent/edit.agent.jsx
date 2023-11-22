"use client";
import React from "react";
import "./edit.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import Inputs from "@/components/styled components/inputs/inputs";
import Image from "next/image";

const EditAgent = ({ open, onClose, agentTitle, avatar }) => {
	return (
		<Modal open={open} onClose={onClose} title={"Add Tools"}>
			<div className="edit-agent">
				<div className="edit-agent-container">
					<form /* onSubmit={handleSubmit} */>
						<div className="form-group-profile">
							<label htmlFor="profilePicture">
								<div className="profile-wrapper-input">
									{/* <Image
										className="profile-image-input"
										src={avatar}
										alt="avatar"
										fill={true}
									/> */}
									<input
										type="file"
										id="profilePicture"
										name="profilePicture"
										/* onChange={handleInputChange} */
										hidden
									/>

									<div className="upload-text">
										<h6>
											Upload <br /> Photo
										</h6>
									</div>
								</div>
							</label>
						</div>
					</form>

					<h2>Edit your Agent Name</h2>

					<Inputs label={"Title"} type={"text"} value={agentTitle} />
				</div>
			</div>
		</Modal>
	);
};

export default EditAgent;
