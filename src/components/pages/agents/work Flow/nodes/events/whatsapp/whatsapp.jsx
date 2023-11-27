import React from "react";
import "./whatsapp.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";

const icon = "https://i.postimg.cc/jdPHQW2Z/pngwing-com-1.png";
const Whatsapp = () => {
	const nodeId = useNodeId();
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

	return (
		<Nodes title="Whatsapp" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="whatsapp"></div>
		</Nodes>
	);
};

//children

const OnFirstMessageWhatsapp = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get a message from an account
				you have never interacted with before
			</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Human (plugin)</li>
				<li>ChatBot (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="a2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

const OnMessageWhatsapp = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get a message from an account
				you have interacted with before
			</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Human (plugin)</li>
				<li>ChatBot (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="a3"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

export { Whatsapp, OnFirstMessageWhatsapp, OnMessageWhatsapp };
