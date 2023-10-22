import moment from "moment";

export const LeadsData = [
	{
		id: 1,
		name: "Alice Johnson",
		source: "LinkedIn",
		email: "alice.johnson@example.com",
		contact: "123-456-7890",
		status: "In progress",
		industry: "Tech",
		company: "TechCo",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 2,
		name: "Bob Smith",
		source: "Google",
		email: "bob.smith@example.com",
		contact: "987-654-3210",
		status: "New lead",
		industry: "Finance",
		company: "FinanceCorp",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},

	{
		id: 3,
		name: "Charlie Brown",
		source: "Instagram",
		email: "",
		contact: "555-555-5555",
		status: "Won lead",
		industry: "Healthcare",
		company: "MediCare",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 4,
		name: "David Wilson",
		source: "Facebook",
		email: "david.wilson@example.com",
		contact: "789-123-4567",
		status: "New lead",
		industry: "Retail",
		company: "ShopCo",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 5,
		name: "Eva Davis",
		source: "Facebook",
		email: "eva.davis@example.com",
		contact: "",
		status: "Canceled",
		industry: "Education",
		company: "EduTech",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 6,
		name: "Frank Miller",
		source: "Instagram",
		email: "",
		contact: "555-123-7890",
		status: "New lead",
		industry: "Tech",
		company: "TechSolutions",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 7,
		name: "Grace Adams",
		source: "Email",
		email: "grace.adams@example.com",
		contact: "",
		status: "pending",
		industry: "Healthcare",
		company: "MediHealth",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 8,
		name: "Henry Parker",
		source: "Email",
		email: "henry.parker@example.com",
		contact: "987-555-3210",
		status: "Canceled",
		industry: "Retail",
		company: "ShopStyle",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 9,
		name: "Ivy Lewis",
		source: "Twitter",
		email: "",
		contact: "555-789-5555",
		status: "Won lead",
		industry: "Education",
		company: "EduNow",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 10,
		name: "Jack Turner",
		source: "LinkedIn",
		email: "jack.turner@example.com",
		contact: "123-987-4567",
		status: "pending",
		industry: "Tech",
		company: "TechConnect",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 11,
		name: "Katherine Clark",
		platform: "Email",
		email: "katherine.clark@example.com",
		contact: "555-987-1234",
		status: "In progress",
		industry: "Healthcare",
		company: "MediCarePro",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 12,
		name: "Liam Davis",
		platform: "Twitter",
		email: "liam.davis@example.com",
		contact: "",
		status: "Canceled",
		industry: "Retail",
		company: "ShopTech",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 13,
		name: "Mia Harris",
		platform: "LinkedIn",
		email: "",
		contact: "987-123-5555",
		status: "New lead",
		industry: "Education",
		company: "EduSolutions",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 14,
		name: "Noah Smith",
		source: "Email",
		email: "noah.smith@example.com",
		contact: "",
		status: "Won lead",
		industry: "Tech",
		company: "TechWorld",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 15,
		name: "Olivia Turner",
		source: "Google",
		email: "",
		contact: "123-555-7890",
		status: "In progress",
		industry: "Healthcare",
		company: "MediTech",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 16,
		name: "Peter White",
		source: "Google",
		email: "peter.white@example.com",
		contact: "555-123-9876",
		status: "pending",
		industry: "Retail",
		company: "ShopNow",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 17,
		name: "Queen Adams",
		source: "Instagram",
		email: "queen.adams@example.com",
		contact: "",
		status: "Canceled",
		industry: "Education",
		company: "EduConnect",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 18,
		name: "Ryan Parker",
		source: "LinkedIn",
		email: "",
		contact: "123-555-9876",
		status: "Won lead",
		industry: "Tech",
		company: "TechPro",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 19,
		name: "Sophia Martin",
		source: "Email",
		email: "sophia.martin@example.com",
		contact: "987-789-1234",
		status: "pending",
		industry: "Healthcare",
		company: "MediStyle",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
	{
		id: 20,
		name: "Thomas Wilson",
		source: "Google",
		email: "thomas.wilson@example.com",
		contact: "555-987-1230",
		status: "New lead",
		industry: "Retail",
		company: "ShopConnect",
		website: "www.techco.com",
		dateAdded: moment(
			Date.now() - Math.floor(Math.random() * 10000000000)
		).fromNow(),
	},
];
