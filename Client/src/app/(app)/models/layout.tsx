"use client";

import { Box, Stack, Typography, Tabs, Tab } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ModelsLayout({
	children
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const pathname = usePathname();
	const [activeTab, setActiveTab] = useState(0);

	// Set active tab based on current pathname
	useEffect(() => {
		if (pathname === "/models/training") {
			setActiveTab(1);
		} else {
			setActiveTab(0);
		}
	}, [pathname]);

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setActiveTab(newValue);
		if (newValue === 0) {
			router.push("/models");
		} else {
			router.push("/models/training");
		}
	};

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
					alignItems: "left",
					mx: 3,
					pb: 5,
					mt: { xs: 8, md: 2 }
				}}>
				<Typography variant="h4" component="h1" gutterBottom>
					Models
				</Typography>

				<Box sx={{ width: "100%", maxWidth: 200, mb: 2 }}>
					<Tabs
						value={activeTab}
						onChange={handleTabChange}
						variant="fullWidth">
						<Tab sx={{ color: "text.primary" }} label="Models" />
						<Tab sx={{ color: "text.primary" }} label="Training" />
					</Tabs>
				</Box>

				{children}
			</Stack>
		</Box>
	);
}
