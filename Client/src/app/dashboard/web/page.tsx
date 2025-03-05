"use client";

import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { useDashboard } from "@/lib/context/dashboardContext";
import useWebApi from "@/lib/hooks/webHook";

export default function Web() {
	const { org } = useDashboard();
	const { getWebsites } = useWebApi();
	// const [websites, setWebsites] = useState([]);

	useEffect(() => {
		console.log("org", org);
		try {
			const web = getWebsites(org?.id as string);
			console.log("web: ", web);
		} catch (error) {
			console.log("error", error);
		}
	}, [org]);

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto"
			}}>
			<Stack
				spacing={2}
				sx={{
					alignItems: "center",
					mx: 3,
					pb: 5,
					mt: { xs: 8, md: 2 }
				}}>
				Web Hub
			</Stack>
		</Box>
	);
}
