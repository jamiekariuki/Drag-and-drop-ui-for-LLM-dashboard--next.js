import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AppsIcon from "@mui/icons-material/Apps";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";

export const nodesData = [
	{
		title: "Events",
		icon: PendingActionsIcon,
		list: [
			{
				title: "Schedules",
				nodes: [
					{
						id: "schedules",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "schedules",
					},
					{
						id: "Schedules-ontime",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onTimeSchedules",
						parentNode: "schedules",
						extent: "parent",
					},
					{
						id: "Schedules-onday",
						data: { label: null },
						position: { x: 10, y: 140 },
						type: "onDaySchedules",
						parentNode: "schedules",
						extent: "parent",
					},
				],
			},
			{
				title: "Gmail",
				nodes: [
					{
						id: "gmail",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "gmail",
					},

					{
						id: "gmail-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageGmail",
						parentNode: "gmail",
						extent: "parent",
					},

					{
						id: "gmail-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageGmail",
						parentNode: "gmail",
						extent: "parent",
					},
				],
			},
			{
				title: "WhatsApp",
				nodes: [
					{
						id: "whatsapp",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "whatsapp",
					},

					{
						id: "whatsapp-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageWhatsapp",
						parentNode: "whatsapp",
						extent: "parent",
					},

					{
						id: "whatsapp-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageWhatsapp",
						parentNode: "whatsapp",
						extent: "parent",
					},
				],
			},
			{
				title: "Instagram",
				nodes: [
					{
						id: "instagram",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "instagram",
					},

					{
						id: "instagram-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageInstagram",
						parentNode: "instagram",
						extent: "parent",
					},

					{
						id: "instagram-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageInstagram",
						parentNode: "instagram",
						extent: "parent",
					},

					{
						id: "instagram-onfirstcomment",
						data: { label: null },
						position: { x: 10, y: 115 },
						type: "onFirstCommentInstagram",
						parentNode: "instagram",
						extent: "parent",
					},
					{
						id: "instagram-oncommentreply",
						data: { label: null },
						position: { x: 10, y: 150 },
						type: "onCommentReplyInstagram",
						parentNode: "instagram",
						extent: "parent",
					},
				],
			},
			{
				title: "Twitter",
				nodes: [
					{
						id: "twitter",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "twitter",
					},

					{
						id: "twitter-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageTwitter",
						parentNode: "twitter",
						extent: "parent",
					},

					{
						id: "twitter-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageTwitter",
						parentNode: "twitter",
						extent: "parent",
					},

					{
						id: "twitter-onfirstcomment",
						data: { label: null },
						position: { x: 10, y: 115 },
						type: "onFirstCommentTwitter",
						parentNode: "twitter",
						extent: "parent",
					},
					{
						id: "twitter-oncommentreply",
						data: { label: null },
						position: { x: 10, y: 150 },
						type: "onCommentReplyTwitter",
						parentNode: "twitter",
						extent: "parent",
					},
				],
			},
			{
				title: "LinkedIn",
				nodes: [
					{
						id: "linkedin",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "linkedin",
					},

					{
						id: "linkedin-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},

					{
						id: "linkedin-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},

					{
						id: "linkedin-onfirstcomment",
						data: { label: null },
						position: { x: 10, y: 115 },
						type: "onFirstCommentLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},
					{
						id: "linkedin-oncommentreply",
						data: { label: null },
						position: { x: 10, y: 150 },
						type: "onCommentReplyLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},
				],
			},
			{
				title: "Facebook",
				nodes: [
					{
						id: "facebook",
						data: { label: null },
						position: { x: 0, y: 0 },
						type: "facebook",
					},

					{
						id: "facebook-onfirstmessage",
						data: { label: null },
						position: { x: 10, y: 45 },
						type: "onFirstMessageFacebook",
						parentNode: "facebook",
						extent: "parent",
					},

					{
						id: "facebook-onmessage",
						data: { label: null },
						position: { x: 10, y: 80 },
						type: "onMessageFacebook",
						parentNode: "facebook",
						extent: "parent",
					},

					{
						id: "facebook-onfirstcomment",
						data: { label: null },
						position: { x: 10, y: 115 },
						type: "onFirstCommentFacebook",
						parentNode: "facebook",
						extent: "parent",
					},
					{
						id: "facebook-oncommentreply",
						data: { label: null },
						position: { x: 10, y: 150 },
						type: "onCommentReplyFacebook",
						parentNode: "facebook",
						extent: "parent",
					},
				],
			},
		],
	},
	{
		title: "Plugins",
		icon: AppsIcon,
		list: [
			{
				title: "Human",
			},
			{
				title: "Documents",
			},
			{
				title: "Inventory",
			},
			{
				title: "Google Sheets",
			},
			{
				title: "Google Calender",
			},
			{
				title: "Google Word",
			},
			{
				title: "Gmail",
			},
			{
				title: "WhatsApp",
			},
			{
				title: "Instagram",
			},
			{
				title: "Twitter",
			},
			{
				title: "LinkedIn",
			},
			{
				title: "Facebook",
			},
		],
	},
	{
		title: "AI",
		icon: BlurOnIcon,
		list: [
			{
				title: "Chat Bot",
			},
			{
				title: "Research Assistant",
			},
			{
				title: "Virtual Assistant",
			},
		],
	},
];
