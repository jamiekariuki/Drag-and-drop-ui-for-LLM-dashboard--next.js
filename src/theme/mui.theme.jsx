"use client";
import { createTheme } from "@mui/material/styles";
import Cookies from "js-cookie";

/* export const muiToogle = () => {
	let mode = "";

	const darkModeCookie = Cookies.get("darkMode");

	if (!darkModeCookie) {
		mode = "light";
	} else {
		if (darkModeCookie === "true") {
			mode = "dark";
		} else {
			mode = "light";
		}
	}

	return mode;
}; */

let mode = "dark";

export const theme = createTheme({
	palette: {
		primary: {
			main: "#b12f9c",
		},
		secondary: {
			main: "#c353b0",
		},

		badge: {
			main: "rgb(231, 45, 45)",
		},

		mode: mode, 
	},
});
