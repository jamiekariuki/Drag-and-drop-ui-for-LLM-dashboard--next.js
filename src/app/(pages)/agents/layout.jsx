import AgentsTabs from "@/components/pages/agents/tab/agent.tabs";
import React from "react";

const AgentsLayout = ({ children }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div>
				<AgentsTabs />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default AgentsLayout;
