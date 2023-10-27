import React, { useState } from "react";
import "./leads.edit.scss";
import Image from "next/image";
import Button from "@mui/material/Button";

const LeadsEdit = ({ leadData }) => {
	const isSuperAdmin = true;

	const [userData, setUserData] = useState(leadData);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		//console.log(userData);

		/* call api here */
	};

	if (isSuperAdmin) {
		return (
			<div className="leads-user-edit">
				<form onSubmit={handleSubmit}>
					<div className="form-container">
						<div className="form-wrapper">
							<div className="form-group-profile">
								<label htmlFor="profilePicture">
									<div className="profile-wrapper-input">
										<Image
											className="profile-image-input"
											src={userData.profilePicture}
											alt="avatar"
											fill={true}
										/>
										<input
											onKeyDown={(event) => {
												event.stopPropagation();
											}}
											type="file"
											id="profilePicture"
											name="profilePicture"
											value=""
											onChange={handleInputChange}
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

							<div className="form-group">
								<label htmlFor="name" className="label-wrapper">
									<p>Name</p>{" "}
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="text"
									id="name"
									name="name"
									value={userData.name}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="contact"
									className="label-wrapper"
								>
									<p>Contact</p>{" "}
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="text"
									id="contact"
									name="contact"
									value={userData.contact}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="source"
									className="label-wrapper"
								>
									<p>Source</p>{" "}
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="text"
									id="source"
									name="source"
									value={userData.source}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="industry"
									className="label-wrapper"
								>
									<p>Industry</p>{" "}
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="text"
									id="industry"
									name="industry"
									value={userData.industry}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="website"
									className="label-wrapper"
								>
									<p>website</p>{" "}
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="text"
									id="website"
									name="website"
									value={userData.website}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label
									htmlFor="email"
									className="label-wrapper"
								>
									<p>Email</p>
								</label>
								<input
									onKeyDown={(event) => {
										event.stopPropagation();
									}}
									type="email"
									id="email"
									name="email"
									value={userData.email}
									onChange={handleInputChange}
									className="text-area"
								/>
							</div>

							<div className="form-group">
								<label className="label-wrapper">
									<p>Type</p>
								</label>
								<div className="role-radio">
									<label className="role-radio-input">
										<input
											type="radio"
											name="type"
											value="Person"
											checked={userData.type === "Person"}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>Person</h6>
									</label>
									<label className="role-radio-input">
										<input
											type="radio"
											name="type"
											value="Company"
											checked={
												userData.type === "Company"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>

										<h6>Company</h6>
									</label>
								</div>
							</div>

							<div className="form-group">
								<label className="label-wrapper">
									<p>Contacted</p>
								</label>
								<div className="role-radio">
									<label className="role-radio-input">
										<input
											type="radio"
											name="contacted"
											value="Yes"
											checked={
												userData.contacted === "Yes"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>Yes</h6>
									</label>
									<label className="role-radio-input">
										<input
											type="radio"
											name="contacted"
											value="No"
											checked={
												userData.contacted === "No"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>

										<h6>No</h6>
									</label>
								</div>
							</div>

							<div className="form-group">
								<label className="label-wrapper">
									<p>Status</p>
								</label>
								<div className="role-radio">
									<label className="role-radio-input">
										<input
											type="radio"
											name="status"
											value="New lead"
											checked={
												userData.status === "New lead"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>New lead</h6>
									</label>
									<label className="role-radio-input">
										<input
											type="radio"
											name="status"
											value="In progress"
											checked={
												userData.status ===
												"In progress"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>

										<h6>In progress</h6>
									</label>
									<label className="role-radio-input">
										<input
											type="radio"
											name="status"
											value="pending"
											checked={
												userData.status === "pending"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>Pending</h6>
									</label>

									<label className="role-radio-input">
										<input
											type="radio"
											name="status"
											value="Won lead"
											checked={
												userData.status === "Won lead"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>Won lead</h6>
									</label>
									<label className="role-radio-input">
										<input
											type="radio"
											name="status"
											value="Canceled"
											checked={
												userData.status === "Canceled"
											}
											onChange={handleInputChange}
											className="radio-area"
										/>
										<h6>Canceled</h6>
									</label>
								</div>
							</div>
						</div>
					</div>

					<div className="button-wrapper">
						<Button
							variant="contained"
							size="small"
							disableElevation
							type="submit"
							className="mui-btn"
						>
							<p>Update Lead</p>
						</Button>
					</div>
				</form>
			</div>
		);
	} else {
		return (
			<div className="user-edit-decline">
				<div className="warning-container">
					<p className="decline-p">
						Sorry only Super Admins can edit users profile
					</p>
				</div>
				<div className="decline-button-container">
					<button onClick={onClose}>
						<p>OK</p>
					</button>
				</div>
			</div>
		);
	}
};

export default LeadsEdit;
