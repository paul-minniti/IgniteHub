"use client";

import React from "react";
import { AuthProvider } from "@/utils/context/authContext";
import ThemeRegistry from "@/utils/Theme/ThemeRegistry";
import { DashboardProvider } from "@/utils/context/dashboardContext";
import { UserProvider } from "@/utils/context/userContext";
import { SnackbarProvider } from "@/utils/context/snackbarContext";

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
