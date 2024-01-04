"use client";
import React, { useState } from "react";
import "./agents.scss";
import AddIcon from "@mui/icons-material/Add";
import CreateAgent from "./create agent/create.agent";
import AgentCard from "./agent card/agent.card";
import useAgent from "@/hooks/AI hooks/use.agent";
import AgentsHeader from "./header/agents.header";

const Agents = () => {
	//agents state
	const { allAgents, handleAddAgent, handleAgentChange, handleDeleteAgent } =
		useAgent();

	const [openCreate, setOpenCreate] = useState(false);
	const onCloseCreate = () => {
		setOpenCreate(false);
	};

	return (
		<div className="agents">
			<AgentsHeader handleAddAgent={handleAddAgent} />

			<div className="agents-container">
				<div
					className={
						allAgents.length > 2 ? "cb-tools cb-tools2" : "cb-tools"
					}
				>
					{allAgents.map((item, index) => (
						<div className="agent-box" key={index}>
							<AgentCard
								item={item}
								handleAgentChange={handleAgentChange}
								handleDeleteAgent={handleDeleteAgent}
								index={index}
							/>
						</div>
					))}

					<div
						className="agent-box-add"
						onClick={() => {
							setOpenCreate(true);
						}}
					>
						<div className="tb-add">
							<AddIcon className="tb-add" />
							<h4>Create custom Agent</h4>
						</div>
					</div>

					{openCreate && (
						<CreateAgent
							open={openCreate}
							onClose={onCloseCreate}
							handleAddAgent={handleAddAgent}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Agents;
