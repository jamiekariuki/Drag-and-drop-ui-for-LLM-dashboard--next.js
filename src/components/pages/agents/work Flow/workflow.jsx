"use client";
import { useCallback, useRef, useState } from "react";
import ReactFlow, {
	ReactFlowProvider,
	Controls,
	Background,
	applyNodeChanges,
	applyEdgeChanges,
	addEdge,
} from "reactflow";
import "./workflow.scss";
import "reactflow/dist/style.css";
import { nodeTypes } from "./nodesType";
import WorkFlowNav from "./workflow nav/worflow.nav";

const initialNodes = [
	/* {
		id: "linkedin",
		data: { label: null },
		position: { x: 0, y: 0 },
		type: "linkedin",
	},
	{
		id: "linkedin-onfirstmessage",
		data: { label: null },
		position: { x: 10, y: 45 },
		type: "onFirstMessageLinkedin",
		parentNode: "linkedin",
		extent: "parent",
	},
	{
		id: "linkedin-onmessage",
		data: { label: null },
		position: { x: 10, y: 80 },
		type: "onMessageLinkedin",
		parentNode: "linkedin",
		extent: "parent",
	},
	{
		id: "linkedin-onfirstcomment",
		data: { label: null },
		position: { x: 10, y: 115 },
		type: "onFirstCommentLinkedin",
		parentNode: "linkedin",
		extent: "parent",
	},
	{
		id: "linkedin-oncommentreply",
		data: { label: null },
		position: { x: 10, y: 150 },
		type: "onCommentReplyLinkedin",
		parentNode: "linkedin",
		extent: "parent",
	}, */
	//-----------------------------------------------------------
	/* {
		id: "schedules",
		data: { label: null },
		position: { x: 0, y: 0 },
		type: "schedules",
	},
	{
		id: "Schedules-ontime",
		data: { label: null },
		position: { x: 10, y: 45 },
		type: "onTimeSchedules",
		parentNode: "schedules",
		extent: "parent",
	},
	{
		id: "Schedules-onday",
		data: { label: null },
		position: { x: 10, y: 140 },
		type: "onDaySchedules",
		parentNode: "schedules",
		extent: "parent",
	},
	{
		id: "Schedules-ondate",
		data: { label: null },
		position: { x: 10, y: 270 },
		type: "onDateSchedules",
		parentNode: "schedules",
		extent: "parent",
	},

	{
		id: "Schedules-custom",
		data: { label: null },
		position: { x: 10, y: 367 },
		type: "customSchedules",
		parentNode: "schedules",
		extent: "parent",
	}, */

	//----
	{
		id: "2",
		data: { label: "World" },
		position: { x: 100, y: 100 },
	},
];

const Workflow = () => {
	//-----initials
	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState([]);
	const onNodesChange = useCallback(
		(changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[]
	);
	const onEdgesChange = useCallback(
		(changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),

		[]
	);
	const onConnect = useCallback(
		(connection) => {
			const newEdge = {
				...connection,
				id: `${connection.source}-${connection.target}`,
			};
			setEdges((oldEdges) => addEdge(newEdge, oldEdges));
			console.log(edges);
		},
		[setEdges]
	);

	//-----DND
	const reactFlowWrapper = useRef(null);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

	const onDragOver = useCallback((event) => {
		event.preventDefault();
		event.dataTransfer.dropEffect = "move";
	}, []);

	const onDrop = useCallback(
		(event) => {
			event.preventDefault();

			const serializedNodes = event.dataTransfer.getData(
				"application/reactflow"
			);

			if (typeof serializedNodes === "undefined" || !serializedNodes) {
				return;
			}

			const droppedNodes = JSON.parse(serializedNodes);

			const parentPosition = reactFlowInstance.screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const newNodes = droppedNodes.map((node) => {
				const newNode = {
					...node,
					position:
						node.extent === "parent"
							? node.position
							: parentPosition,
				};

				return newNode;
			});

			setNodes((nds) => nds.concat(newNodes));
		},
		[reactFlowInstance]
	);

	return (
		<ReactFlowProvider>
			<div
				style={{ height: "100%", width: "100%" }}
				className="reactflow-wrapper"
				ref={reactFlowWrapper}
			>
				<ReactFlow
					nodes={nodes}
					onNodesChange={onNodesChange}
					edges={edges}
					onEdgesChange={onEdgesChange}
					onConnect={onConnect}
					nodeTypes={nodeTypes}
					fitView
					minZoom={0.5}
					maxZoom={1.2}
					onInit={setReactFlowInstance}
					onDrop={onDrop}
					onDragOver={onDragOver}
				>
					<Background />
					<Controls />
					<WorkFlowNav />
				</ReactFlow>
			</div>
		</ReactFlowProvider>
	);
};

export default Workflow;
