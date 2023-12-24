import React, { useEffect } from "react";
import "./whatsapp.plugin.scss";
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
	PluginsId,
	PluginsInboxReply,
	PluginsSendMessage,
} from "../plugins.tooltip";

const icon = "https://i.postimg.cc/yYhSxxzZ/pngwing-com-1.png";

const WhatsappPlugin = ({ id, data }) => {
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
		<Nodes title="Whatsapp" type="Plugin" onDelete={deleteNode} icon={icon}>
			<div className="whatsapp-plugin">
				<div className="id-input">
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "3px",
						}}
					>
						<h6>Whatsapp ID</h6>
						<Tooltip tip={PluginsId} />
					</div>
					<Inputs2
						node={true}
						type={"text"}
						label={"id"}
						id={"id"}
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

const InboxReplyWhatsappPlugin = ({ isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="chandle thandle"
			/>
			<p>Inbox Reply</p>
			<Tooltip tip={PluginsInboxReply} />
		</ChildNodes>
	);
};

const SendMessageWhatsappPlugin = ({ id, isConnectable, data }) => {
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
			: data.contact
			? list[0]
			: data.contactList
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
							label: "whatsappplugin-sendmessage",
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

	//contact---------------------------------------
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	const handleValueChange = (e) => {
		if (e !== "") {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if ("contactList" in node.data) {
							const { contactList, ...dataWithoutValue } =
								node.data;

							node.data = {
								...dataWithoutValue,
								ai: false,
								contact: e,
							};
						} else {
							node.data = {
								...node.data,
								contact: e,
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
	} = useNodeValues(data.contactList);

	const onSave = () => {
		const cleanedValues = allLists.filter((item) => item.listItem !== "");

		if (cleanedValues !== 0) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === id) {
						if ("contact" in node.data) {
							const { contact, ...dataWithoutContact } =
								node.data;

							node.data = {
								...dataWithoutContact,
								ai: false,
								contactList: cleanedValues,
							};
						} else {
							node.data = {
								...node.data,
								contactList: cleanedValues,
							};
						}
					}

					return node;
				})
			);
			setSaveBtn(false);
			showToast("Contacts saved successfully", "success");
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
					<p>Message</p>

					<TextArea2
						node={true}
						label={"Type message..."}
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
						initialValue={data.contact}
						modalTitle={"Enter contact"}
						handleSingleItemChange={handleValueChange}
						inputId={"singleContact"}
						inputLabel={"Contact"}
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
						modalTitle={"Contact list"}
						inputLabel={"Contact"}
						InputId="contactplugin"
						allLists={allLists}
						handleDeleteList={handleDeleteList}
						handleListChange={handleListChange}
						handleAddList={handleAddList}
						saveBtn={saveBtn}
						onSave={onSave}
						addBtnName={"Add contact"}
					/>
				)}
			</div>
			{/* <button onClick={seeNodes}>see nodes</button> */}
		</ChildNodes>
	);
};

export { WhatsappPlugin, InboxReplyWhatsappPlugin, SendMessageWhatsappPlugin };
