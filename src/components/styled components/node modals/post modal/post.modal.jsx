"use client";
import React from "react";
import "./post.modal.scss";
import Modal from "@/components/styled components/modals/modal";
import { TextArea2 } from "@/components/styled components/inputs/inputs";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { BsImage } from "react-icons/bs";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const PostModal = ({
	inputId,
	open,
	onClose,
	saveBtn,
	onSave,
	postCaption,
	postImage,
	handlePostCaption,
	handlePostImage,
	handleDeleteImage,
}) => {
	return (
		<Modal open={open} onClose={onClose} title={"Post details"}>
			<div className="enter-post">
				<div className="el-container">
					<div className="el-wrapper">
						<ModalInput
							inputId={inputId}
							postCaption={postCaption}
							postImage={postImage}
							handlePostCaption={handlePostCaption}
							handlePostImage={handlePostImage}
							handleDeleteImage={handleDeleteImage}
						/>
					</div>
				</div>

				<div className="el-bottom">
					<Button
						disabled={!saveBtn}
						variant="contained"
						startIcon={<SaveIcon className="el-icon" />}
						size="small"
						className="el-btn"
						disableElevation
						onClick={onSave}
					>
						<p
							style={{
								//if btn is false it will be grey
								color: saveBtn || "grey",
							}}
						>
							save
						</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default PostModal;

//input------

const ModalInput = ({
	inputId,
	postCaption,
	postImage,
	handlePostCaption,
	handlePostImage,
	handleDeleteImage,
}) => {
	return (
		<div className="post-item-container">
			{postImage === "" ? (
				<div className="post-image-container">
					<BsImage className="post-icon" />
					<p>
						Drag & Drop or <span>Browse</span> your Images
					</p>
				</div>
			) : (
				<div className="image-container">
					<div className="backdrop-container">
						<IconButton
							aria-label="delete"
							size="small"
							color="error"
							onClick={handleDeleteImage}
						>
							<DeleteIcon className="tb-delete" />
						</IconButton>
					</div>

					<Image
						alt="uploaded image"
						//replace src with  postImage
						src="https://i.postimg.cc/SRCJqhLz/trendy-curly-haired-girl-with-white-sunglasses-red-cap-long-sleeve-blouse-looking-into-camera-holdin.jpg"
						fill={true}
						className="uploaded-image"
					/>
				</div>
			)}

			<div className="caption-container">
				<h6>Caption</h6>
				<TextArea2
					label={"Enter caption..."}
					id={inputId}
					value={postCaption}
					changeValue={(e) => {
						handlePostCaption(e);
					}}
				/>
			</div>
		</div>
	);
};
