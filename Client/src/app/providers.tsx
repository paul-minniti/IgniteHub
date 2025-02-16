"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import ThemeRegistry from "@/utils/Theme/ThemeRegistry";
import { OrgProvider } from "@/context/orgContext";
import { UserProvider } from "@/context/userContext";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeRegistry>
			<AuthProvider>
				<UserProvider>
					<OrgProvider>{children}</OrgProvider>
				</UserProvider>
			</AuthProvider>
		</ThemeRegistry>
	);
}
