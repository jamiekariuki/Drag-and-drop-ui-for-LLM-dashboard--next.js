import React from "react";
import "./gmail.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";

const icon = "https://i.postimg.cc/x1P7kd06/pngwing-com-3.png";
const Gmail = () => {
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
		<Nodes title="Gmail" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="gmail"></div>
		</Nodes>
	);
};

//children

const OnFirstMessageGmail = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get an email from an account
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
				id="g2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first email</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

const OnMessageGmail = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get an email from an account
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
				id="g3"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving an email</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

export { Gmail, OnFirstMessageGmail, OnMessageGmail };
