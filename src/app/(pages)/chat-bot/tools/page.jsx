"use client";
//import React from "react";
import "./page.tools.scss";
//import ChatbotTools from "@/components/pages/chat bot/tools/chatbot.tools";

/* const Tools = () => {
	return (
		<div className="tools">
			 <div className="tools-nav">
				<div className="tools-search">
					<div class="group">
						<svg
							class="icon"
							aria-hidden="true"
							viewBox="0 0 24 24"
						>
							<g>
								<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
							</g>
						</svg>
						<input
							placeholder="Search..."
							type="search"
							class="input"
						/>
					</div>
				</div>
			</div>

			<div className="chat-bot-heading">
				<h1>ChatBot Tools</h1>
				<p>Custom Tools: Personalize Features for Your Needs</p>
			</div>
			<div className="tools-container">
				<ChatbotTools />
			</div> 
		</div>
	);
}; 

export default Tools;
*/

/* import { useState, useCallback } from "react";
import ReactFlow, {
	Controls,
	Background,
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
	{
		id: "1",
		data: { label: "Hello there" },
		position: { x: 0, y: 0 },
		type: "input",
	},
	{
		id: "2",
		data: { label: "World" },
		position: { x: 100, y: 100 },
	},
];

const initialEdges = [
	{
		id: "1-2",
		source: "1",
		target: "2",
		label: "to the next node",
		type: "step",
	},
];

function Flow() {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);
	//console.log(nodes);

	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[]
	);

	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	return (
		<div style={{ height: "90vh", width: "100%" }}>
			<ReactFlow
				nodes={nodes}
				onNodesChange={onNodesChange}
				edges={edges}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<Background />
				<Controls />
			</ReactFlow>
		</div>
	);
}
export default Flow; */
/* 
import { useCallback, useState } from "react";
import ReactFlow, {
	Controls,
	Background,
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	ReactFlowProvider,
} from "reactflow";
import "reactflow/dist/style.css";
import TextUpdaterNode from "./TextUpdaterNode.js";
import "./page.tools.scss";

const rfStyle = {
	backgroundColor: "#B8CEFF",
};

const initialNodes = [
	{
		id: "node-1",
		type: "textUpdater",
		position: { x: 0, y: 0 },
		data: { value: 123 },
	},
	{
		id: "node-2",
		type: "output",
		targetPosition: "top",
		position: { x: 0, y: 200 },
		data: { label: "node 2" },
	},
	{
		id: "node-3",
		type: "output",
		targetPosition: "top",
		position: { x: 200, y: 200 },
		data: { label: "node 3" },
	},
];

const initialEdges = [
	{ id: "edge-1", source: "node-1", target: "node-2", sourceHandle: "a" },
	{ id: "edge-2", source: "node-1", target: "node-3", sourceHandle: "b" },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };

function Flow() {
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges);

	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	);
	const onConnect = useCallback(
		(connection) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);
	ReactFlowProvider;
	return (
		<div style={{ height: "90vh", width: "100%" }}>
			<ReactFlowProvider>
				<ReactFlow
					nodes={nodes}
					edges={edges}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					fitView
					minZoom={0.5}
					maxZoom={1}
					// style={rfStyle}
				>
					<Background />
					<Controls />
				</ReactFlow>
			</ReactFlowProvider>
		</div>
	);
}

export default Flow;
 */
