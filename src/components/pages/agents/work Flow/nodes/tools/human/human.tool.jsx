import Nodes from "@/components/styled components/nodes/nodes";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { TextArea2 } from "@/components/styled components/inputs/inputs";

const icon = "https://i.postimg.cc/XvL7qGTd/icons8-message-480.png";

const HumanTool = ({ id, data, isConnectable }) => {
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
	const [humanMessage, setHumanMessage] = useState(
		data.humanMessage ? data.humanMessage : ""
	);

	const handleMessageChange = (e) => {
		setHumanMessage(e);

		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						humanMessage: e,
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
			title="Human input"
			type="Tool"
			onDelete={deleteNode}
			icon={icon}
		>
			<Handle
				type="source"
				position={Position.Right}
				id="toolout"
				isConnectable={isConnectable}
				className="phandle "
			/>
			<Handle
				type="target"
				position={Position.Left}
				id="toolin"
				isConnectable={isConnectable}
				className="phandle thandle"
			/>
			<div style={{ width: "100%", height: "105px", paddingTop: "6px" }}>
				<div className="id-input" style={{ width: "100%" }}>
					<TextArea2
						node={true}
						label={"Type message..."}
						id={"human-message"}
						value={humanMessage}
						inputHeight="90px"
						changeValue={(e) => {
							handleMessageChange(e);
						}}
					/>
				</div>
			</div>
		</Nodes>
	);
};

export default HumanTool;
