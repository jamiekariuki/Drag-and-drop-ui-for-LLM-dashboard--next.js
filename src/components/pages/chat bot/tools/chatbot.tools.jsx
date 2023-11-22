"use client";
import React, { useState } from "react";
import "./chatbot.tools.scss";
import { BsFiletypePdf } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteTool from "./delete tool/delete.tool";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TuneIcon from "@mui/icons-material/Tune";
import AddIcon from "@mui/icons-material/Add";
import { TbWorldSearch } from "react-icons/tb";
import { GoLaw } from "react-icons/go";
import AddTool from "./add tool/add.tool";
import ConfigureTool from "./configure tool/configure.tool";
import Link from "next/link";

const ChatbotTools = () => {
	const ChatBots = [
		{
			title: "Chat with Documents",
			name: "my docs",
			status: "Ready",
			description: "Extract infromation from your PDF document with AI",
		},
		{
			title: "Chat with Website",
			name: "documentation 1",
			status: "Ready",
			description: "Extract infromation from any websiite with AI",
		},
		{
			title: "Chat with Attorney",
			name: "my docs",
			status: "Ready",
			description:
				"Legal advisor based on submited legal documents or case",
		},
	];

	const [indexIt, setIndexIt] = useState(null);

	const [open, setOpen] = useState(false);
	const onOpen = (i) => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	const [openAdd, setOpenAdd] = useState(false);
	const onCloseAdd = () => {
		setOpenAdd(false);
	};

	const [openConfigure, setOpenConfigure] = useState(false);
	const onOpenConfigure = () => {
		setOpenConfigure(true);
	};
	const onCloseConfigure = () => {
		setOpenConfigure(false);
	};

	return (
		<div
			className={ChatBots.length > 1 ? "cb-tools cb-tools2" : "cb-tools"}
		>
			{ChatBots.map((item, index) => (
				<div className="tool-box" key={index}>
					<div className="tool-box-title">
						<div className="tb-left">
							<div className="tb-left-icon-container">
								{item.title === "Chat with Documents" && (
									<BsFiletypePdf className="tb-icon" />
								)}
								{item.title === "Chat with Website" && (
									<TbWorldSearch className="tb-icon" />
								)}
								{item.title === "Chat with Attorney" && (
									<GoLaw className="tb-icon" />
								)}
							</div>
							<div className="tb-left-info">
								<h3>{item.title}:</h3>
								<p>{item.name}</p>
							</div>
						</div>

						<div className="tb-right">
							<IconButton
								aria-label="delete"
								size="small"
								onClick={() => {
									onOpen(index);
								}}
							>
								<DeleteIcon className="tb-delete" />
							</IconButton>

							{open && indexIt === index && (
								<DeleteTool open={open} onClose={onClose} />
							)}
						</div>
					</div>

					<div className="tool-box-info">
						<div className="tb-info">
							<h5>Status:</h5>
							<p>{item.status}</p>
						</div>
						<div className="tb-info">
							<h5>Description:</h5>
							<p>{item.description}</p>
						</div>
					</div>

					<div className="tool-box-btn-container">
						<div className="tbc">
							<Button
								variant="contained"
								startIcon={
									<TuneIcon className="tool-box-icon" />
								}
								size="small"
								className="tool-box-btn "
								disableElevation
								onClick={() => {
									onOpenConfigure(index);
								}}
							>
								<p>configure</p>
							</Button>

							{openConfigure && indexIt === index && (
								<ConfigureTool
									open={openConfigure}
									onClose={onCloseConfigure}
								/>
							)}
							<Link
								href={`/chat-bot/tools/${item.title
									.toLowerCase()
									.split(" ")
									.join("-")}`}
							>
								<Button
									variant="contained"
									endIcon={
										<ArrowForwardIcon className="tool-box-icon" />
									}
									size="small"
									className="tool-box-btn "
									disableElevation
								>
									<p>use</p>
								</Button>
							</Link>
						</div>
					</div>
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
					<h4>Add Tool</h4>
				</div>
			</div>
			<AddTool open={openAdd} onClose={onCloseAdd} />
		</div>
	);
};

export default ChatbotTools;
