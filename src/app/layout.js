import "./globals.scss";
import { Poppins } from "next/font/google";
import { ThemeProvider2 } from "@/context/themeContext";
import { cookies } from "next/headers";
import Toast from "@/components/styled components/toast/toast";
import { ToastProvider } from "@/context/ToastContext";
import Footer from "@/components/landing pages/footer/footer";
import LandingNavbar from "@/components/landing pages/navbar/landing.navbar";

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
				<ToastProvider>
					<ThemeProvider2 serverDarkMode={darkMode}>
						<LandingNavbar />
						<div className="pages">{children}</div>
						<Footer />
						<div id="portal" />
					</ThemeProvider2>
					<div id="toast-portal">
						<Toast />
					</div>
				</ToastProvider>
			</body>
		</html>
	);
}
