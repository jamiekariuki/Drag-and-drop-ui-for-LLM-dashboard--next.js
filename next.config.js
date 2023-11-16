/** @type {import('next').NextConfig} */
//https://postimg.cc/files
const nextConfig = {
	/* images: {
		domains: ["i.postimg.cc"],
	}, */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				pathname: "**",
			},
		],
	},
};

module.exports = nextConfig;
