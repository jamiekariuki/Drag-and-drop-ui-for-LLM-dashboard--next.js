"use client";
import React, { useEffect, useState } from "react";
import "./list.modal.scss";
import Modal from "@/components/styled components/modals/modal";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const ListModal = ({
	open,
	onClose,
	modalTitle,
	inputLabel,
	InputId,
	allLists,
	handleDeleteList,
	handleListChange,
	handleAddList,
	saveBtn,
	onSave,
	addBtnName,
}) => {
	return (
		<Modal open={open} onClose={onClose} title={modalTitle}>
			<div className="enter-list">
				<div className="enter-list-heading">
					<Button
						variant="outlined"
						startIcon={<AddIcon className="el-icon" />}
						size="small"
						className="el-btn"
						disableElevation
						onClick={handleAddList}
					>
						<p>{addBtnName}</p>
					</Button>
				</div>

				<div className="el-container">
					<div className="el-wrapper">
						{allLists.map((item, index) => (
							<div key={index}>
								<ListInput
									listItem={item.listItem}
									handleDeleteList={handleDeleteList}
									index={index}
									handleListChange={handleListChange}
									allLists={allLists}
									inputLabel={inputLabel}
									InputId={InputId}
								/>
							</div>
						))}
					</div>
				</div>

				<div className="el-bottom">
					<Button
						disabled={!saveBtn}
						variant="contained"
						startIcon={<SaveIcon className="el-icon" />}
						size="small"
						className="el-btn"
						disableElevation
						onClick={onSave}
					>
						<p
							style={{
								//if btn is false it will be grey
								color: saveBtn || "grey",
							}}
						>
							save
						</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ListModal;

//input------

const ListInput = ({
	handleDeleteList,
	index,
	handleListChange,
	listItem,
	inputLabel,
	InputId,
}) => {
	return (
		<div className="list-item-container">
			<div className="list-item-wrapper">
				<Inputs2
					type={"text"}
					label={inputLabel}
					id={InputId}
					value={listItem}
					changeValue={(e) => {
						handleListChange(e, index);
					}}
				/>
			</div>

			<div className="list-item-delete">
				<IconButton
					aria-label="delete"
					size="small"
					color="error"
					onClick={() => {
						handleDeleteList(index);
					}}
				>
					<DeleteIcon className="tb-delete" />
				</IconButton>
			</div>
		</div>
	);
};
