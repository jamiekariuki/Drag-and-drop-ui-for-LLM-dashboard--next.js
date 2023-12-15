import Nodes from "@/components/styled components/nodes/nodes";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { TextArea2 } from "@/components/styled components/inputs/inputs";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import Button from "@mui/material/Button";

const icon = "https://i.postimg.cc/XvL7qGTd/icons8-message-480.png";

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
	const { setNodes } = useReactFlow();
	const [prompt, setPrompt] = useState(
		data.customPrompt ? data.customPrompt : ""
	);

	const handlePromptChange = (e) => {
		setPrompt(e);

		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						customPrompt: e,
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
						id="chatbot-input"
						isConnectable={isConnectable}
						className="phandle thandle"
						style={{ top: "60px" }}
					/>
					<p>Input</p>
					<Tooltip tip={<p>Input</p>} />
				</ChildNodes>

				{/*knowledge*/}
				<ChildNodes agent={true}>
					<Handle
						type="target"
						position={Position.Left}
						id="chatbot-knowledge"
						isConnectable={isConnectable}
						className="phandle thandle"
						style={{ top: "97px" }}
					/>
					<p>Knowledge retrival</p>
					<Tooltip tip={<p>Input</p>} />
				</ChildNodes>

				{/*plugin*/}
				<ChildNodes agent={true}>
					<Handle
						type="target"
						position={Position.Right}
						id="chatbot-plugin"
						isConnectable={isConnectable}
						className="phandle"
						style={{ top: "132px" }}
					/>
					<p>Plugin</p>
					<Tooltip tip={<p>Input</p>} />
				</ChildNodes>

				{/*extend*/}
				<ChildNodes agent={true}>
					<Handle
						type="source"
						position={Position.Right}
						id="chatbot-extend"
						isConnectable={isConnectable}
						className="phandle "
						style={{ top: "167px" }}
					/>
					<p>Extend Agent</p>
					<Tooltip tip={<p>Input</p>} />
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
						<p>Custom prompt</p>
						<Tooltip tip={<p>Input</p>} />
					</div>

					<div
						className="id-input"
						style={{
							width: "100%",
							padding: "0 10px",
						}}
					>
						<TextArea2
							node={true}
							label={"Enter prompt..."}
							id={"chatbot-prompt"}
							value={prompt}
							//	inputHeight="0px"
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

				{/*output*/}
				<ChildNodes agent={true}>
					<Handle
						type="source"
						position={Position.Right}
						id="chatbot-output"
						isConnectable={isConnectable}
						className="phandle "
						style={{ top: "369px" }}
					/>
					<p>Output</p>
					<Tooltip tip={<p>Input</p>} />
				</ChildNodes>
			</div>
		</Nodes>
	);
};

export default ChatbotAgent;
