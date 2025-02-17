"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import ThemeRegistry from "@/utils/Theme/ThemeRegistry";
import { OrgProvider } from "@/context/orgContext";
import { UserProvider } from "@/context/userContext";
import { SnackbarProvider } from "@/context/snackbarContext";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeRegistry>
			<SnackbarProvider>
				<AuthProvider>
					<UserProvider>
						<OrgProvider>{children}</OrgProvider>
					</UserProvider>
				</AuthProvider>
			</SnackbarProvider>
		</ThemeRegistry>
	);
}
