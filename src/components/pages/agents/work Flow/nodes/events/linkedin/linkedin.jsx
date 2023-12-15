import React from "react";
import "./linkedin.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";

const icon = "https://i.postimg.cc/PJkmcXNj/pngwing-com-4.png";
const Linkedin = () => {
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
		<Nodes title="Linkedin" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="linkedin"></div>
		</Nodes>
	);
};

//children

const OnFirstMessageLinkedin = ({ data, isConnectable }) => {
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
				id="f2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnMessageLinkedin = ({ data, isConnectable }) => {
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
				id="f3"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

//----
const OnFirstCommentLinkedin = ({ data, isConnectable }) => {
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
				id="f4"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a comment</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnCommentReplyLinkedin = ({ data, isConnectable }) => {
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
				id="f5"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On comment reply</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

export {
	Linkedin,
	OnFirstMessageLinkedin,
	OnMessageLinkedin,
	OnFirstCommentLinkedin,
	OnCommentReplyLinkedin,
};
