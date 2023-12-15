import React, { useEffect } from "react";
import "./gmail.plugin.scss";
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
import { PluginsInboxReply, PluginsSendMessage } from "../../../tooltip.info";

const icon = "https://i.postimg.cc/KvYQYZhQ/pngwing-com-3.png";

const GmailPlugin = ({ id, data }) => {
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
		<Nodes title="Gmail" type="Plugin" onDelete={deleteNode} icon={icon}>
			<div className="gmail-plugin">
				<div className="id-input">
					<h6>Gmail ID</h6>
					<Inputs2
						node={true}
						type={"text"}
						label={"id"}
						id={"gmailid"}
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

const InboxReplyGmailPlugin = ({ isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<p>Email Reply</p>
			<Tooltip tip={PluginsInboxReply} />
		</ChildNodes>
	);
};

const SendMessageGmailPlugin = ({ id, isConnectable, data }) => {
	const { showToast } = useToast();
	const { setNodes, getNodes } = useReactFlow();

	//select---------------------------------------
	const list = [
		"send to one person",
		"send to a list of people",
		"let AI handle everything",
	];
	const [value, setValue] = useState(
		data.ai ? list[2] : data.email ? list[0] : data.emailList ? list[1] : ""
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
							label: "gmailplugin-sendmessage",
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
						if ("emailList" in node.data) {
							const { emailList, ...dataWithoutValue } =
								node.data;

							node.data = {
								...dataWithoutValue,
								ai: false,
								email: e,
							};
						} else {
							node.data = {
								...node.data,
								email: e,
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
	} = useNodeValues(data.emailList);

	const onSave = () => {
		const cleanedValues = allLists.filter((item) => item.listItem !== "");

		if (cleanedValues !== 0) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if ("email" in node.data) {
							const { email, ...dataWithoutValue } = node.data;

							node.data = {
								...dataWithoutValue,
								ai: false,
								emailList: cleanedValues,
							};
						} else {
							node.data = {
								...node.data,
								emailList: cleanedValues,
							};
						}
					}

					return node;
				})
			);
			setSaveBtn(false);
			showToast("Emails saved successfully", "success");
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
					<h6>Send email</h6>
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
					<p>Email</p>

					<TextArea2
						node={true}
						label={"Compose email..."}
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
							enter email
						</p>
					</Button>
				)}

				{open && (
					<SingleModal
						open={open}
						onClose={onClose}
						initialValue={data.email}
						modalTitle={"Enter email"}
						handleSingleItemChange={handleValueChange}
						inputId={"singleEmail"}
						inputLabel={"Email"}
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
						modalTitle={"Email list"}
						inputLabel={"Email"}
						InputId="Emailplugin"
						allLists={allLists}
						handleDeleteList={handleDeleteList}
						handleListChange={handleListChange}
						handleAddList={handleAddList}
						saveBtn={saveBtn}
						onSave={onSave}
						addBtnName={"Add Email"}
					/>
				)}
			</div>
			{/* <button onClick={seeNodes}>see nodes</button> */}
		</ChildNodes>
	);
};

export { GmailPlugin, InboxReplyGmailPlugin, SendMessageGmailPlugin };
