import React, { useEffect } from "react";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import SelectOption from "@/components/styled components/inputs/select.option";
import Button from "@mui/material/Button";
import SingleModal from "@/components/styled components/node modals/single modal/single.modal";
import useNodeValues from "@/hooks/nodes hooks/use.node.value";
import ListModal from "@/components/styled components/node modals/list modal/list.modal";
import { useToast } from "@/context/ToastContext";
import {
	PluginsCommentReply,
	PluginsInboxReply,
	PluginsPost,
	PluginsSendMessage,
} from "../../../tooltip.info";
import PostModal from "@/components/styled components/node modals/post modal/post.modal";
import useNodePost from "@/hooks/nodes hooks/use.node.post";

const icon = "https://i.postimg.cc/PJkmcXNj/pngwing-com-4.png";
const LinkedinPlugin = ({ id, data }) => {
	const nodeId = id;
	//deleting node
	const { deleteElements } = useReactFlow();
	const deleteNode = () => {
		const nodesToDelete = [{ id: nodeId }, { parent: nodeId }];
		const edgesToDelete = [{ source: nodeId }, { target: nodeId }];
		deleteElements({
			nodes: nodesToDelete,
			edges: edgesToDelete,
		});
	};

	//id input
	const { setNodes } = useReactFlow();
	const [socialId, setSocialId] = useState(
		data.socialId ? data.socialId : ""
	);

	const handleIdChange = (e) => {
		setSocialId(e);

		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						socialId: e,
					};
				}

				return node;
			})
		);
	};

	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<Nodes title="Linkedin" type="Plugin" onDelete={deleteNode} icon={icon}>
			<div style={{ width: "100%", height: "480px" }}>
				<div className="id-input" style={{ width: "100%" }}>
					<h6 style={{ marginBottom: "3px" }}>Linkedin ID</h6>
					<Inputs2
						node={true}
						type={"text"}
						label={"id"}
						id={"Linkedinid"}
						value={socialId}
						changeValue={(e) => {
							handleIdChange(e);
						}}
					/>
				</div>
			</div>
		</Nodes>
	);
};

const InboxReplyLinkedinPlugin = ({ isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<p>Message Reply</p>
			<Tooltip tip={PluginsInboxReply} />
		</ChildNodes>
	);
};

const CommentReplyLinkedinPlugin = ({ isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<p>Comment Reply</p>
			<Tooltip tip={PluginsCommentReply} />
		</ChildNodes>
	);
};

const SendMessageLinkedinPlugin = ({ id, isConnectable, data }) => {
	const { showToast } = useToast();
	const { setNodes, getNodes } = useReactFlow();

	//select---------------------------------------

	const list = [
		"send to one person",
		"send to a list of people",
		"let AI handle everything",
	];
	const [value, setValue] = useState(
		data.ai
			? list[2]
			: data.account
			? list[0]
			: data.accountList
			? list[1]
			: ""
	);

	//message---------------------------------------
	const [message, setMessage] = useState(data.message ? data.message : "");
	const handleMessageChange = (e) => {
		setMessage(e);
		if (e !== "") {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						node.data = {
							...node.data,
							message: e,
						};
					}

					return node;
				})
			);
		}
	};

	//AI---------------------------------------
	useEffect(() => {
		if (value === list[2]) {
			setMessage("");
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						node.data = {
							label: "linkedinplugin-sendmessage",
							ai: true,
						};
					}

					return node;
				})
			);
		} else {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						node.data = {
							...node.data,
							ai: false,
						};
					}

					return node;
				})
			);
		}
	}, [value]);

	//accounts---------------------------------------
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const handleValueChange = (e) => {
		if (e !== "") {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if ("accountList" in node.data) {
							const { accountList, ...dataWithoutValue } =
								node.data;

							node.data = {
								...dataWithoutValue,
								ai: false,
								account: e,
							};
						} else {
							node.data = {
								...node.data,
								account: e,
							};
						}
					}

					return node;
				})
			);
		}
	};

	//contact list---------------------------------------
	const [open2, setOpen2] = useState(false);
	const onClose2 = () => {
		setOpen2(false);
	};

	const {
		allLists,
		saveBtn,
		setSaveBtn,
		handleAddList,
		handleListChange,
		handleDeleteList,
	} = useNodeValues(data.accountList);

	const onSave = () => {
		const cleanedValues = allLists.filter((item) => item.listItem !== "");

		if (cleanedValues !== 0) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if ("account" in node.data) {
							const { account, ...dataWithoutValue } = node.data;

							node.data = {
								...dataWithoutValue,
								ai: false,
								accountList: cleanedValues,
							};
						} else {
							node.data = {
								...node.data,
								accountList: cleanedValues,
							};
						}
					}

					return node;
				})
			);
			setSaveBtn(false);
			showToast("Accounts saved successfully", "success");
		}
	};

	//test
	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<div className="node-container">
				<div className="child-heading">
					<h6>Send message</h6>
					<Tooltip tip={PluginsSendMessage} />
				</div>

				<div className="n-select">
					<p>Execution</p>
					<SelectOption
						label={"Methods"}
						node={true}
						list={list}
						value={value}
						changeValue={(e) => {
							setValue(e);
						}}
					/>
				</div>

				<div className="n-input">
					<p>message</p>

					<TextArea2
						node={true}
						label={"Enter message..."}
						id={"message"}
						value={message}
						disabled={value !== list[0] && value !== list[1]}
						inputHeight="70px"
						changeValue={(e) => {
							handleMessageChange(e);
						}}
					/>
				</div>

				{value !== list[1] && (
					<Button
						variant="outlined"
						disabled={value !== list[0]}
						size="small"
						className="n-btn "
						disableElevation
						onClick={() => {
							setOpen(true);
						}}
					>
						<p
							style={{
								color: value !== list[0] && "grey",
							}}
						>
							enter number
						</p>
					</Button>
				)}

				{open && (
					<SingleModal
						open={open}
						onClose={onClose}
						initialValue={data.account}
						modalTitle={"Enter Account"}
						handleSingleItemChange={handleValueChange}
						inputId={"singlelinkedin"}
						inputLabel={"Account"}
					/>
				)}

				{value === list[1] && (
					<Button
						variant="outlined"
						disabled={value !== list[1]}
						size="small"
						className="n-btn "
						disableElevation
						onClick={() => {
							setOpen2(true);
						}}
					>
						<p
							style={{
								color: value !== list[1] && "grey",
							}}
						>
							enter list
						</p>
					</Button>
				)}

				{open2 && (
					<ListModal
						open={open2}
						onClose={onClose2}
						modalTitle={"Account list"}
						inputLabel={"Account"}
						InputId="Linkedinplugin"
						allLists={allLists}
						handleDeleteList={handleDeleteList}
						handleListChange={handleListChange}
						handleAddList={handleAddList}
						saveBtn={saveBtn}
						onSave={onSave}
						addBtnName={"Add account"}
					/>
				)}
			</div>
			{/* <button onClick={seeNodes}>see nodes</button> */}
		</ChildNodes>
	);
};

const PostLinkedinPlugin = ({ id, isConnectable, data }) => {
	const { showToast } = useToast();
	const { setNodes, getNodes } = useReactFlow();

	//select---------------------------------------
	const list = ["Configure yourself", "let AI handle everything"];
	const [value, setValue] = useState(
		data.ai ? list[1] : data.post ? list[0] : ""
	);

	//AI---------------------------------------
	useEffect(() => {
		if (value === list[1]) {
			handleDeleteImage();
			handlePostCaption("");

			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						node.data = {
							label: "linkedinplugin-post",
							ai: value === true,
						};
					}

					return node;
				})
			);
		} else {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						node.data = {
							...node.data,
							ai: false,
						};
					}

					return node;
				})
			);
		}
	}, [value]);

	//post---------------------------------------
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const {
		saveBtn,
		setSaveBtn,
		postCaption,
		postImage,
		handlePostCaption,
		handlePostImage,
		handleDeleteImage,
	} = useNodePost(data.postImage, data.postCaption);

	const onSave = () => {
		if (postCaption !== "" || postImage !== "") {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if (postImage !== "" && postCaption === "") {
							node.data = {
								...node.data,
								postImage: postImage,
							};
							showToast("Image saved successfully", "success");
						} else if (postCaption !== "" && postImage === "") {
							node.data = {
								...node.data,
								postCaption: postCaption,
							};
							showToast("Caption saved successfully", "success");
						} else if (postCaption !== "" && postImage !== "") {
							node.data = {
								...node.data,
								postCaption: postCaption,
							};
							showToast("Post saved successfully", "success");
						}
					}

					return node;
				})
			);
			setSaveBtn(false);
		}
	};

	//test
	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<div className="node-container">
				<div className="child-heading">
					<h6>Post</h6>
					<Tooltip tip={PluginsPost} />
				</div>

				<div className="n-select">
					<p>Execution</p>
					<SelectOption
						label={"Methods"}
						node={true}
						list={list}
						value={value}
						changeValue={(e) => {
							setValue(e);
						}}
					/>
				</div>

				<Button
					variant="outlined"
					disabled={value !== list[0]}
					size="small"
					className="n-btn "
					disableElevation
					onClick={() => {
						setOpen(true);
					}}
				>
					<p
						style={{
							color: value !== list[0] && "grey",
						}}
					>
						post details
					</p>
				</Button>

				{open && (
					<PostModal
						inputId={"linkedinCaption"}
						open={open}
						onClose={onClose}
						saveBtn={saveBtn}
						onSave={onSave}
						postImage={postImage}
						postCaption={postCaption}
						handlePostImage={handlePostImage}
						handlePostCaption={handlePostCaption}
						handleDeleteImage={handleDeleteImage}
					/>
				)}
			</div>
			{/* <button onClick={seeNodes}>see nodes</button> */}
		</ChildNodes>
	);
};

export {
	LinkedinPlugin,
	InboxReplyLinkedinPlugin,
	SendMessageLinkedinPlugin,
	CommentReplyLinkedinPlugin,
	PostLinkedinPlugin,
};
