import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useEffect, useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Checkbox from "@mui/material/Checkbox";
import {
	PluginsDescription,
	PluginsId,
	PluginsAction,
} from "../plugins.tooltip";

const icon = "https://i.postimg.cc/B6fT33JS/pngwing-com-6.png";

const GoogledocsPlugin = ({ id, data, isConnectable }) => {
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

	/* const allNodes = getNodes();
	const seeNodes = () => {
		console.log(allNodes);
	}; */

	return (
		<Nodes
			title="Google Docs"
			type="Plugin"
			onDelete={deleteNode}
			icon={icon}
		>
			<Handle
				type="target"
				position={Position.Left}
				id="pluginin"
				isConnectable={isConnectable}
				className="phandle thandle"
			/>

			<div style={{ width: "100%" }}>
				<div className="id-input" style={{ width: "100%" }}>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "3px",
						}}
					>
						<h6>Docs ID</h6>
						<Tooltip tip={PluginsId} />
					</div>
					<Inputs2
						node={true}
						type={"text"}
						label={"id"}
						id={"GoogleSheetsid"}
						value={socialId}
						changeValue={(e) => {
							handleIdChange(e);
						}}
					/>
				</div>
			</div>

			<div style={{ width: "100%" }}>
				<div
					className="id-input"
					style={{ width: "100%", marginTop: "5px" }}
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
						<Tooltip tip={PluginsDescription} />
					</div>

					<Inputs2
						node={true}
						type={"text"}
						label={"eg FQA"}
						id={"descriptionfqa"}
						value={description}
						changeValue={(e) => {
							handleDescChange(e);
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

export { GoogledocsPlugin };
