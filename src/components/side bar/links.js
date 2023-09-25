import { IoSettingsSharp } from "react-icons/io5";
import { LuHelpCircle } from "react-icons/lu";
import { BiSolidMessageDetail } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { LuPieChart } from "react-icons/lu";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { PiShareNetwork } from "react-icons/pi";
import { RiDonutChartLine } from "react-icons/ri";
import { AiOutlineBarChart } from "react-icons/ai";
import { GoWorkflow } from "react-icons/go";
import { MdOutlineInventory } from "react-icons/md";
import { LuLayoutList } from "react-icons/lu";
import { AiOutlineTool } from "react-icons/ai";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { LiaTasksSolid } from "react-icons/lia";
import { GoServer } from "react-icons/go";
import { BiTachometer } from "react-icons/bi";
import { VscFileSubmodule } from "react-icons/vsc";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
//import { BiUser } from "react-icons/bi";

//----dashboard
export const first = [
	{
		icon: <LuPieChart />,
		text: "Dashboard",
		link: "/dashboard",
	},
	{
		icon: <AiOutlineUsergroupAdd />,
		text: "Users",
		link: "/users",
	},
	{
		icon: <AiOutlineBarChart />,
		text: "Daily Activity",
		link: "/daily-activity",
	},
	{
		icon: <PiShareNetwork />,
		text: "Business insight",
		link: "/busines-insight",
	},
	{
		icon: <RiDonutChartLine />,
		text: "CRM",
		link: "/crm",
	},

	{
		icon: <GoWorkflow />,
		text: "Work Flow",
		link: "/work-flow",
	},
	{
		icon: <MdOutlineInventory />,
		text: "Inventory",
		link: "/inventory",
	},
];

//----chat bot
export const chatBot = [
	{
		icon: <LuLayoutList />,
		text: "Overview",
		link: "/chatbot-overview",
	},

	{
		icon: <AiOutlineTool />,
		text: "Manage",
		link: "/chatbot-manage",
	},
	{
		icon: <AiOutlineAppstoreAdd />,
		text: "Platforms",
		link: "/chatbot-platform",
	},
];

export const chatBotPlatform = [
	{
		icon: <RiLogoutBoxLine />,
		text: "Platforms",
		list: [
			{
				title: "Facebook",
				link: "/chatbot-platform-facebook",
			},
			{
				title: "Instagram",
				link: "/chatbot-platform-instagram",
			},
			{
				title: "Twitter",
				link: "/chatbot-platform-twitter",
			},
			{
				title: "Email",
				link: "/chatbot-platform-email",
			},
			{
				title: "website",
				link: "/chatbot-platform-website",
			},
		],
	},
];

//-----agents
export const agents = [
	{
		icon: <LuLayoutList />,
		text: "Overview",
		link: "/agents-overview",
	},
	{
		icon: <LiaTasksSolid />,
		text: "Task Queues",
		link: "/agents-task-queues",
	},
	{
		icon: <AiOutlineTool />,
		text: "Manage",
		link: "/agents-contact",
	},
];
//------VPS
export const vps = [
	{
		icon: <BiTachometer />,
		text: "Performance ",
		link: "/vps-performance-metric",
	},
	{
		icon: <GoServer />,
		text: "Resource ",
		link: "/vps-Resource Allocation",
	},
	{
		icon: <VscFileSubmodule />,
		text: "File managment",
		link: "/vps-file-managment",
	},
	{
		icon: <AiOutlineTool />,
		text: "manage",
		link: "/vps-manage",
	},
];

//--------general
export const general = [
	{
		icon: <FaUserCircle />,
		text: "Profile",
		link: "/profile",
	},
	{
		icon: <IoSettingsSharp />,
		text: "Settings",
		link: "/settings",
	},
	{
		icon: <MdOutlineLogout />,
		text: "Logout",
		link: "/logout",
	},
];
