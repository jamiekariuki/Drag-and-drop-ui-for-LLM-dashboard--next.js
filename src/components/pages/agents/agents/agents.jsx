"use client";
import React, { useState } from "react";
import "./agents.scss";
import AgentsSearch from "./agents search/agents.search";
import AddIcon from "@mui/icons-material/Add";
import Image from "next/image";
import MoreInfo from "@/components/styled components/menu/more.info";
import EditAgent from "./edit agent/edit.agent";
import DeleteTool from "../../chat bot/tools/delete tool/delete.tool";

const Agents = () => {
	const agents = [
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Documents",
			name: "my docs",
			status: "Ready",
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Website",
			name: "documentation 1",
			status: "Ready",
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Attorney",
			name: "my docs",
			status: "Ready",
		},
		{
			avatar: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
			title: "Chat with Attorney",
			name: "my docs",
			status: "Ready",
		},
	];

	const [open, setOpen] = useState(false);
	const [indexIt, setIndexIt] = useState(null);

	const menuInfo = (x) => {
		setOpen(x === "Edit" && true);
	};

	const menus = ["Edit", "Delete"];

	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className="agents">
			<AgentsSearch />

			<div className="agents-title">
				<h1>Agents hub</h1>
				<p>Feel free to create custom agents or add built agents </p>
			</div>

			<div className="agents-container">
				<div
					className={
						agents.length > 1 ? "cb-tools cb-tools2" : "cb-tools"
					}
				>
					{agents.map((item, index) => (
						<div className="agent-box" key={index}>
							<div className="agent-header">
								<div className="agent-avatar-container">
									<Image
										alt="agent avatar"
										src={item.avatar}
										fill={true}
										className="agent-avatar"
										quality={20}
									/>
								</div>

								<div className="agent-select">
									<div
										onClick={() => {
											setIndexIt(index);
										}}
									>
										<MoreInfo
											list={menus}
											func={menuInfo}
										/>
									</div>

									{open && indexIt === index && (
										<EditAgent
											open={open}
											onClose={onClose}
											agentTitle={item.title}
											avatar={item.avatar}
										/>
									)}
								</div>
							</div>
						</div>
					))}

					<div
						className="agent-box-add"
						onClick={() => {
							setOpenAdd(true);
						}}
					>
						<div className="tb-add">
							<AddIcon className="tb-add" />
							<h4>Create custom Agent</h4>
						</div>
					</div>
					{/* <AddTool open={openAdd} onClose={onCloseAdd} /> */}
				</div>
			</div>
		</div>
	);
};

export default Agents;
