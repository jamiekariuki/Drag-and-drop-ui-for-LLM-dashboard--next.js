"use cleint";
import { useEffect, useState } from "react";

const useAgent = () => {
	const [allAgents, setAllAgents] = useState([]);

	//we need to take in id
	//add agent to Agent
	const handleAddAgent = (value) => {
		setAllAgents([value, ...allAgents]);
	};

	//update agent
	const handleAgentChange = (newValue, index) => {
		const updatedAgent = [...allAgents];

		updatedAgent[index] = newValue;

		setAllAgents(updatedAgent);
	};

	//delete agent
	const handleDeleteAgent = (index) => {
		const updatedAgent = [...allAgents];
		updatedAgent.splice(index, 1);
		setAllAgents(updatedAgent);
	};

	return {
		allAgents,
		handleAddAgent,
		handleAgentChange,
		handleDeleteAgent,
	};
};

export default useAgent;
