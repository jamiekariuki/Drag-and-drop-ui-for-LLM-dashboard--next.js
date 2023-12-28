import React from "react";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import {
	EventsId,
	EventsOnCommentReply,
	EventsOnFirstComment,
	EventsOnFirstMessage,
	EventsOnMessageReply,
} from "../events.tooltip";

const icon = "https://i.postimg.cc/PJkmcXNj/pngwing-com-4.png";
const Linkedin = ({ data }) => {
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

	//id input
	const { setNodes } = useReactFlow();
	const [socialId, setSocialId] = useState(
		data.socialId ? data.socialId : ""
	);

	const handleIdChange = (e) => {
		setSocialId(e);

		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						socialId: e,
					};
				}

				return node;
			})
		);
	};

	return (
		<Nodes title="Linkedin" type="Event" onDelete={deleteNode} icon={icon}>
			<div style={{ width: "100%", height: "195px" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						marginBottom: "3px",
					}}
				>
					<h6>Linkedin ID</h6>
					<Tooltip tip={EventsId} />
				</div>
				<Inputs2
					node={true}
					type={"text"}
					label={"id"}
					id={"lieventid"}
					value={socialId}
					changeValue={(e) => {
						handleIdChange(e);
					}}
				/>
			</div>
		</Nodes>
	);
};

//children

const OnFirstMessageLinkedin = ({ data, isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="onfirstmessage"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first message</p>
			<Tooltip tip={EventsOnFirstMessage} />
		</ChildNodes>
	);
};
//---
const OnMessageLinkedin = ({ data, isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="onmessagereply"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On message reply</p>
			<Tooltip tip={EventsOnMessageReply} />
		</ChildNodes>
	);
};

//----
const OnFirstCommentLinkedin = ({ data, isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="onfirstcomment"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On recieving first comment</p>
			<Tooltip tip={EventsOnFirstComment} />
		</ChildNodes>
	);
};
//---
const OnCommentReplyLinkedin = ({ data, isConnectable }) => {
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="oncommentreply"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<p>On comment reply</p>
			<Tooltip tip={EventsOnCommentReply} />
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
