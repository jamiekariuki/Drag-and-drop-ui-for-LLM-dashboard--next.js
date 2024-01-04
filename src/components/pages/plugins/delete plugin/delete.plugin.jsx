"use client";
import React from "react";
import "./delete.plugin.scss";
import Modal from "@/components/styled components/modals/modal";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const DeletePlugin = ({
	onClose2,
	open,
	onClose,
	handleDeletePlugin,
	index,
}) => {
	return (
		<Modal open={open} onClose={onClose}>
			<div className="plugin-delete">
				<div className="delete-container">
					<Alert severity="warning">
						<AlertTitle className="warning-title">
							Warning!
						</AlertTitle>
						This action cannot be reversed —
						<strong>This Plugin will be deleted parmanetly</strong>
					</Alert>
				</div>
				<div className="delete-button-container">
					<button
						onClick={() => {
							handleDeletePlugin(index);
							onClose();
							onClose2();
						}}
					>
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

export default DeletePlugin;
