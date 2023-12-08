"use cleint";
import { useState, useEffect } from "react";

const useNodeValues = (initialList) => {
	const [allLists, setAllLists] = useState(initialList ? initialList : []);
	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);

	//add to list
	const handleAddList = () => {
		const newList = { listItem: "" };
		setAllLists([newList, ...allLists]);
	};

	//update list
	const handleListChange = (newValue, index) => {
		const updatedList = [...allLists];
		updatedList[index].listItem = newValue;
		setAllLists(updatedList);
	};

	//delete listItem
	const handleDeleteList = (index) => {
		const updatedList = [...allLists];
		updatedList.splice(index, 1);
		setAllLists(updatedList);
		if (updatedList.length === 0) {
			setSaveBtn(false);
		}
		const hasNullItem = updatedList.some((list) => list.listItem === "");
		setSaveBtn(!hasNullItem);
	};

	const updateSaveButton = () => {
		const hasNullItem = allLists.some((list) => list.listItem === "");
		if (track && allLists.length !== 0 && !hasNullItem) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}
		setTrack(true);
	};

	useEffect(() => {
		updateSaveButton();
	}, [allLists]);

	return {
		allLists,
		saveBtn,
		setSaveBtn,
		handleAddList,
		handleListChange,
		handleDeleteList,
	};
};

export default useNodeValues;
