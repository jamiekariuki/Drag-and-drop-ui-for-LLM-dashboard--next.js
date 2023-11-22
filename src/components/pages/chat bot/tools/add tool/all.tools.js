import { GoLaw } from "react-icons/go";
import { TbWorldSearch } from "react-icons/tb";
import { BsFiletypePdf } from "react-icons/bs";

export const ChatBots = [
	{
		title: "Chat with PDF",
		icon: <BsFiletypePdf className="add-tool-icon" />,
		description: "Extract infromation from your PDF document with AI",
	},
	{
		title: "Chat with Website",
		icon: <TbWorldSearch className="add-tool-icon" />,
		description: "Extract infromation from any websiite with AI",
	},
	{
		title: "Chat with Attorney",
		icon: <GoLaw className="add-tool-icon" />,
		description: "Legal advisor based on submited legal documents or case",
	},
	{
		title: "Research Assistant",
		icon: <GoLaw className="add-tool-icon" />,
		description:
			"Research on any given topic(s) from the web and other platforms",
	},
	{
		title: "Custom Tool",
		icon: <GoLaw className="add-tool-icon" />,
		description: "Customize this tool anyhow you like",
	},
];
