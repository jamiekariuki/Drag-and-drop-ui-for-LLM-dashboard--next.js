import "./globals.scss";
import { Poppins } from "next/font/google";
import { ThemeProvider2 } from "@/context/themeContext";
import { cookies } from "next/headers";
import { SideBar } from "@/components/side bar/sidebar";
import { Navbar } from "@/components/navbar/navbar";

const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600"],
	subsets: ["latin"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata = {
	title: "AI | Dashboard",
	description: "",
};

export default function RootLayout({ children }) {
	const cookieStore = cookies();
	const mode = cookieStore.get("darkMode");

	let darkMode = false;

	if (mode) {
		if (mode.value === "true") {
			darkMode = true;
		}
	}

	return (
		<html lang="en" className={`${poppins.variable} `}>
			<body>
				<ThemeProvider2 serverDarkMode={darkMode}>
					<div className="apps">
						<SideBar />
						<div className="app-container">
							<Navbar />
							<div className="all-apps">{children}</div>
						</div>
					</div>
				</ThemeProvider2>
			</body>
		</html>
	);
}
