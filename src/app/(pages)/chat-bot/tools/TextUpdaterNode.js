"use client";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import "./page.tools.scss";
import { useNodeId } from "reactflow";
//import { useReactFlow } from "react-flow-renderer";

const handleStyle = { left: 1 };

function TextUpdaterNode({ data, isConnectable }) {
	const onChange = useCallback((evt) => {
		console.log(evt.target.value);
	}, []);

	const { setNodes, setEdges } = useReactFlow();

	const updateNode = (x) => {
		setNodes((currentNodes) => {
			const updatedNodes = currentNodes.map((node) => {
				if (node.id === "node-3") {
					return {
						...node,
						data: {
							label: x,
						},
					};
				}
				return node;
			});
			return updatedNodes;
		});
	};

	const id = "new-id";

	const createNewNode = (id) => {
		const newNode = {
			id: id,
			type: "textUpdater",
			position: { x: 100, y: 100 },
			data: {
				label: "New Node",
			},
		};

		const newEdge = {
			id: "new-edge",
			source: "node-1",
			target: newNode.id,
			sourceHandle: "a",
			targetHandle: "b",
		};

		setNodes((nds) => nds.concat(newNode));
		setEdges((nds) => nds.concat(newEdge));
	};

	const nodeId = useNodeId();

	return (
		<div
			className="text-updater-node"
			style={{
				width: "300px",
				height: "400px",
			}}
		>
			<Handle
				type="target"
				position={Position.Right}
				isConnectable={isConnectable}
			/>

			<div>
				<p>node id: {nodeId} </p>
				<button onClick={() => createNewNode(id)}>
					<p>Add</p>
				</button>
			</div>
			<Handle
				type="source"
				position={Position.Bottom}
				id="a"
				style={handleStyle}
				isConnectable={isConnectable}
			/>
			<Handle
				type="target"
				position={Position.Bottom}
				id="b"
				isConnectable={isConnectable}
			/>
		</div>
	);
}

export default TextUpdaterNode;
