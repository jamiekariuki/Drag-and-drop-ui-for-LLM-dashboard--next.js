import React, { useState } from "react";
import "./chatbot.configure.scss";
import Modal from "@/components/styled components/modals/modal";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import ChatbotSettings from "./settings right/chatbot.settings";
import { useNodeId, useReactFlow } from "reactflow";
import { useToast } from "@/context/ToastContext";
import ChatbotNav from "./nav left/chatbot.nav";
import ChatbotPrompts from "./prompts middle/chatbot.prompts";
import { useNodeAiContext } from "@/context/nodeAiContext";

const ChatbotConfigure = ({ open, onClose }) => {
	const [nav, setNav] = useState("");

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
						settings: configure.settings,
						generalPrompts: configure.generalPrompts,
						timeSchedule: configure.timeSchedule,
						leadsExtraction: configure.leadsExtraction,
						salesAndMarketing: configure.salesAndMarketing,
						multimodal: configure.multimodal,
						knowledgeRetrival: configure.knowledgeRetrival,
					};
				}

				return node;
			})
		);
		setSaveBtn(false);
		showToast("Chat-bot configure saved successfully", "success");
	};

	return (
		<Modal open={open} onClose={onClose} title={"Chat-bot configure"}>
			<div className="chatbot-config">
				<div className="container">
					<div className="left">
						<ChatbotNav setNav={setNav} nav={nav} />
					</div>
					<div className="middle">
						<ChatbotPrompts nav={nav} />
					</div>
					<div className="right">
						<ChatbotSettings />
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

export default ChatbotConfigure;
