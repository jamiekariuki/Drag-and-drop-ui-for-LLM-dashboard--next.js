import React, { useState } from "react";
import "./user.edit.scss";
import Modal from "@/components/styled components/modals/modal";
import Image from "next/image";

const UserEdit = ({
	open,
	onClose,
	profile,
	username,
	email,
	role,
	/* ipadress, */
}) => {
	const isSuperAdmin = true;

	const initialUserData = {
		profilePicture: "",
		username: username,
		email: email,
		role: role,
		ipAddress: "192.168.1.1",
	};

	const [userData, setUserData] = useState(initialUserData);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUserData({
			...userData,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		/* call api here */

		onClose();
	};

	if (isSuperAdmin) {
		return (
			<Modal open={open} onClose={onClose}>
				<div className="user-edit">
					<form onSubmit={handleSubmit}>
						<div className="form-group-profile">
							<label htmlFor="profilePicture">
								<div className="profile-wrapper-input">
									<Image
										className="profile-image-input"
										src={profile}
										alt="avatar"
										fill={true}
									/>
									<input
										type="file"
										id="profilePicture"
										name="profilePicture"
										value={userData.profilePicture}
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
							<label htmlFor="username">
								<p>Username</p>{" "}
							</label>
							<input
								onKeyDown={(event) => {
									event.stopPropagation();
								}}
								type="text"
								id="username"
								name="username"
								value={userData.username}
								onChange={handleInputChange}
								className="text-area"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="email">
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
							<label>
								<p>Role</p>
							</label>
							<div className="role-radio">
								<label className="role-radio-input">
									<input
										type="radio"
										name="role"
										value="super admin"
										checked={
											userData.role === "super admin"
										}
										onChange={handleInputChange}
										className="radio-area"
									/>
									<h6>Super admin</h6>
								</label>
								<label className="role-radio-input">
									<input
										type="radio"
										name="role"
										value="admin"
										checked={userData.role === "admin"}
										onChange={handleInputChange}
										className="radio-area"
									/>

									<h6>Admin</h6>
								</label>
								<label className="role-radio-input">
									<input
										type="radio"
										name="role"
										value="user"
										checked={userData.role === "user"}
										onChange={handleInputChange}
										className="radio-area"
									/>
									<h6>User</h6>
								</label>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="ipAddress">
								<p>IP Address</p>
							</label>
							<input
								onKeyDown={(event) => {
									event.stopPropagation();
								}}
								type="text"
								id="ipAddress"
								name="ipAddress"
								value={userData.ipAddress}
								onChange={handleInputChange}
								className="text-area"
							/>
						</div>
						<button type="submit">
							{" "}
							<p>submit</p>{" "}
						</button>
					</form>
				</div>
			</Modal>
		);
	} else {
		return (
			<Modal open={open} onClose={onClose}>
				<div className="user-edit-decline">
					<div className="warning-container">
						<p className="decline-p">
							{" "}
							Sorry only Super Admins can edit users profile
						</p>
					</div>
					<div className="decline-button-container">
						<button onClick={onClose}>
							<p>OK</p>
						</button>
					</div>
				</div>
			</Modal>
		);
	}
};

export default UserEdit;
