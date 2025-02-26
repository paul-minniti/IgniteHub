"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import AppNavbar from "./components/AppNavbar";
import SideMenu from "./components/SideMenu";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/context/authContext";

export default function Dashboard({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const router = useRouter();
	const { user, loading } = useAuth();

	useEffect(() => {
		if (!loading && !user) {
			router.push("/");
		}
	}, [user, loading, router]);

	if (loading) return <p>Loading...</p>;
	if (!user) return null;

	return (
		<Box sx={{ display: "flex" }}>
			<SideMenu />
			<AppNavbar />
			{children}
		</Box>
	);
}
