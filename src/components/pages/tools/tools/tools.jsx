"use client";
import React, { useState } from "react";
import "./tools.scss";
import AddIcon from "@mui/icons-material/Add";
import ToolsHeader from "./header/tools.header";
import ToolCard from "./tool card/tool.card";
import useTool from "@/hooks/AI hooks/use.tool";
import CreateTool from "./create tool/create.tool";

const Tools = () => {
	const { allTools, handleAddTool, handleToolChange, handleDeleteTool } =
		useTool();

	const [openAdd, setOpenAdd] = useState(false);
	const onCloseAdd = () => {
		setOpenAdd(false);
	};

	return (
		<div className="tools">
			<ToolsHeader handleAddTool={handleAddTool} />

			<div className="tools-container">
				<div
					className={
						allTools.length > 1 ? "cb-tools cb-tools2" : "cb-tools"
					}
				>
					{allTools.map((item, index) => (
						<div className="tool-box" key={index}>
							<ToolCard
								item={item}
								handleToolChange={handleToolChange}
								handleDeleteTool={handleDeleteTool}
								index={index}
							/>
						</div>
					))}

					<div
						className="tool-box-add"
						onClick={() => {
							setOpenAdd(true);
						}}
					>
						<div className="tb-add">
							<AddIcon className="tb-add" />
							<h4>Add Custom Tool</h4>
						</div>
					</div>

					{openAdd && (
						<CreateTool
							open={openAdd}
							onClose={onCloseAdd}
							handleAddTool={handleAddTool}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default Tools;
