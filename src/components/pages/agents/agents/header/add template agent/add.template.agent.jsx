"use client";
import React from "react";
import "./add.template.agent.scss";
import Modal from "@/components/styled components/modals/modal";
import { AgentTemplates } from "./all.agents";
import Image from "next/image";

const AddTemplateAgent = ({ open, onClose, handleAddAgent }) => {
	//sorting
	const SortedAgentTemplates = AgentTemplates.slice().sort((a, b) =>
		a.title.localeCompare(b.title)
	);

	return (
		<Modal open={open} onClose={onClose} title={"Agent Templates"}>
			<div className="add-template-agent">
				<div className="add-template-container">
					<div className="add-template-wrapper">
						{SortedAgentTemplates.map((item, index) => (
							<div
								className="add-template-box"
								key={index}
								onClick={() => {
									handleAddAgent(item);
									onClose();
								}}
							>
								<div className="add-template-top">
									<div className="add-template-avatar-container">
										<Image
											className="add-template-avatar"
											src={item.avatar}
											alt="avatar"
											fill={true}
										/>
									</div>
									<h3>{item.title}</h3>
								</div>
								<div className="add-template-bottom">
									<p>
										{item.desc
											.split(" ")
											.slice(0, 10)
											.join(" ")}
										{item.desc.split(" ").length > 10 &&
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

export default AddTemplateAgent;
