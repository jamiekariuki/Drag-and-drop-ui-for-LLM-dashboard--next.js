"use client";
import React, { useEffect, useRef, useState } from "react";
import "./message.input.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => {
		setMessage(e.target.value);
		adjustInputHeight();
	};

	const adjustInputHeight = () => {
		const input = inputRef.current;
		if (input) {
			input.style.height = "auto";
			input.style.height = input.scrollHeight + "px";
		}
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
		<div className="message-input-container">
			<textarea
				ref={inputRef}
				placeholder="Type your message..."
				value={message}
				onChange={handleInputChange}
				onKeyDown={(event) => {
					event.stopPropagation();
				}}
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
	);
};

export default MessageInput;
