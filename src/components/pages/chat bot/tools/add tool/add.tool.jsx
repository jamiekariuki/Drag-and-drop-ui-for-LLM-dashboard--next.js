"use client";
import React from "react";
import "./add.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import { ChatBots } from "./all.tools";

const AddTool = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<div className="add-tool">
				<div className="add-tool-title">
					<h2>Add Tools</h2>
				</div>
				<div className="add-tool-container">
					<div className="add-tool-wrapper">
						{ChatBots.map((item, index) => (
							<div
								className="add-tool-box"
								key={index}
								onClick={onClose}
							>
								<div className="add-tool-top">
									{item.icon}

									<h4>{item.title}</h4>
								</div>
								<div className="add-tool-bottom">
									<p>{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AddTool;
