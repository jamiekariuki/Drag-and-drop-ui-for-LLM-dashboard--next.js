"use client";
import React, { useState } from "react";
import "./configure.tool.scss";
import Modal from "@/components/styled components/modals/modal";
import { IoDocumentTextOutline } from "react-icons/io5";
import {
	Inputs2,
	TextArea2,
} from "@/components/styled components/inputs/inputs";
import InfoIcon from "@mui/icons-material/Info";
import { Button } from "@mui/material";
import SelectOption from "@/components/styled components/inputs/select.option";
import Slider from "@mui/material/Slider";

const ConfigureTool = ({
	open,
	onClose,
	item /* handleToolChange, index */,
}) => {
	const [formData, setFormData] = useState(item);
	const [saveBtn, setSaveBtn] = useState(false);

	const maxTitleLength = 20;
	const maxDescLength = 70;
	const maxPromptLength = 1000;

	const handleChange = (name, value) => {
		const updatedFormData = {
			...formData,
			[name]: value,
		};

		setSaveBtn(true);

		if (
			name === "prompt" &&
			value.replace(/\s/g, "").length <= maxPromptLength
		) {
			setFormData(updatedFormData);
		} else if (name == "ai" || name == "temprature") {
			setFormData(updatedFormData);
		}
	};

	const aiList = ["Low", "Medium", "High"];

	return (
		<Modal open={open} onClose={onClose} title={"Configure tool"}>
			<div className="configure-tool">
				<div className="config-tool-wrapper">
					<div className="config-left"></div>

					<div className="config-right">
						<div className="configure-tool-wrapper">
							<div className="ct-input">
								<h3>Intelligence Level</h3>
								<SelectOption
									label={"ai level"}
									list={aiList}
									//value={formData.ai}
									changeValue={(e) => {
										handleChange("ai", e);
									}}
								/>
							</div>

							<div className="ct-input">
								<h3>Temprature</h3>
								<Slider
									aria-label="Temperature"
									//	value={formData.temprature}
									onChange={(e) => {
										handleChange("temprature", e);
									}}
									//getAriaValueText={valuetext}
									valueLabelDisplay="auto"
									step={1}
									marks
									min={0}
									max={10}
								/>
							</div>

							<div className="ct-input">
								<h3>Custom prompt</h3>

								<TextArea2
									/* error={
										formData.desc.replace(/\s/g, "")
											.length >= maxPromptLength
									} */
									label={"Enter your prompt..."}
									id={"tool-prompt-e2"}
									//	value={formData.prompt}
									inputHeight={"150px"}
									changeValue={(e) => {
										handleChange("prompt", e);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="configure-tool-footer">
					<Button
						//disabled={ !saveBtn || formData.title === "" }
						variant="contained"
						size="small"
						className="ct-submit-btn "
						disableElevation
						onClick={() => {
							//	handleToolChange(formData, index);
							onClose();
							setSaveBtn(false);
						}}
					>
						<p
							style={
								{
									//if btn is false it will be grey
									/* color:
										saveBtn &&
										formData.title === "" &&
									 	"grey",*/
								}
							}
						>
							save
						</p>
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default ConfigureTool;
