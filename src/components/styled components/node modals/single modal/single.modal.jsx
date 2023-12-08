"use client";
import React, { useState } from "react";
import "./single.modal.scss";
import Modal from "@/components/styled components/modals/modal";
import { Inputs2 } from "@/components/styled components/inputs/inputs";

const SingleModal = ({
	open,
	onClose,
	modalTitle,
	handleSingleItemChange,
	inputLabel,
	inputId,
	initialValue,
}) => {
	const [item, setItem] = useState(initialValue ? initialValue : "");

	const handleValueChange = (e) => {
		setItem(e);
		handleSingleItemChange(e);
	};

	return (
		<Modal open={open} onClose={onClose} title={modalTitle}>
			<div className="enter-item">
				<div className="item-input">
					<Inputs2
						type={"text"}
						label={inputLabel}
						id={inputId}
						value={item}
						changeValue={(e) => {
							handleValueChange(e);
						}}
					/>
				</div>
			</div>
		</Modal>
	);
};

export default SingleModal;
