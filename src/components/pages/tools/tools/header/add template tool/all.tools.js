import { GoLaw } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { BsFiletypePdf } from "react-icons/bs";

export const ChatBots = [
	{
		title: "Chat with PDF",
		icon: <BsFiletypePdf className="tool-icon" />,
		desc: "Extract infromation from your PDF document with AI",
		prompt: "",
		docs: "",
		status: "Not ready",
		ai: "Medium",
		tempreture: "",
	},
	{
		title: "Chat with Website",
		icon: <TbWorldSearch className="tool-icon" />,
		desc: "Extract infromation from any websiite with AI",
		prompt: "",
		docs: "",
		status: "Not ready",
		ai: "Medium",
		tempreture: "",
	},
	{
		title: "Chat with Attorney",
		icon: <GoLaw className="tool-icon" />,
		desc: "Legal advisor based on submited legal documents or case",
		prompt: "",
		docs: "",
		status: "Not ready",
		ai: "Medium",
		tempreture: "",
	},
	{
		title: "Research Assistant",
		icon: <GoLaw className="tool-icon" />,
		desc: "Research on any given topic(s) from the web and other platforms",
		prompt: "",
		docs: "",
		status: "Not ready",
		ai: "Medium",
		tempreture: "",
	},
	{
		title: "Custom Tool",
		icon: <GoLaw className="tool-icon" />,
		desc: "Customize this tool anyhow you like",
		status: "Not ready",
		ai: "Medium",
		tempreture: "",
	},
];
