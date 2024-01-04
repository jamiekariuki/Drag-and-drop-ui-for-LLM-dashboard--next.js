import React, { useState } from "react";
import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TuneIcon from "@mui/icons-material/Tune";
import { TbWorldSearch } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import DeleteTool from "../delete tool/delete.tool";
import EditTool from "../edit tool/edit.tool";

const ToolCard = ({ item, index, handleToolChange, handleDeleteTool }) => {
	//delete tool
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	//Edit tool
	const [openEdit, setOpenEdit] = useState(false);

	const onCloseEdit = () => {
		setOpenEdit(false);
	};

	return (
		<>
			<div className="tool-box-title">
				<div className="tb-left">
					<div className="tb-left-icon-container">{item.icon}</div>
					<div className="tb-left-info">
						<h3>
							{item.title.split(" ").slice(0, 3).join(" ")}
							{item.title.split(" ").length > 3 && " ..."}
						</h3>
					</div>
				</div>

				<div className="tb-right">
					<IconButton
						aria-label="delete"
						size="small"
						onClick={() => setOpen(true)}
					>
						<DeleteIcon className="tb-delete" />
					</IconButton>

					<DeleteTool
						open={open}
						onClose={onClose}
						index={index}
						handleDeleteTool={handleDeleteTool}
					/>
				</div>
			</div>

			<div className="tool-box-info">
				<p>
					<span>Status: </span>
					{"  "}
					{item.status}
				</p>

				<p>
					<span>Description:</span>
					{"  "}
					{item.desc.split(" ").slice(0, 15).join(" ")}
					{item.desc.split(" ").length > 15 && " ..."}
				</p>
			</div>

			<div className="tool-box-btn-container">
				<div className="tbc">
					<Button
						variant="contained"
						startIcon={<TuneIcon className="tool-box-icon" />}
						size="small"
						className="tool-box-btn "
						disableElevation
						onClick={() => setOpenEdit(true)}
					>
						<p>Edit</p>
					</Button>

					{openEdit && (
						<EditTool
							item={item}
							open={openEdit}
							onClose={onCloseEdit}
							handleToolChange={handleToolChange}
							index={index}
						/>
					)}
					<Link
						href={`/tools/${item.title
							.toLowerCase()
							.split(" ")
							.join("-")}`}
					>
						<Button
							variant="contained"
							endIcon={
								<ArrowForwardIcon className="tool-box-icon" />
							}
							size="small"
							className="tool-box-btn"
							disableElevation
						>
							<p>use</p>
						</Button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ToolCard;
