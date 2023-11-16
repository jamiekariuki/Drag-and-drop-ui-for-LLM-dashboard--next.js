"use client";
import React from "react";
import "./configure.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import { IoDocumentTextOutline } from "react-icons/io5";
import Inputs from "@/components/styled components/inputs/inputs";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";

const ConfigureTool = ({ open, onClose }) => {
	return (
		<Modal open={open} onClose={onClose}>
			<div className="configure-tool">
				<div className="configure-tool-title">
					<h2>Configure Tool</h2>
				</div>

				<div className="configure-tool-container">
					<div className="configure-tool-wrapper">
						<div className=" ct-input-doc">
							<h4>Upload document</h4>
							<div className="ct-upload-doc">
								<IoDocumentTextOutline className="upload-icon" />
								<h6>Click or drag and Drop</h6>
								<p>to upload files</p>
							</div>
						</div>

						<div className="ct-input">
							<h4>Add a title for your project</h4>
							<Inputs type={"text"} label={"Title"} />
						</div>

						<div className="ct-input">
							<h4>Custom prompt</h4>

							<div className="ct-info">
								<InfoIcon className="ct-info-icon" />
								<p>
									Feel free to customize the prompt area if
									you desire specific responses. However, rest
									assured that we've streamlined the process
									for you if no customization is needed.
								</p>
							</div>

							<Inputs
								type={"text area"}
								label={"Enter your pompt..."}
							/>
						</div>
					</div>
				</div>

				<div className="configure-tool-footer">
					<Button
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={onClose}
					>
						<p>submit</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfigureTool;
