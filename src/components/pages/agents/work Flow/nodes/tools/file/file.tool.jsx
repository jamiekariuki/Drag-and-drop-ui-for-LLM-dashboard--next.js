import Nodes from "@/components/styled components/nodes/nodes";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import DescriptionIcon from "@mui/icons-material/Description";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import { toolsDescription } from "../tools.tooltip";

const icon = "https://i.postimg.cc/L4w4JM0C/icons8-file-480.png";

const FileTool = ({ id, data, isConnectable }) => {
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

	const { setNodes } = useReactFlow();
	const [description, setDescription] = useState(
		data.description ? data.description : ""
	);
	const handleDescChange = (e) => {
		setDescription(e);
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						description: e,
					};
				}

				return node;
			})
		);
	};

	return (
		<Nodes
			title="File upload"
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

			<div style={{ width: "100%" }}>
				<div
					className="id-input"
					style={{
						width: "100%",
						marginTop: "5px",
						marginBottom: "10px",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "3px",
						}}
					>
						<h6>Description</h6>
						<Tooltip tip={toolsDescription} />
					</div>

					<Inputs2
						node={true}
						type={"text"}
						label={"eg Company info"}
						id={"descriptionfile"}
						value={description}
						changeValue={(e) => {
							handleDescChange(e);
						}}
					/>
				</div>
			</div>

			<div style={{ width: "100%", height: "133px", paddingTop: "6px" }}>
				<div
					className="input-upload"
					style={{ width: "100%", height: "120px" }}
				>
					<div className="icon-container">
						<DescriptionIcon className="upload-icon" />
					</div>

					<p>
						Drag & Drop or <span>Browse</span> <br /> your Files
					</p>
				</div>
			</div>
		</Nodes>
	);
};

export default FileTool;
