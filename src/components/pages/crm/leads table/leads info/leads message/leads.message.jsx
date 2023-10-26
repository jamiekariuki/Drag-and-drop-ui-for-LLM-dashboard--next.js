"use client";
import React, { useEffect, useRef, useState } from "react";
import "./leads.message.scss";
import Image from "next/image";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const LeadsMessage = ({ userData }) => {
	const [openM, setOPenM] = useState(false);
	const [openA, setOPenA] = useState(false);

	const handleM = () => {
		setOPenM(true);
		setOPenA(false);
	};

	const handleA = () => {
		setOPenM(false);
		setOPenA(true);
	};

	const [message, setMessage] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => {
		setMessage(e.target.value);
		adjustInputHeight();
	};

	const adjustInputHeight = () => {
		const input = inputRef.current;
		input.style.height = "auto";
		input.style.height = input.scrollHeight + "px";
	};

	useEffect(() => {
		adjustInputHeight();
	}, [message]);

	const sendMessage = () => {
		if (message.trim() !== "") {
			//call api

			console.log("Message sent:", message);

			setMessage("");
		}
	};

	return (
		<div className="leads-message">
			<div
				className="leads-message-container"
				style={{
					backgroundColor: openM && "transparent",
				}}
			>
				<div className="lead-message-title" onClick={handleM}>
					<h4>Send direct message</h4>
					{openM || (
						<p>
							This section is your direct line to communicate with
							your lead from their source. Feel free to send
							messages, inquiries, or updates, all conveniently
							within this space.
						</p>
					)}
				</div>

				<div
					className="lead-inner-container"
					style={{
						maxHeight: openM ? "700px" : "0px",
					}}
				>
					<div className="message-wrapper">
						<div className="recivers-info">
							<div className="recivers-info-profile">
								<Image
									className="recivers-info-pic"
									src={userData.profilePicture}
									alt="avatar"
									fill={true}
								/>
							</div>

							<div className="recivers-info-details">
								<h5>
									This message is being sent to:{" "}
									<span>{userData.name} </span>{" "}
								</h5>
								<h5>
									via: <span>{userData.source}</span> wich is
									the lead source
								</h5>
							</div>
						</div>

						<div className="message-input-container">
							<textarea
								ref={inputRef}
								placeholder="Type your message..."
								value={message}
								onChange={handleInputChange}
							/>
							<Button
								disabled={message.trim() === ""}
								disableElevation
								variant="contained"
								size="small"
								endIcon={<SendIcon />}
								className="send-btn"
								onClick={sendMessage}
							>
								<p
									style={{
										color: message.trim() !== "" && "white",
									}}
								>
									Send
								</p>
							</Button>
						</div>
					</div>
					<button
						className="lead-close-btn"
						onClick={() => {
							setOPenM(false);
						}}
					>
						<p>close</p>
					</button>
				</div>
			</div>

			<div
				className="leads-message-container"
				style={{
					backgroundColor: openA && "transparent",
				}}
			>
				<div className="lead-message-title" onClick={handleA}>
					<h4>Assign AI to send message</h4>

					{openA || (
						<p>
							Assign an AI Agent to send messages and streamline
							your outreach. Efficient and effective, it's lead
							management made easy
						</p>
					)}
				</div>

				<div
					className="lead-inner-container"
					style={{
						maxHeight: openA ? "700px" : "0px",
					}}
				>
					<div className="message-wrapper">
						<div className="recivers-info">
							<div className="recivers-info-profile">
								<Image
									className="recivers-info-pic"
									src={userData.profilePicture}
									alt="avatar"
									fill={true}
								/>
							</div>

							<div className="recivers-info-details">
								<h5>
									An AI agent will be assigned to send a
									message to: <span>{userData.name} </span>{" "}
								</h5>
								<h5>
									via: <span>{userData.source}</span> wich is
									the lead source
								</h5>
							</div>
						</div>

						<div className="ai-note-wrapper">
							<div className="ai-note">
								<p>
									<span>NOTE:</span> If you have enabled
									Marketing Agents, please note that AI will
									eventually handle the message, ensuring a
									prompt response. There is no need to send a
									message now.
								</p>
							</div>

							<button className="agent-btn">
								<p>Enable marketing agent</p>
								<ArrowForwardIcon className="agent-btn-icon" />
							</button>
						</div>

						<Button
							disableElevation
							variant="contained"
							size="small"
							endIcon={<SendIcon />}
							className="send-ai-btn"
						>
							<p>Assign AI to send a message</p>
						</Button>
					</div>

					<button
						className="lead-close-btn"
						onClick={() => {
							setOPenA(false);
						}}
					>
						<p>close</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LeadsMessage;
