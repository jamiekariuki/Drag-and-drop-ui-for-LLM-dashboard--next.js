"use client";
import React from "react";
import "./nodes.scss";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Nodes = ({ children, title, type, onDelete, icon }) => {
	return (
		<div className="nodes">
			<div className="node-title">
				<div className="node-left">
					<div className="node-avatar">
						<Image
							alt="agent avatar"
							src={icon}
							fill={true}
							className="agent-avatar"
							quality={20}
						/>
					</div>
					<div className="tite-container">
						<h5>{title}</h5>
						<p>
							{"("}
							{type}
							{")"}
						</p>
					</div>
				</div>

				<div className="node-right">
					<IconButton
						aria-label="delete"
						size="small"
						onClick={onDelete}
					>
						<DeleteIcon className="tb-delete" />
					</IconButton>
				</div>
			</div>
			<div className="children-container nodrag">{children}</div>
		</div>
	);
};

export default Nodes;
