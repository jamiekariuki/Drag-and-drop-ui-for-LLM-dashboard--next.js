"use client";
import React from "react";
import "./add.template.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import { ChatBots } from "./all.tools";

const AddTemplateTool = ({ open, onClose, handleAddTool }) => {
	const SortedChatBots = ChatBots.slice().sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return (
		<Modal open={open} onClose={onClose}>
			<div className="add-tool">
				<div className="add-tool-title">
					<h1>Add Tools</h1>
				</div>

				<div className="add-tool-container">
					<div className="add-tool-wrapper">
						{SortedChatBots.map((item, index) => (
							<div
								className="add-tool-box"
								key={index}
								onClick={() => {
									handleAddTool(item);
									onClose();
								}}
							>
								<div className="add-tool-top">
									{item.icon}
									<h3>{item.title}</h3>
								</div>
								<div className="add-tool-bottom">
									<p>
										{item.desc
											.split(" ")
											.slice(0, 12)
											.join(" ")}
										{item.desc.split(" ").length > 12 &&
											" ..."}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AddTemplateTool;
