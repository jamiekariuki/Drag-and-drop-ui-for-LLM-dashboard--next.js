import React, { useState } from "react";
import "./virtual.configure.scss";
import Modal from "@/components/styled components/modals/modal";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import VirtualSettings from "./settings right/virtual.settings";
import { useNodeId, useReactFlow } from "reactflow";
import { useToast } from "@/context/ToastContext";
import VirtualNav from "./nav left/virtual.nav";
import VirtualPrompts from "./prompts middle/virtual.prompts";
import { useNodeAiContext } from "@/context/nodeAiContext";

const VirtualConfigure = ({ open, onClose }) => {
	const [nav, setNav] = useState("General prompts");

	const { showToast } = useToast();
	const { configure, saveBtn, setSaveBtn } = useNodeAiContext();

	//saving
	const { setNodes } = useReactFlow();
	const nodeId = useNodeId();

	const onSave = () => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						...configure,
					};
				}

				return node;
			})
		);
		setSaveBtn(false);
		showToast(
			"Virtual Assistant agent configure saved successfully",
			"success"
		);
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			title={"Virtual Assistant configure"}
		>
			<div className="virtual-config">
				<div className="container">
					<div className="left">
						<VirtualNav setNav={setNav} nav={nav} />
					</div>
					<div className="middle">
						<VirtualPrompts nav={nav} />
					</div>
					<div className="right">
						<VirtualSettings />
					</div>
				</div>

				<div className="footer-btns">
					<Button
						disabled={!saveBtn}
						variant="contained"
						startIcon={<SaveIcon className="el-icon" />}
						size="small"
						className="el-btn"
						disableElevation
						onClick={onSave}
					>
						<p
							style={{
								//if btn is false it will be grey
								color: saveBtn || "grey",
							}}
						>
							save
						</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default VirtualConfigure;
