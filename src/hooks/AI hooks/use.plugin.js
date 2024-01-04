"use cleint";
import { useState } from "react";

const usePlugin = () => {
	const [allPlugins, setAllPlugins] = useState([]);
	const [select, setSelect] = useState(0);

	//we need to take in id
	//add Plugin to Plugin
	const handleAddPlugin = (value) => {
		setAllPlugins([value, ...allPlugins]);
	};

	//update Plugin
	const handlePluginChange = (newValue, index) => {
		const updatedPlugin = [...allPlugins];

		updatedPlugin[index] = newValue;

		setAllPlugins(updatedPlugin);
	};

	//delete Plugin
	const handleDeletePlugin = (index) => {
		const updatedPlugin = [...allPlugins];
		updatedPlugin.splice(index, 1);
		setAllPlugins(updatedPlugin);

		if (index === 0) {
			setSelect(0);
		} else {
			setSelect(index - 1);
		}
	};

	return {
		allPlugins,
		handleAddPlugin,
		handlePluginChange,
		handleDeletePlugin,
		select,
		setSelect,
	};
};

export default usePlugin;
