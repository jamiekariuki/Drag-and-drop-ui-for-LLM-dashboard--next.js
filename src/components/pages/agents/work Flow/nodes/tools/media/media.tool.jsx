import Nodes from "@/components/styled components/nodes/nodes";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import ImageIcon from "@mui/icons-material/Image";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import VideocamIcon from "@mui/icons-material/Videocam";

const icon = "https://i.postimg.cc/g2c7dxqf/icons8-play-property-96.png";

const MediaTool = ({ id, data, isConnectable }) => {
	const nodeId = id;
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
		<Nodes
			title="Media upload"
			type="Tool"
			onDelete={deleteNode}
			icon={icon}
		>
			<Handle
				type="source"
				position={Position.Right}
				id="a2"
				isConnectable={isConnectable}
				className="phandle "
			/>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="phandle thandle"
			/>
			<div style={{ width: "100%", height: "133px", paddingTop: "6px" }}>
				<div
					className="input-upload"
					style={{ width: "100%", height: "120px" }}
				>
					<div className="icon-container">
						<ImageIcon className="upload-icon" />
						<AudiotrackIcon className="upload-icon" />
						<VideocamIcon className="upload-icon" />
					</div>

					<p>
						Drag & Drop or <span>Browse</span> <br /> your Media
						files
					</p>
				</div>
			</div>
		</Nodes>
	);
};

export default MediaTool;
