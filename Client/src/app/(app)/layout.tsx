"use client";

import React, { useEffect } from "react";
import { Box } from "@mui/material";
import AppNavbar from "./components/navigation/AppNavbar";
import SideMenu from "./components/navigation/SideMenu";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/context/authContext";

export default function Layout({
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
