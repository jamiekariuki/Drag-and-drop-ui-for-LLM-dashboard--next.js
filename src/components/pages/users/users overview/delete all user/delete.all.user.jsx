import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import "./delete.all.user.scss";
import Modal from "@/components/styled components/modals/modal";

const DeleteAllUser = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<div className="user-delete">
				<div className="delete-container">
					<Alert severity="warning">
						<AlertTitle className="warning-title">
							Warning!
						</AlertTitle>
						This action cannot be reversed —
						<strong>
							All Users Account will be deleted parmanetly
						</strong>
					</Alert>
				</div>
				<div className="delete-button-container">
					<button onClick={onClose}>
						<p>Proceed</p>
					</button>
					<button onClick={onClose} className="decline-button">
						<p>Decline</p>
					</button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteAllUser;
