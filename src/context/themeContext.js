"use client";
import { createContext, useEffect, useState, useMemo } from "react";
import Cookies from "js-cookie";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "@/theme/mui.theme";
import CssBaseline from "@mui/material/CssBaseline";

export const ThemeContext = createContext({ toggleColorMode: () => {} });

export const ThemeProvider2 = ({ children, serverDarkMode }) => {
	const darkModeCookie = Cookies.get("darkMode");
	const [initialDarkMode, setInitialDarkMode] = useState(
		darkModeCookie === "true"
	);
	const [darkMode, setDarkMode] = useState(null);

	//---------toggle function both mui and default

	const toggle = useMemo(
		() => ({
			toggleColorMode: () => {
				setDarkMode((prevDarkMode) =>
					prevDarkMode === null ? initialDarkMode : !prevDarkMode
				);

				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	//----------------------

	useEffect(() => {
		setDarkMode(initialDarkMode);

		if (initialDarkMode) {
			setMode("dark");
		} else {
			setMode("light");
		}

		document.addEventListener("DOMContentLoaded", () => {
			const body = document.querySelector("body");
			body.classList.remove(`theme-${serverDarkMode ? "dark" : "light"}`);
			body.classList.add(`theme-${initialDarkMode ? "dark" : "light"}`);
		});
	}, [initialDarkMode, serverDarkMode]);

	useEffect(() => {
		Cookies.set(
			"darkMode",
			darkMode === null ? initialDarkMode : darkMode,
			{ expires: 7 }
		);
	}, [darkMode, initialDarkMode]);

	//-------------------------mui

	const [mode, setMode] = useState(serverDarkMode ? "dark" : "light");

	const theme = useMemo(
		() => createTheme(getDesignTokens(mode)),
		[mode, serverDarkMode]
	);

	return (
		<ThemeContext.Provider value={{ toggle, darkMode }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div
					className={`theme-${
						darkMode === null
							? serverDarkMode
								? "dark"
								: "light"
							: darkMode
							? "dark"
							: "light"
					}`}
				>
					{children}
				</div>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
