import PieChartIcon from "@mui/icons-material/PieChart";
import InventoryIcon from "@mui/icons-material/Inventory";
import AppRegistrationSharpIcon from "@mui/icons-material/AppRegistrationSharp";
import ArticleIcon from "@mui/icons-material/Article";
import ChatIcon from "@mui/icons-material/Chat";
import MemoryIcon from "@mui/icons-material/Memory";

//----dashboard

export const NavigationLinks = [
	{
		icon: <PieChartIcon className="nav-icons" />,
		text: "Dashboard",
		link: "/account/dashboard",
	},
	{
		icon: <InventoryIcon className="nav-icons" />,
		text: "Inventory",
		link: "/account/inventory",
	},
	{
		icon: <ChatIcon className="nav-icons" />,
		text: "Tools",
		link: "/account/tools",
	},
	{
		icon: <AppRegistrationSharpIcon className="nav-icons" />,
		text: "Plugins",
		link: "/account/plugins",
	},
	{
		icon: <MemoryIcon className="nav-icons" />,
		text: "Agents",
		link: "/account/agents",
	},

	{
		icon: <ArticleIcon className="nav-icons" />,
		text: "Docs",
		link: "/account/docs",
	},
];
