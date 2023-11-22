"use client";

export const getDesignTokens = (mode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
					primary: {
						main: "#b12f9c",
					},
					secondary: {
						main: "#c353b0",
					},

					background: {
						default: "#fdfdfd",
						paper: "#fdfdfd",
					},
			  }
			: {
					primary: {
						main: "#b12f9c",
					},
					secondary: {
						main: "#c353b0",
					},
					background: {
						default: "rgb(0, 0, 0)",
						paper: "rgb(0, 0, 0)",
					},
			  }),
	},
});
