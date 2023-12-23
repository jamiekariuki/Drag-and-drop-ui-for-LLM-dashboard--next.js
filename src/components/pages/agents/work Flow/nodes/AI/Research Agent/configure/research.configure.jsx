import React, { useState } from "react";
import "./research.configure.scss";
import Modal from "@/components/styled components/modals/modal";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import ResearchSettings from "./settings right/research.settings";
import { useNodeId, useReactFlow } from "reactflow";
import { useToast } from "@/context/ToastContext";
import ResearchNav from "./nav left/research.nav";
import ResearchPrompts from "./prompts middle/research.prompts";
import { useNodeAiContext } from "@/context/nodeAiContext";

const ResearchConfigure = ({ open, onClose }) => {
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
		showToast("Research assistant configure saved successfully", "success");
	};

	return (
		<Modal
			open={open}
			onClose={onClose}
			title={"Research Assistant configure"}
		>
			<div className="research-config">
				<div className="container">
					<div className="left">
						<ResearchNav setNav={setNav} nav={nav} />
					</div>
					<div className="middle">
						<ResearchPrompts nav={nav} />
					</div>
					<div className="right">
						<ResearchSettings />
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

export default ResearchConfigure;
