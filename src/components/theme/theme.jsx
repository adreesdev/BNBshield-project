import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#EEBE62",
		},
		secondary: {
			main: "#fff",
		},
		text: {
			primary: "#fff",
		},
	},
	typography: {
		title: {
			fontStyle: "normal",
			fontWeight: "700",
		},
		subtitle: {
			fontStyle: "normal",
			fontWeight: "700",
			fontSize: "30px",
		},
		subtitle01: {
			fontStyle: "normal",
			fontWeight: "700",
			fontSize: "20px",
		},
		subtitle02: {
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "14px",
		},
		body1: {
			fontWeight: 400,
		},
	},
});

theme.overrides = {
	MuiCssBaseline: {
		"@global": {
			body: {
				color: "#fff",
				fontFamily: "Roboto",
			},
		},
	},
};

theme = responsiveFontSizes(theme);

export default theme;
