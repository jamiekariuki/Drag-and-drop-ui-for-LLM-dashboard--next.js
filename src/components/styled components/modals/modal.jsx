"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./modal.scss";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

/*
 const Modal = ({ open, onClose, children }) => {
	const ref = useRef(null);

	useLayoutEffect(() => {
		const closeListenerFnc = () => {
			onClose && onClose();
		};

		const dialogRef = ref.current;
		dialogRef?.addEventListener("close", closeListenerFnc);

		return () => {
			dialogRef?.removeEventListener("close", closeListenerFnc);
		};
	}, [onClose]);

	useLayoutEffect(() => {
		if (open && !ref.current?.open) {
			ref.current?.showModal();
		} else if (!open && ref.current?.open) {
			ref.current?.close();
		}
	}, [open]);

	return (
		<dialog
			className="modal fade-in"
			ref={ref}
			onClick={(e) => {
				const dialogDimensions =
					e.currentTarget.getBoundingClientRect();
				if (
					e.clientX < dialogDimensions.left ||
					e.clientX > dialogDimensions.right ||
					e.clientY < dialogDimensions.top ||
					e.clientY > dialogDimensions.bottom
				) {
					e.currentTarget.close();
				}
			}}
		>
			<IconButton
				aria-label="close"
				size="medium"
				className="close-button"
				onClick={onClose}
			>
				<CloseIcon fontSize="inherit" />
			</IconButton>
			{children}
		</dialog>
	);
};

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Modal;
 */
/* 
const Modal = ({ open, onClose, children }) => {
	if (open) {
		return (
			<div className="modal-backdrop">
				<div className="modal ">
					<IconButton
						aria-label="close"
						size="medium"
						className="close-button"
						onClick={onClose}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
					{children}
				</div>
			</div>
		);
	} else {
		return null;
	}
};

Modal.propTypes = {
	open: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
};

export default Modal; */

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
};

export default function Modal({ open, onClose, children }) {
	/* const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false); */

	return (
		<div>
			{/* <Button onClick={handleOpen}>Open modal</Button> */}
			<Modal
				open={open}
				onClose={onClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box /* sx={style} */ className="modal ">
					<IconButton
						aria-label="close"
						size="medium"
						className="close-button"
						onClick={onClose}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
					{children}
				</Box>
			</Modal>
		</div>
	);
}
