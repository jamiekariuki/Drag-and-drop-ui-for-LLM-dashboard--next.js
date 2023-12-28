"use client";
import React, { useState } from "react";
import "./workflow.nav.scss";
import NavHeader from "./nav header/nav.header";
import NavComponents from "./nav components/nav.components";

const WorkFlowNav = ({ onSave }) => {
	const [open, setOpen] = useState(false);

	const onClose = () => {
		setOpen(!open);
	};

	return (
		<div
			className="workflow-nav"
			style={{
				height: open && "49px",
				overflow: "hidden",
			}}
		>
			<div className="wn-header">
				<NavHeader onClose={onClose} open={open} onSave={onSave} />
			</div>

			<div
				className="wn-wrapper"
				style={{
					height: "100%",
				}}
			>
				<NavComponents />
			</div>
		</div>
	);
};

export default WorkFlowNav;
