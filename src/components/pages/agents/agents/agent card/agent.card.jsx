import React, { useState } from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { GoWorkflow } from "react-icons/go";
import { MoreInfo } from "@/components/styled components/menu/more.info";
import Switch from "@mui/material/Switch";
import EditAgent from "../edit agent/edit.agent";
import DeleteAgent from "../delete agent/delete.agent";
import Link from "next/link";

const AgentCard = ({ item, handleAgentChange, index, handleDeleteAgent }) => {
	//more info
	const menus = ["Edit", "Delete"];

	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const [openDelete, setOpenDelete] = useState(false);
	const onCloseDelete = () => {
		setOpenDelete(false);
	};

	const menuInfo = (x) => {
		setOpen(x === "Edit" && true);
		setOpenDelete(x === "Delete" && true);
	};

	//------------agent switch

	const [on, setOn] = useState(false);

	const handleChange = (event) => {
		setOn(event.target.checked);
	};

	return (
		<>
			<div className="agent-box-container">
				<div className="agent-header">
					<div className="agent-avatar-container">
						<Image
							alt="agent avatar"
							src={item.avatar}
							fill={true}
							className="agent-avatar"
							quality={20}
						/>
					</div>

					<div className="agent-select">
						<div>
							<MoreInfo list={menus} func={menuInfo} />
						</div>
						{open && (
							<EditAgent
								open={open}
								onClose={onClose}
								item={item}
								handleAgentChange={handleAgentChange}
								index={index}
							/>
						)}

						{openDelete && (
							<DeleteAgent
								open={openDelete}
								onClose={onCloseDelete}
								handleDeleteAgent={handleDeleteAgent}
								index={index}
							/>
						)}
					</div>
				</div>

				<div className="agent-title">
					<h3>{item.title}</h3>
				</div>

				<div className="agent-status">
					<p>
						status: <span>{item.status}</span>{" "}
					</p>
				</div>

				<div className="agent-desc">
					<p>
						<span>Description:{"  "}</span>
						{item.desc.split(" ").slice(0, 15).join(" ")}
						{item.desc.split(" ").length > 15 && " ..."}
					</p>
				</div>
			</div>

			<div className="agent-box-buttons">
				<Link href="/account/agents/q">
					<Button
						variant="outlined"
						startIcon={<GoWorkflow className="agent-box-icon" />}
						size="small"
						className="agent-box-btn "
						disableElevation
					>
						<p>work flow</p>
					</Button>
				</Link>

				<div className="agent-switch">
					<Switch
						checked={on}
						onChange={handleChange}
						inputProps={{
							"aria-label": "controlled",
						}}
						size="small"
						className="cswitch"
					/>
				</div>
			</div>
		</>
	);
};

export default AgentCard;
