import PendingActionsIcon from "@mui/icons-material/PendingActions";
import AppsIcon from "@mui/icons-material/Apps";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

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
						data: { label: "schedules" },
						position: { x: 0, y: 0 },
						type: "schedules",
					},
					{
						id: "Schedules-ontime",
						data: { label: "Schedules-ontime" },
						position: { x: 10, y: 45 },
						type: "onTimeSchedules",
						parentNode: "schedules",
						extent: "parent",
					},
					{
						id: "Schedules-onday",
						data: { label: "Schedules-onday" },
						position: { x: 10, y: 139 },
						type: "onDaySchedules",
						parentNode: "schedules",
						extent: "parent",
					},
					{
						id: "Schedules-ondate",
						data: { label: "Schedules-ondate" },
						position: { x: 10, y: 264 },
						type: "onDateSchedules",
						parentNode: "schedules",
						extent: "parent",
					},
					{
						id: "schedules-custom",
						data: {
							label: "schedules-custom",
							/* multipleSchedules: [
									{title:time, time: "12", Daily: true },
									{title:time, time: "1", Daily: true },
									{title:day, day: "12", time, Daily: true },
									{title:day, day: "1", time, Daily: true },
									{title:date, date: "12", Daily: true },
									{title:date, date: "1", Daily: true },
							], 
							DateRange:{
								dateStart: 1,
								dateEnd: 2
								time:3
								random:true/false
							}
							*/
						},

						position: { x: 10, y: 358 },
						type: "customSchedules",
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
						data: { label: "gmail" },
						position: { x: 0, y: 0 },
						type: "gmail",
					},

					{
						id: "gmail-onfirstmessage",
						data: { label: "gmail-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageGmail",
						parentNode: "gmail",
						extent: "parent",
					},

					{
						id: "gmail-onmessage",
						data: { label: "gmail-onmessage" },
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
						data: { label: "whatsapp" },
						position: { x: 0, y: 0 },
						type: "whatsapp",
					},

					{
						id: "whatsapp-onfirstmessage",
						data: { label: "whatsapp-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageWhatsapp",
						parentNode: "whatsapp",
						extent: "parent",
					},

					{
						id: "whatsapp-onmessage",
						data: { label: "whatsapp-onmessage" },
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
						data: { label: "instagram" },
						position: { x: 0, y: 0 },
						type: "instagram",
					},

					{
						id: "instagram-onfirstmessage",
						data: { label: "instagram-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageInstagram",
						parentNode: "instagram",
						extent: "parent",
					},

					{
						id: "instagram-onmessage",
						data: { label: "instagram-onmessage" },
						position: { x: 10, y: 80 },
						type: "onMessageInstagram",
						parentNode: "instagram",
						extent: "parent",
					},

					{
						id: "instagram-onfirstcomment",
						data: { label: "instagram-onfirstcomment" },
						position: { x: 10, y: 115 },
						type: "onFirstCommentInstagram",
						parentNode: "instagram",
						extent: "parent",
					},
					{
						id: "instagram-oncommentreply",
						data: { label: "instagram-oncommentreply" },
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
						data: { label: "twitter" },
						position: { x: 0, y: 0 },
						type: "twitter",
					},

					{
						id: "twitter-onfirstmessage",
						data: { label: "twitter-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageTwitter",
						parentNode: "twitter",
						extent: "parent",
					},

					{
						id: "twitter-onmessage",
						data: { label: "twitter-onmessage" },
						position: { x: 10, y: 80 },
						type: "onMessageTwitter",
						parentNode: "twitter",
						extent: "parent",
					},

					{
						id: "twitter-onfirstcomment",
						data: { label: "twitter-onfirstcomment" },
						position: { x: 10, y: 115 },
						type: "onFirstCommentTwitter",
						parentNode: "twitter",
						extent: "parent",
					},
					{
						id: "twitter-oncommentreply",
						data: { label: "twitter-oncommentreply" },
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
						data: { label: "linkedin" },
						position: { x: 0, y: 0 },
						type: "linkedin",
					},

					{
						id: "linkedin-onfirstmessage",
						data: { label: "linkedin-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},

					{
						id: "linkedin-onmessage",
						data: { label: "linkedin-onmessage" },
						position: { x: 10, y: 80 },
						type: "onMessageLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},

					{
						id: "linkedin-onfirstcomment",
						data: { label: "linkedin-onfirstcomment" },
						position: { x: 10, y: 115 },
						type: "onFirstCommentLinkedin",
						parentNode: "linkedin",
						extent: "parent",
					},
					{
						id: "linkedin-oncommentreply",
						data: { label: "linkedin-oncommentreply" },
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
						data: { label: "facebook" },
						position: { x: 0, y: 0 },
						type: "facebook",
					},

					{
						id: "facebook-onfirstmessage",
						data: { label: "facebook-onfirstmessage" },
						position: { x: 10, y: 45 },
						type: "onFirstMessageFacebook",
						parentNode: "facebook",
						extent: "parent",
					},

					{
						id: "facebook-onmessage",
						data: { label: "facebook-onmessage" },
						position: { x: 10, y: 80 },
						type: "onMessageFacebook",
						parentNode: "facebook",
						extent: "parent",
					},

					{
						id: "facebook-onfirstcomment",
						data: { label: "facebook-onfirstcomment" },
						position: { x: 10, y: 115 },
						type: "onFirstCommentFacebook",
						parentNode: "facebook",
						extent: "parent",
					},
					{
						id: "facebook-oncommentreply",
						data: { label: "facebook-oncommentreply" },
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
				title: "Inventory",
				nodes: [
					{
						id: "inventoryplugin",
						data: { label: "inventoryplugin" },
						position: { x: 0, y: 0 },
						type: "inventoryPlugin",
					},
				],
			},
			{
				title: "Google Sheets",
				nodes: [
					{
						id: "googlesheetsplugin",
						data: { label: "googlesheetsplugin" },
						position: { x: 0, y: 0 },
						type: "googlesheetsPlugin",
					},
				],
			},
			{
				title: "Google Calender",
				nodes: [
					{
						id: "googlecalendarplugin",
						data: { label: "googlecalendarplugin" },
						position: { x: 0, y: 0 },
						type: "googlecalendarPlugin",
					},
				],
			},
			{
				title: "Google Docs",
				nodes: [
					{
						id: "googledocsplugin",
						data: { label: "googledocsplugin" },
						position: { x: 0, y: 0 },
						type: "googledocsPlugin",
					},
				],
			},
			{
				title: "Google Drive",
				nodes: [
					{
						id: "googledriveplugin",
						data: { label: "googledriveplugin" },
						position: { x: 0, y: 0 },
						type: "googledrivePlugin",
					},
				],
			},
			{
				title: "Gmail",
				nodes: [
					{
						id: "gmailplugin",
						data: { label: "gmailplugin" },
						position: { x: 0, y: 0 },
						type: "gmailPlugin",
					},
					{
						id: "gmailplugin-inboxreply",
						data: { label: "gmailplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyGmailPlugin",
						parentNode: "gmailplugin",
						extent: "parent",
					},
					{
						id: "gmailplugin-sendmessage",
						data: { label: "gmailplugin-sendmessage" },
						position: { x: 10, y: 146 },
						type: "sendMessageGmailPlugin",
						parentNode: "gmailplugin",
						extent: "parent",
					},
				],
			},
			{
				title: "WhatsApp",
				nodes: [
					{
						id: "whatsappplugin",
						data: { label: "whatsappplugin" },
						position: { x: 0, y: 0 },
						type: "whatsappPlugin",
					},
					{
						id: "whatsappplugin-inboxreply",
						data: { label: "whatsappplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyWhatsappPlugin",
						parentNode: "whatsappplugin",
						extent: "parent",
					},
					{
						id: "whatsappplugin-sendmessage",
						data: { label: "whatsappplugin-sendmessage" },
						position: { x: 10, y: 146 },
						type: "sendMessageWhatsappPlugin",
						parentNode: "whatsappplugin",
						extent: "parent",
					},
				],
			},
			{
				title: "Instagram",
				nodes: [
					{
						id: "instagramplugin",
						data: { label: "instagramplugin" },
						position: { x: 0, y: 0 },
						type: "instagramPlugin",
					},
					{
						id: "instagramplugin-inboxreply",
						data: { label: "instagramplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyInstagramPlugin",
						parentNode: "instagramplugin",
						extent: "parent",
					},
					{
						id: "instagramplugin-commentreply",
						data: { label: "instagramplugin-commentreply" },
						position: { x: 10, y: 146 },
						type: "commentReplyInstagramPlugin",
						parentNode: "instagramplugin",
						extent: "parent",
					},
					{
						id: "instagramplugin-sendmessage",
						data: { label: "instagramplugin-sendmessage" },
						position: { x: 10, y: 182 },
						type: "sendMessageInstagramPlugin",
						parentNode: "instagramplugin",
						extent: "parent",
					},
					{
						id: "instagramplugin-post",
						data: { label: "instagramplugin-post" },
						position: { x: 10, y: 407 },
						type: "postInstagramPlugin",
						parentNode: "instagramplugin",
						extent: "parent",
					},
				],
			},
			{
				title: "Twitter",
				nodes: [
					{
						id: "twitterplugin",
						data: { label: "twitterplugin" },
						position: { x: 0, y: 0 },
						type: "twitterPlugin",
					},
					{
						id: "twitterplugin-inboxreply",
						data: { label: "twitterplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyTwitterPlugin",
						parentNode: "twitterplugin",
						extent: "parent",
					},
					{
						id: "twitterplugin-commentreply",
						data: { label: "twitterplugin-commentreply" },
						position: { x: 10, y: 146 },
						type: "commentReplyTwitterPlugin",
						parentNode: "twitterplugin",
						extent: "parent",
					},
					{
						id: "twitterplugin-sendmessage",
						data: { label: "twitterplugin-sendmessage" },
						position: { x: 10, y: 182 },
						type: "sendMessageTwitterPlugin",
						parentNode: "twitterplugin",
						extent: "parent",
					},
					{
						id: "twitterplugin-post",
						data: { label: "twitterplugin-post" },
						position: { x: 10, y: 407 },
						type: "postTwitterPlugin",
						parentNode: "twitterplugin",
						extent: "parent",
					},
				],
			},
			{
				title: "LinkedIn",
				nodes: [
					{
						id: "linkedinplugin",
						data: { label: "linkedinplugin" },
						position: { x: 0, y: 0 },
						type: "linkedinPlugin",
					},
					{
						id: "linkedinplugin-inboxreply",
						data: { label: "linkedinplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyLinkedinPlugin",
						parentNode: "linkedinplugin",
						extent: "parent",
					},
					{
						id: "linkedinplugin-commentreply",
						data: { label: "linkedinplugin-commentreply" },
						position: { x: 10, y: 146 },
						type: "commentReplyLinkedinPlugin",
						parentNode: "linkedinplugin",
						extent: "parent",
					},
					{
						id: "linkedinplugin-sendmessage",
						data: { label: "linkedinplugin-sendmessage" },
						position: { x: 10, y: 182 },
						type: "sendMessageLinkedinPlugin",
						parentNode: "linkedinplugin",
						extent: "parent",
					},
					{
						id: "linkedinplugin-post",
						data: { label: "linkedinplugin-post" },
						position: { x: 10, y: 407 },
						type: "postLinkedinPlugin",
						parentNode: "linkedinplugin",
						extent: "parent",
					},
				],
			},
			{
				title: "Facebook",
				nodes: [
					{
						id: "facebookplugin",
						data: { label: "facebookplugin" },
						position: { x: 0, y: 0 },
						type: "facebookPlugin",
					},
					{
						id: "facebookplugin-inboxreply",
						data: { label: "facebookplugin-inboxreply" },
						position: { x: 10, y: 110 },
						type: "inboxReplyFacebookPlugin",
						parentNode: "facebookplugin",
						extent: "parent",
					},
					{
						id: "facebookplugin-commentreply",
						data: { label: "facebookplugin-commentreply" },
						position: { x: 10, y: 146 },
						type: "commentReplyFacebookPlugin",
						parentNode: "facebookplugin",
						extent: "parent",
					},
					{
						id: "facebookplugin-sendmessage",
						data: { label: "facebookplugin-sendmessage" },
						position: { x: 10, y: 182 },
						type: "sendMessageFacebookPlugin",
						parentNode: "facebookplugin",
						extent: "parent",
					},
					{
						id: "facebookplugin-post",
						data: { label: "facebookplugin-post" },
						position: { x: 10, y: 407 },
						type: "postFacebookPlugin",
						parentNode: "facebookplugin",
						extent: "parent",
					},
				],
			},
		],
	},
	{
		title: "Tools",
		icon: HomeRepairServiceIcon,
		list: [
			{
				title: "Human",
				nodes: [
					{
						id: "humanTool",
						data: { label: "humanTool" },
						position: { x: 0, y: 0 },
						type: "humanTool",
					},
				],
			},
			{
				title: "Files",
				nodes: [
					{
						id: "fileTool",
						data: { label: "fileTool" },
						position: { x: 0, y: 0 },
						type: "fileTool",
					},
				],
			},
			{
				title: "Media",
				nodes: [
					{
						id: "mediaTool",
						data: { label: "mediaTool" },
						position: { x: 0, y: 0 },
						type: "mediaTool",
					},
				],
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
