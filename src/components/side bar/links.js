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
		link: "/dashboard",
	},
	{
		icon: <InventoryIcon className="nav-icons" />,
		text: "Inventory",
		link: "/inventory",
	},
	{
		icon: <ChatIcon className="nav-icons" />,
		text: "Tools",
		link: "/tools",
	},
	{
		icon: <AppRegistrationSharpIcon className="nav-icons" />,
		text: "Plugins",
		link: "/plugins",
	},
	{
		icon: <MemoryIcon className="nav-icons" />,
		text: "Agents",
		link: "/agents",
	},

	{
		icon: <ArticleIcon className="nav-icons" />,
		text: "Docs",
		link: "/docs",
	},
];
