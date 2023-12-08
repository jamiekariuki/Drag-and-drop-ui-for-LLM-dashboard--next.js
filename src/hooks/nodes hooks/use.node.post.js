"use cleint";
import { useState, useEffect } from "react";

const useNodePost = (image, caption) => {
	const [postImage, setPostImage] = useState(image ? image : "");
	const [postCaption, setPostCaption] = useState(caption ? caption : "");

	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);

	//post update
	const handlePostImage = (value) => {
		setPostImage(value);
	};

	//post update
	const handlePostCaption = (value) => {
		setPostCaption(value);
	};

	//delete image
	const handleDeleteImage = () => {
		setPostImage("");
	};

	const updateSaveButton = () => {
		if (track && (postCaption !== "" || postImage !== "")) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}
		setTrack(true);
	};

	useEffect(() => {
		updateSaveButton();
	}, [postImage, postCaption]);

	return {
		saveBtn,
		setSaveBtn,
		postCaption,
		postImage,
		handlePostCaption,
		handlePostImage,
		handleDeleteImage,
	};
};

export default useNodePost;
