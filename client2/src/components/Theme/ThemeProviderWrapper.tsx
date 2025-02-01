"use client";

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/Theme/theme";

interface ThemeProviderWrapperProps {
	children: React.ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
	children
}) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
