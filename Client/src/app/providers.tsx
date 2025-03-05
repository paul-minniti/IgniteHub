"use client";

import React from "react";
import { AuthProvider } from "@/lib/context/authContext";
import ThemeRegistry from "@/lib/Theme/ThemeRegistry";
import { DashboardProvider } from "@/lib/context/dashboardContext";
import { UserProvider } from "@/lib/context/userContext";
import { SnackbarProvider } from "@/lib/context/snackbarContext";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeRegistry>
			<SnackbarProvider>
				<AuthProvider>
					<UserProvider>
						<DashboardProvider>{children}</DashboardProvider>
					</UserProvider>
				</AuthProvider>
			</SnackbarProvider>
		</ThemeRegistry>
	);
}
