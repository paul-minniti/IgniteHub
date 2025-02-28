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
import { createOrg, addUserToOrg } from "@IgniteHub/dataconnect";
import { dataConnect } from "@/utils/firebase";
import { useRouter } from "next/navigation";

export default function CreateProjectPage() {
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
	const router = useRouter();

	const [projectName, setProjectName] = useState("");

	const handleContinue = async () => {
		const createOrgResp = await createOrg({
			orgName: projectName,
			orgStatus: "free"
		});
		await addUserToOrg(dataConnect, {
			orginizationId: createOrgResp.data.orginization_insert.id
		});
		router.push("/dashboard");
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
