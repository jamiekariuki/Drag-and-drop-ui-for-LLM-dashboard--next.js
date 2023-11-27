import React from "react";
import "./instagram.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";

const icon = "https://i.postimg.cc/QC8Hp3Vg/pngwing-com.png";
const Instagram = () => {
	const nodeId = useNodeId();
	//delete node
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
		<Nodes title="Instagram" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="instagram"></div>
		</Nodes>
	);
};

//children

const OnFirstMessageInstagram = ({ data, isConnectable }) => {
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
				id="d2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnMessageInstagram = ({ data, isConnectable }) => {
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
				id="d3"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

//----
const OnFirstCommentInstagram = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get a comment from an account
				you have not interacted with before
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
				id="d4"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a comment</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnCommentReplyInstagram = ({ data, isConnectable }) => {
	const tip = (
		<div>
			<p>
				This node will run everytime you get a reply to a comment from
				an account you had replied to their comment
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
				id="d5"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On comment reply</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

export {
	Instagram,
	OnFirstMessageInstagram,
	OnMessageInstagram,
	OnFirstCommentInstagram,
	OnCommentReplyInstagram,
};
