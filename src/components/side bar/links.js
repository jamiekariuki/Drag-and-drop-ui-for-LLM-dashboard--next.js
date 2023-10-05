import PieChartIcon from "@mui/icons-material/PieChart";
import PeopleIcon from "@mui/icons-material/People";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import PolylineIcon from "@mui/icons-material/Polyline";
import InventoryIcon from "@mui/icons-material/Inventory";
import ViewListIcon from "@mui/icons-material/ViewList";
import BuildIcon from "@mui/icons-material/Build";
import AppRegistrationSharpIcon from "@mui/icons-material/AppRegistrationSharp";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

//----dashboard
export const first = [
	{
		icon: <PieChartIcon />,
		text: "Dashboard",
		link: "/",
	},
	{
		icon: <PeopleIcon />,
		text: "Users",
		link: "/users",
	},
	{
		icon: <EqualizerIcon />,
		text: "Daily Activity",
		link: "/daily-activity",
	},
	{
		icon: <BubbleChartIcon />,
		text: "Business insight",
		link: "/busines-insight",
	},
	{
		icon: <DataSaverOffIcon />,
		text: "CRM",
		link: "/crm",
	},
	{
		icon: <PolylineIcon />,
		text: "Work Flow",
		link: "/work-flow",
	},
	{
		icon: <InventoryIcon />,
		text: "Inventory",
		link: "/inventory",
	},
];

//----chat bot
export const chatBot = [
	{
		icon: <ViewListIcon />,
		text: "Overview",
		link: "/chatbot-overview",
	},

	{
		icon: <BuildIcon />,
		text: "Manage",
		link: "/chatbot-manage",
	},
	{
		icon: <AppRegistrationSharpIcon />,
		text: "Platforms",
		link: "/chatbot-platform",
	},
];

export const chatBotPlatform = [
	{
		icon: <AppRegistrationSharpIcon />,
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
		icon: <ViewListIcon />,
		text: "Overview",
		link: "/agents-overview",
	},
	{
		icon: <PlaylistAddCheckIcon />,
		text: "Task Queues",
		link: "/agents-task-queues",
	},
	{
		icon: <BuildIcon />,
		text: "Manage",
		link: "/agents-contact",
	},
];
//------VPS
export const vps = [
	{
		icon: <SpeedIcon />,
		text: "Performance ",
		link: "/vps-performance-metric",
	},
	{
		icon: <StorageIcon />,
		text: "Resource ",
		link: "/vps-Resource Allocation",
	},
	{
		icon: <FolderCopyIcon />,
		text: "File managment",
		link: "/vps-file-managment",
	},
	{
		icon: <BuildIcon />,
		text: "manage",
		link: "/vps-manage",
	},
];

//--------general
export const general = [
	{
		icon: <AccountCircleIcon />,
		text: "Profile",
		link: "/profile",
	},
	{
		icon: <SettingsIcon />,
		text: "Settings",
		link: "/settings",
	},
	{
		icon: <LogoutIcon />,
		text: "Logout",
		link: "/logout",
	},
];
