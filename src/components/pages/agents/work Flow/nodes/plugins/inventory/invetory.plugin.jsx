import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import { PluginsAction } from "../../../tooltip.info";
import Checkbox from "@mui/material/Checkbox";

const icon = "https://i.postimg.cc/sDHj58RJ/icons8-folder-480.png";

const InventoryPlugin = ({ id, data }) => {
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

	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<Nodes
			title="Inventory"
			type="Plugin"
			onDelete={deleteNode}
			icon={icon}
		>
			<Handle
				type="target"
				position={Position.Left}
				id="a2"
				isConnectable={isConnectable}
				className="phandle thandle"
			/>
			<div style={{ width: "100%", height: "131px" }}>
				<div className="id-input" style={{ width: "100%" }}>
					<h6 style={{ marginBottom: "3px" }}> Category name</h6>
					<Inputs2
						node={true}
						type={"text"}
						label={"id"}
						id={"inventoryid"}
						value={socialId}
						changeValue={(e) => {
							handleIdChange(e);
						}}
					/>
				</div>
			</div>
			<Actions data={data} nodeId={nodeId} setNodes={setNodes} />
		</Nodes>
	);
};

const Actions = ({ data, nodeId, setNodes }) => {
	const [actions, setActions] = useState(
		data.action
			? data.actions
			: { create: false, read: false, update: false, delete: false }
	);

	const handleChange = (e, type) => {
		setActions((prevActions) => ({
			...prevActions,
			[type]: e,
		}));
	};

	useEffect(() => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						actions: actions,
					};
				}

				return node;
			})
		);
	}, [actions]);

	return (
		<div
			style={{
				width: "100%",
				marginTop: "20px",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					padding: "0 10px 3px 10px",
				}}
			>
				<h6>Actions</h6>
				<Tooltip tip={PluginsAction} />
			</div>

			<div>
				<div style={actionStyle}>
					<Checkbox
						checked={actions.create}
						size="small"
						onChange={(e) => {
							handleChange(e.target.checked, "create");
						}}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<p>Create</p>
				</div>
				<div style={actionStyle}>
					<Checkbox
						checked={actions.read}
						size="small"
						onChange={(e) => {
							handleChange(e.target.checked, "read");
						}}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<p>Read</p>
				</div>
				<div style={actionStyle}>
					<Checkbox
						checked={actions.update}
						size="small"
						onChange={(e) => {
							handleChange(e.target.checked, "update");
						}}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<p>Update</p>
				</div>
				<div style={actionStyle}>
					<Checkbox
						checked={actions.delete}
						size="small"
						onChange={(e) => {
							handleChange(e.target.checked, "delete");
						}}
						inputProps={{ "aria-label": "controlled" }}
					/>
					<p>Delete</p>
				</div>
			</div>
		</div>
	);
};

const actionStyle = {
	display: "flex",
	gap: "5px",
	alignItems: "center",
};

export { InventoryPlugin };
