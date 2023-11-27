import React from "react";
import "./twitter.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";

const icon = "https://i.postimg.cc/zB83f9MK/pngwing-com-2.png";
const Twitter = () => {
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
		<Nodes title="Twitter" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="twitter"></div>
		</Nodes>
	);
};

//children

const OnFirstMessageTwitter = ({ data, isConnectable }) => {
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
				id="e2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnMessageTwitter = ({ data, isConnectable }) => {
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
				id="e3"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a message</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

//----
const OnFirstCommentTwitter = ({ data, isConnectable }) => {
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
				id="e4"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving a comment</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};
//---
const OnCommentReplyTwitter = ({ data, isConnectable }) => {
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
				id="e5"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On comment reply</p>
			<Tooltip tip={tip} />
		</ChildNodes>
	);
};

export {
	Twitter,
	OnFirstMessageTwitter,
	OnMessageTwitter,
	OnFirstCommentTwitter,
	OnCommentReplyTwitter,
};
