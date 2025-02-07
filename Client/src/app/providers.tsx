"use client";

import React from "react";
import { AuthProvider } from "@/context/authContext";
import ThemeRegistry from "@/utils/Theme/ThemeRegistry";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeRegistry>
			<AuthProvider>{children}</AuthProvider>
		</ThemeRegistry>
	);
}
