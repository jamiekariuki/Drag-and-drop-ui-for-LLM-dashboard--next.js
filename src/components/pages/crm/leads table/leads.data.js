import moment from "moment";

export const LeadsData = [
	{
		id: 1,
		name: "Alice Johnson",
		profilePicture: "https://i.postimg.cc/RhStsVdR/Clara.jpg",
		contacted: "Yes",
		type: "Person",
		source: "LinkedIn",
		email: "alice.johnson@yahoo.com",
		contact: "123-456-7890",
		status: "In progress",
		industry: "",
		website: "",
		probability: 78,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 2,
		name: "Bob Smith",
		profilePicture: "https://i.postimg.cc/qMSv5vMG/download-2.jpg",
		contacted: "No",
		type: "Person",
		source: "Google",
		email: "bob.smith@gmail.com",
		contact: "987-654-3210",
		status: "New lead",
		industry: "Finance",
		website: "",
		probability: 67,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},

	{
		id: 3,
		name: "Charlie Brown",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Instagram",
		email: "",
		contact: "555-555-5555",
		status: "Won lead",
		industry: "Healthcare",
		website: "",
		probability: 13,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 4,
		name: "Mavcop",
		profilePicture:
			"https://i.postimg.cc/VNRSpPhL/Cleaning-Logo-Design.jpg",
		contacted: "No",
		type: "Company",
		source: "Facebook",
		email: "contact@mavcop.com",
		contact: "789-123-4567",
		status: "New lead",
		industry: "Retail",
		website: "www.mavcop.com",
		probability: 33,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 5,
		name: "Eva Davis",
		profilePicture: "https://i.postimg.cc/8PCSMVHR/download-4.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Facebook",
		email: "eva.davis@gmail.com",
		contact: "",
		status: "Canceled",
		industry: "",
		website: "",
		probability: 26,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 6,
		name: "Frank dawin",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "No",
		type: "Person",
		source: "Instagram",
		email: "",
		contact: "555-123-7890",
		status: "New lead",
		industry: "",
		website: "",
		probability: 40,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 7,
		name: "Fuse",
		profilePicture: "https://i.postimg.cc/VkgxGZkq/fuse.jpg",
		contacted: "Yes",
		type: "Company",
		source: "Email",
		email: "",
		contact: "",
		status: "pending",
		industry: "Healthcare",
		website: "www.fuse.com",
		probability: 78,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 8,
		name: "Henry Parker",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "No",
		type: "Person",
		source: "Email",
		email: "henry.parker@hotmail.com",
		contact: "987-555-3210",
		status: "Canceled",
		industry: "Retail",
		website: "",
		probability: 87,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 9,
		name: "Ivy Lewis",
		profilePicture: "https://i.postimg.cc/Z58PPXjc/empreendedoras.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Twitter",
		email: "",
		contact: "",
		status: "Won lead",
		industry: "Education",
		website: "",
		probability: 68,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 10,
		name: "Jack Turner",
		profilePicture: "https://i.postimg.cc/qRgFgk0q/download-5.jpg",
		contacted: "Yes",
		type: "Person",
		source: "LinkedIn",
		email: "jack.turner@example.com",
		contact: "123-987-4567",
		status: "pending",
		industry: "",
		website: "",
		probability: 57,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 11,
		name: "Katherine Clark",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "Yes",
		type: "Person",
		platform: "Email",
		email: "katherine.clark@example.com",
		contact: "",
		status: "In progress",
		industry: "Healthcare",
		website: "",
		probability: 24,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 12,
		name: "Liam Davis",
		profilePicture:
			"https://i.postimg.cc/j5qqLnkT/Retrato-Corporativo-Profissional-Risnic-Fotografia-Corporativa.jpg",
		contacted: "No",
		type: "Person",
		platform: "Twitter",
		email: "liam.davis@gmail.com",
		contact: "",
		status: "Canceled",
		industry: "",
		website: "",
		probability: 77,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 13,
		name: "High Life",
		profilePicture: "https://i.postimg.cc/rFmZyyVr/Highlife.jpg",
		contacted: "No",
		type: "Company",
		platform: "LinkedIn",
		email: "support.highlife.com",
		contact: "987-123-5555",
		status: "New lead",
		industry: "Education",
		website: "www.highlife.com",
		probability: 46,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 14,
		name: "Noah Smith",
		profilePicture: "https://i.postimg.cc/hPXjLx4P/MO-Studio-LLC-1.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Email",
		email: "noah.smith@gmail.com",
		contact: "",
		status: "Won lead",
		industry: "",
		website: "",
		probability: 42,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 15,
		name: "Olivia Turner",
		profilePicture:
			"https://i.postimg.cc/MKJLmQ2z/Free-Photo-Woman-wearing-casual-sweater-on-background-hand-on-chin-thinking-about-question-pensiv.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Google",
		email: "",
		contact: "123-555-7890",
		status: "In progress",
		industry: "Healthcare",
		website: "",
		probability: 10,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 16,
		name: "Peter White",
		profilePicture:
			"https://i.postimg.cc/0y3FmJcd/Bonobos-Better-Fitting-Better-Looking-Men-s-Clothing-Accessories-Bonobos.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Google",
		email: "peter.white@gmail.com",
		contact: "555-123-9876",
		status: "pending",
		industry: "Retail",
		website: "",
		probability: 78,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 17,
		name: "Queen Adams",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "No",
		type: "Person",
		source: "Instagram",
		email: "queen.adams@example.com",
		contact: "",
		status: "Canceled",
		industry: "Education",
		website: "",
		probability: 87,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 18,
		name: "Freshy",
		profilePicture:
			"https://i.postimg.cc/G3yBnfHR/Create-a-fun-logo-for-a-carpet-cleaning-company-Logo-design-contest.jpg",
		contacted: "Yes",
		type: "Person",
		source: "LinkedIn",
		email: "",
		contact: "123-555-9876",
		status: "Won lead",
		industry: "Tech",
		website: "www.freshy.com",
		probability: 67,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 19,
		name: "Sophia Martin",
		profilePicture:
			"https://i.postimg.cc/1zQbRVBW/cheerful-woman-with-dark-wavy-hairstyle-black-striped-outfit-hat-laughing-looking-into-camera-pink-b.jpg",
		contacted: "Yes",
		type: "Person",
		source: "Email",
		email: "sophia.martin@yahoo.com",
		contact: "",
		status: "pending",
		industry: "",
		website: "",
		probability: 20,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 20,
		name: "Thomas Wilson",
		profilePicture: "https://i.postimg.cc/fTkF2P9H/download.jpg",
		contacted: "No",
		type: "Person",
		source: "Google",
		email: "thomas.wilson@example.com",
		contact: "",
		status: "New lead",
		industry: "",
		website: "",
		probability: 43,
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
];
