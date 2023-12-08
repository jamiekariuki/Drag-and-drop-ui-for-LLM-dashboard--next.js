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
	//-----------------------------------------------------------
	/* {
		id: "linkedinplugin",
		data: { label: "linkedinplugin" },
		position: { x: 0, y: 0 },
		type: "linkedinPlugin",
	},
	{
		id: "linkedinplugin-inboxreply",
		data: { label: "linkedinplugin-inboxreply" },
		position: { x: 10, y: 110 },
		type: "inboxReplyLinkedinPlugin",
		parentNode: "linkedinplugin",
		extent: "parent",
	},
	{
		id: "linkedinplugin-commentreply",
		data: { label: "linkedinplugin-commentreply" },
		position: { x: 10, y: 146 },
		type: "commentReplyLinkedinPlugin",
		parentNode: "linkedinplugin",
		extent: "parent",
	},
	{
		id: "linkedinplugin-sendmessage",
		data: { label: "linkedinplugin-sendmessage" },
		position: { x: 10, y: 182 },
		type: "sendMessageLinkedinPlugin",
		parentNode: "linkedinplugin",
		extent: "parent",
	},
	{
		id: "linkedinplugin-post",
		data: { label: "linkedinplugin-post" },
		position: { x: 10, y: 407 },
		type: "postLinkedinPlugin",
		parentNode: "linkedinplugin",
		extent: "parent",
	}, */
	//----------
	/* {
		d: "2",
		data: { label: "World" },
		position: { x: 100, y: 100 },
	}, */
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
				id: `${connection.source}&${connection.target}`,
			};
			setEdges((oldEdges) => addEdge(newEdge, oldEdges));
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

			const serializedData = event.dataTransfer.getData(
				"application/reactflow"
			);

			if (typeof serializedData === "undefined" || !serializedData) {
				return;
			}

			const droppedData = JSON.parse(serializedData);

			const droppedNodes = droppedData.dragedNodes;
			const alldragedNodes = droppedData.allNodes;

			const parentPosition = reactFlowInstance.screenToFlowPosition({
				x: event.clientX,
				y: event.clientY,
			});

			const value = idGenerate(
				alldragedNodes,
				droppedNodes[0].data.label
			);

			const newNodes = droppedNodes.map((node) => {
				const newNode = {
					...node,
					id: `${node.id}=${value.n}`,
					parentNode: node.extent === "parent" && value.parentId,
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

//functions

const idGenerate = (nodes, label) => {
	const existingItems = nodes.filter((node) => node.data.label === label);

	let nextId = 0;
	if (existingItems.length > 0) {
		const existingIds = existingItems.map((item) =>
			parseInt(item.id.split("=")[1])
		);
		const maxId = Math.max(...existingIds);
		nextId = maxId + 1;
	}

	return { n: nextId, parentId: `${label}=${nextId}` };
};
