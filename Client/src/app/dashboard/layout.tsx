import * as React from "react";
import { Box } from "@mui/material";
import AppNavbar from "./components/AppNavbar";
import SideMenu from "./components/SideMenu";

export default function Dashboard({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Box sx={{ display: "flex" }}>
			<SideMenu />
			<AppNavbar />
			{children}
		</Box>
	);
}
