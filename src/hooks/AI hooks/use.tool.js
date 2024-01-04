"use cleint";
import { useEffect, useState } from "react";

const useTool = () => {
	const [allTools, setAllTools] = useState([]);

	//we need to take in id
	//add Tool to Tool
	const handleAddTool = (value) => {
		setAllTools([value, ...allTools]);
	};

	//update Tool
	const handleToolChange = (newValue, index) => {
		const updatedTool = [...allTools];

		updatedTool[index] = newValue;

		setAllTools(updatedTool);
	};

	//delete Tool
	const handleDeleteTool = (index) => {
		const updatedTool = [...allTools];
		updatedTool.splice(index, 1);
		setAllTools(updatedTool);
	};

	return {
		allTools,
		handleAddTool,
		handleToolChange,
		handleDeleteTool,
	};
};

export default useTool;
