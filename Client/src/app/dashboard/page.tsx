"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { Box, Stack } from "@mui/material";
import MainGrid from "./components/MainGrid";

export default function Dashboard() {
	const router = useRouter();
	const { user, loading } = useAuth();
	// const dbUser = listUsers().then((data) => {
	// 	return data;
	// });
	useEffect(() => {
		// console.log("Auth user: ", user);
		// console.log("Database user: ", dbUser);
		// If not loading, but no user, redirect to login
		if (!loading && !user) {
			router.push("/");
		}
	}, [user, loading, router]);

	// If still loading, show a spinner or loading UI
	if (loading) return <p>Loading...</p>;
	if (!user) return null; // or return a skeleton

	// If user exists, show the protected content
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
					mt: { xs: 8, md: 0 }
				}}>
				<MainGrid />
			</Stack>
		</Box>
	);
}
