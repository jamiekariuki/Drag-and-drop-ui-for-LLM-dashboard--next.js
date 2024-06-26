"use client";
import { useCallback, useEffect, useRef, useState } from "react";
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
import { useToast } from "@/context/ToastContext";

const flowKey = "nexusfront-flow";

const Workflow = () => {
	//-----initials
	const [nodes, setNodes] = useState([]);
	const [edges, setEdges] = useState([]);
	const [reactFlowInstance, setReactFlowInstance] = useState(null);

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

	//-----saving
	const { showToast } = useToast();
	const onSave = useCallback(() => {
		if (reactFlowInstance) {
			const flow = reactFlowInstance.toObject();
			localStorage.setItem(flowKey, JSON.stringify(flow));

			//send to db here

			showToast("Workflow  saved successfully", "success");
		}
	}, [reactFlowInstance]);

	//-----fetching
	useEffect(() => {
		const restoreFlow = async () => {
			const flow = JSON.parse(localStorage.getItem(flowKey));

			if (flow) {
				setNodes(flow.nodes || []);
				setEdges(flow.edges || []);
			}
		};

		restoreFlow();
	}, []);

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
					<WorkFlowNav onSave={onSave} />
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
