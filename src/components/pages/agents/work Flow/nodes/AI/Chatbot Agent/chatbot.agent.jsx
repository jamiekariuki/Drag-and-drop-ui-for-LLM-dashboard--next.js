import Nodes from "@/components/styled components/nodes/nodes";
import { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { TextArea2 } from "@/components/styled components/inputs/inputs";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import Button from "@mui/material/Button";
import ChatbotConfigure from "./configure/chatbot.configure";
import { NodeAiProvider } from "@/context/nodeAiContext";
import {
	aiExtendAgent,
	aiInput,
	aiKnowledgeRetrival,
	aiOutput,
	aiPlugin,
	aiSystemPrompt,
} from "../ai.tooltip";

const icon = "https://i.postimg.cc/zBpQPMgB/icons8-chat-bot-96.png";

const ChatbotAgent = ({ id, data, isConnectable }) => {
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

	//custom prompt
	const { setNodes, getNodes } = useReactFlow();
	const [prompt, setPrompt] = useState(
		data.generalPrompts
			? data.generalPrompts.systemPrompt
				? data.generalPrompts.systemPrompt
				: ""
			: ""
	);
	const promptLength = 1000;
	const handlePromptChange = (e) => {
		if (e.replace(/\s/g, "").length <= promptLength) {
			setPrompt(e);
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === nodeId) {
						node.data.generalPrompts = {
							...node.data.generalPrompts,
							systemPrompt: e,
						};
					}

					return node;
				})
			);
		}
	};

	//configure modal
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	//testing
	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<Nodes
			title="Chat-bot Agent"
			type="AI"
			onDelete={deleteNode}
			icon={icon}
			agent={true}
		>
			<div
				className="nodrag"
				style={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "8px",
					cursor: "default",
				}}
			>
				{/*input*/}
				<ChildNodes agent={true}>
					<Handle
						type="target"
						position={Position.Left}
						id="input"
						isConnectable={isConnectable}
						className="phandle thandle"
						style={{ top: "60px" }}
					/>
					<p>Input</p>
					<Tooltip tip={aiInput} />
				</ChildNodes>

				{/*knowledge*/}
				<ChildNodes agent={true}>
					<Handle
						type="target"
						position={Position.Left}
						id="knowledge"
						isConnectable={isConnectable}
						className="phandle thandle"
						style={{ top: "97px" }}
					/>
					<p>Knowledge retrival</p>
					<Tooltip tip={aiKnowledgeRetrival} />
				</ChildNodes>

				{/*plugin*/}
				<ChildNodes agent={true}>
					<Handle
						type="source"
						position={Position.Right}
						id="plugin"
						isConnectable={isConnectable}
						className="phandle"
						style={{ top: "132px" }}
					/>
					<p>Plugin</p>
					<Tooltip tip={aiPlugin} />
				</ChildNodes>

				{/*extend*/}
				<ChildNodes agent={true}>
					<Handle
						type="source"
						position={Position.Right}
						id="extend"
						isConnectable={isConnectable}
						className="phandle "
						style={{ top: "167px" }}
					/>
					<p>Extend Agent</p>
					<Tooltip tip={aiExtendAgent} />
				</ChildNodes>

				{/*prompt*/}
				<div
					style={{
						width: "100%",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							padding: "0 10px 3px 10px",
						}}
					>
						<p>System prompt</p>
						<Tooltip tip={aiSystemPrompt} />
					</div>

					<div
						className="id-input"
						style={{
							width: "100%",
							padding: "0 10px",
						}}
					>
						<TextArea2
							error={
								prompt.replace(/\s/g, "").length >= promptLength
							}
							node={true}
							label={"Enter prompt..."}
							id={"prompts"}
							value={prompt}
							changeValue={(e) => {
								handlePromptChange(e);
							}}
						/>
					</div>
				</div>

				{/*button*/}
				<div
					style={{
						width: "100%",
						padding: "0 10px",
						marginTop: "-7px",
					}}
				>
					<Button
						variant="outlined"
						size="small"
						disableElevation
						sx={{ width: "100%" }}
						onClick={() => setOpen(true)}
					>
						<p
							style={{
								textTransform: "lowercase",
								color: "#b12f9c",
							}}
						>
							configure
						</p>
					</Button>
				</div>

				<NodeAiProvider
					data={data}
					prompt={prompt}
					setPrompt={setPrompt}
					promptLength={promptLength}
				>
					<ChatbotConfigure open={open} onClose={onClose} />
				</NodeAiProvider>

				{/* <button onClick={seeNodes}>see nodes</button> */}

				{/*output*/}
				<ChildNodes agent={true}>
					<Handle
						type="source"
						position={Position.Right}
						id="output"
						isConnectable={isConnectable}
						className="phandle "
						style={{ top: "369px" }}
					/>
					<p>Output</p>
					<Tooltip tip={aiOutput} />
				</ChildNodes>
			</div>
		</Nodes>
	);
};

export default ChatbotAgent;
