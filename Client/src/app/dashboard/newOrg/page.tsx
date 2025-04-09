"use client";

import React, { useState } from "react";
import {
	Stack,
	Box,
	Typography,
	TextField,
	Button,
	useTheme,
	useMediaQuery
} from "@mui/material";
import Image from "next/image";
import IgniteHub from "@/components/Typography/IgniteHub";
// import { createOrg, addUserToOrg } from "@IgniteHub/dataconnect";
// import { dataConnect } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/lib/context/dashboardContext";
import { auth } from "@/lib/firebase";

export default function CreateProjectPage() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const router = useRouter();
	const { handleAddOrg } = useDashboard();

	const [projectName, setProjectName] = useState<string>("");

	const handleContinue = async () => {
		handleAddOrg(projectName);
		router.push("/dashboard");
	};

	const handleTest = async () => {
		if (!auth.currentUser) {
			console.error("No user is currently signed in.");
			return;
		}
		const token = await auth.currentUser.getIdToken();

		const userProfile = fetch(
			"/api/user?" +
				new URLSearchParams({
					userId: auth.currentUser.uid,
					displayName: auth.currentUser.displayName as string,
					email: auth.currentUser.email as string
				}).toString(),
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			}
		);
		console.log("userProfile: ", userProfile);
	};

	return (
		<Stack
			sx={{
				height: "100vh",
				width: "100%",
				p: 4,
				boxSizing: "border-box"
			}}
			spacing={4}
			justifyContent={"start"}>
			<IgniteHub />

			<Stack direction={"row"} justifyContent={"space-between"}>
				<Stack
					flex={1}
					justifyContent="center"
					spacing={2}
					sx={{
						maxWidth: 480,
						mx: "auto"
					}}>
					<Typography variant="h5" gutterBottom>
						Let’s Setup Your Org!
					</Typography>

					<Typography variant="h6">What’s the name of your company?</Typography>

					<TextField
						variant="outlined"
						value={projectName}
						onChange={(e) => setProjectName(e.target.value)}
					/>

					<Box>
						<Button
							variant="contained"
							color="primary"
							onClick={handleContinue}
							disabled={!projectName}>
							Continue
						</Button>
					</Box>
					<Box>
						<Button variant="contained" color="primary" onClick={handleTest}>
							Test
						</Button>
					</Box>
				</Stack>

				{!isSmallScreen && (
					<Box
						flex={1}
						display="flex"
						alignItems="center"
						justifyContent="center">
						<Box sx={{ position: "relative", width: 350, height: 400 }}>
							<Image
								src="/hello.svg"
								alt="Illustration"
								fill
								style={{ objectFit: "contain" }}
							/>
						</Box>
					</Box>
				)}
			</Stack>
		</Stack>
	);
}
