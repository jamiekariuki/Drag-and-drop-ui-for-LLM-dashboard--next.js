"use client";
import React, { useLayoutEffect, useRef } from "react";
import "./modal.scss";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ReactDOM from "react-dom";

/* const Modal = ({ open, onClose, children }) => {
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

const Modal = ({ open, onClose, children }) => {
	if (open) {
		return ReactDOM.createPortal(
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
			</div>,
			document.body
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

export default Modal;
