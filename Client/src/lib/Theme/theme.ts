import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		// === Primary
		primary: {
			50: "#e4ebfb",
			100: "#dae5fa",
			200: "#d1def9",
			300: "#b6cbf5",
			400: "#7fa3ed",
			500: "#487ce5", // main
			600: "#4170ce",
			700: "#365dac",
			800: "#2b4a89",
			900: "#233d70",
			main: "#487ce5",
			light: "#7fa3ed",
			dark: "#4170ce",
			contrastText: "#ffffff"
		},

		// === Secondary
		secondary: {
			50: "#feefe2",
			100: "#fee9d8",
			200: "#fee4ce",
			300: "#fdd3b1",
			400: "#fcb377",
			500: "#FB923C", // main
			600: "#e28336",
			700: "#bc6e2d",
			800: "#975824",
			900: "#7b481d",
			main: "#FB923C",
			light: "#fcb377",
			dark: "#e28336",
			contrastText: "#000000"
		},

		// === Tertiary (mapped to "info", or create your own palette key)
		info: {
			50: "#f5fbff",
			100: "#f1faff",
			200: "#eef9ff",
			300: "#e3f5fe",
			400: "#cfedfe",
			500: "#bae5fd", // main
			600: "#a7cee4",
			700: "#8cacbe",
			800: "#708998",
			900: "#5b707c",
			main: "#bae5fd",
			contrastText: "#000000"
		},

		// === Success
		success: {
			50: "#edf7df",
			100: "#e8f4d5",
			200: "#e2f2ca",
			300: "#d0eaaa",
			400: "#adda6b",
			500: "#8aca2b", // main
			600: "#7cb627",
			700: "#689820",
			800: "#53791a",
			900: "#446315",
			main: "#8aca2b",
			contrastText: "#000000"
		},

		// === Warning
		warning: {
			50: "#fcf4da",
			100: "#fbf0ce",
			200: "#faecc1",
			300: "#f7e19c",
			400: "#f0ca52",
			500: "#EAB308", // main
			600: "#d3a107",
			700: "#b08606",
			800: "#8c6b05",
			900: "#735804",
			main: "#EAB308",
			contrastText: "#000000"
		},

		// === Error
		error: {
			50: "#ffe8e3",
			100: "#ffe0da",
			200: "#ffd9d1",
			300: "#ffc2b5",
			400: "#ff947e",
			500: "#ff6647", // main
			600: "#e65c40",
			700: "#bf4d35",
			800: "#993d2b",
			900: "#7d3223",
			main: "#ff6647",
			contrastText: "#000000"
		},

		// === Surface / Grey scale
		grey: {
			50: "#f8f8f8",
			100: "#f6f6f6",
			200: "#f4f4f4",
			300: "#ededed",
			400: "#dfdfdf",
			500: "#d1d1d1",
			600: "#bcbcbc",
			700: "#9d9d9d",
			800: "#7d7d7d",
			900: "#666666"
		},

		common: {
			white: "#ffffff",
			black: "#000000"
		},

		// Background typically from "surface" colors
		background: {
			default: "#f8f8f8", // e.g. grey.50
			paper: "#f6f6f6" // e.g. grey.100
		},

		// Text colors
		text: {
			primary: "#000000",
			secondary: "#ffffff"
		}
	},

	typography: {
		// Global font family
		fontFamily: "system-ui",

		// Common font weights (optional overrides)
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,

		// Headings
		h1: {
			fontFamily: "system-ui",
			fontWeight: 700,
			fontSize: "2.5rem",
			lineHeight: 1.2
		},
		h2: {
			fontFamily: "system-ui",
			fontWeight: 700,
			fontSize: "2rem",
			lineHeight: 1.3
		},
		h3: {
			fontFamily: "system-ui",
			fontWeight: 600,
			fontSize: "1.75rem",
			lineHeight: 1.3
		},
		h4: {
			fontFamily: "system-ui",
			fontWeight: 600,
			fontSize: "1.5rem",
			lineHeight: 1.3
		},
		h5: {
			fontFamily: "system-ui",
			fontWeight: 500,
			fontSize: "1.25rem",
			lineHeight: 1.3
		},
		h6: {
			fontFamily: "system-ui",
			fontWeight: 500,
			fontSize: "1.125rem",
			lineHeight: 1.4
		},

		// Subtitles
		subtitle1: {
			fontFamily: "system-ui",
			fontSize: "1rem",
			fontWeight: 400,
			lineHeight: 1.5
		},
		subtitle2: {
			fontFamily: "system-ui",
			fontSize: "0.875rem",
			fontWeight: 500,
			lineHeight: 1.4
		},

		// Body text
		body1: {
			fontFamily: "system-ui",
			fontSize: "1rem",
			fontWeight: 400,
			lineHeight: 1.5
		},
		body2: {
			fontFamily: "system-ui",
			fontSize: "0.875rem",
			fontWeight: 400,
			lineHeight: 1.4
		},

		// Other common text variants
		button: {
			fontFamily: "system-ui",
			fontSize: "0.875rem",
			fontWeight: 500,
			lineHeight: 1.5,
			textTransform: "uppercase"
		},
		caption: {
			fontFamily: "system-ui",
			fontSize: "0.75rem",
			fontWeight: 400,
			lineHeight: 1.4
		},
		overline: {
			fontFamily: "system-ui",
			fontSize: "0.75rem",
			fontWeight: 400,
			lineHeight: 1.4,
			textTransform: "uppercase"
		}
	}
});

export default theme;
