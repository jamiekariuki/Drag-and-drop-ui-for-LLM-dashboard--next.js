"use client";
import "./modal.scss";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import ReactDOM from "react-dom";

const Modal = ({ open, onClose, children, title }) => {
	if (open) {
		return ReactDOM.createPortal(
			<div className="modal-wrapper">
				<div className="modal-backdrop" onClick={onClose} />

				<div className="modal ">
					<IconButton
						aria-label="close"
						size="medium"
						className="close-button"
						onClick={onClose}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>

					{title && (
						<div className="modal-title">
							<h1>{title}</h1>
						</div>
					)}

					{children}
				</div>
			</div>,
			document.getElementById("portal")
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
