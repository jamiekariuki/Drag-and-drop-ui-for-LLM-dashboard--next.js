"use client";
import React, { useState } from "react";
import "./use.tool.scss";
import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TuneIcon from "@mui/icons-material/Tune";
import MessageInput from "./message input/message.input";
import Messages from "./messages/messages";
import { useRouter } from "next/navigation";
import MessageHistory from "./message history/message.history";
import LastPageIcon from "@mui/icons-material/LastPage";
import ConfigureTool from "./configure tool/configure.tool";

const UseTool = ({ urlTitle }) => {
	const [openConfigure, setOpenConfigure] = useState(false);
	const onCloseConfigure = () => {
		setOpenConfigure(false);
	};
	const router = useRouter();

	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(!open);
	};

	return (
		<div className="use-tool">
			<div className="use-tool-header">
				<IconButton
					aria-label="go back"
					size="small"
					onClick={() => router.back()}
				>
					<KeyboardBackspaceIcon className="ut-back-icon" />
				</IconButton>
				<h1>{urlTitle}</h1>
				<Button
					variant="contained"
					startIcon={<TuneIcon className="ut-add-icon" />}
					size="small"
					className="ut-add-btn "
					disableElevation
					onClick={() => {
						setOpenConfigure(true);
					}}
				>
					<p>configure</p>
				</Button>

				<ConfigureTool
					open={openConfigure}
					onClose={onCloseConfigure}
				/>
			</div>

			<div className="use-tool-container">
				<div className="ut-left">
					<MessageHistory />
				</div>
				<div className="ut-right">
					<div className="ut-mobile-nav">
						<Button
							startIcon={
								<LastPageIcon className="ut-mobile-icon " />
							}
							size="small"
							className="ut-mobile-btn "
							disableElevation
							onClick={onClose}
						>
							<p>history</p>
						</Button>
						<h1>{urlTitle}</h1>
					</div>

					<div
						className="ut-mobile-history"
						style={{
							transform: open && "translateX(0%)",
						}}
					>
						<MessageHistory onClose={onClose} />
					</div>
					<div className="ut-message-container">
						<Messages />
					</div>

					<div className="ut-type-message">
						<div className="m-input">
							<MessageInput />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UseTool;
