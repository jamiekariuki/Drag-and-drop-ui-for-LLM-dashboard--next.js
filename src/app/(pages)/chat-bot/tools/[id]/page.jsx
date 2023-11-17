import React from "react";
import "./page.chat.scss";
import UseTool from "@/components/pages/chat bot/tools/use tool/use.tool";

const Chat = ({ params }) => {
	const param = params.id;

	const urlTitle = param
		.split("-")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");

	return (
		<div className="chat">
			{" "}
			<UseTool urlTitle={urlTitle} />{" "}
		</div>
	);
};

export default Chat;
