"use client";

import React from "react";
import { Box, CircularProgress, Typography, Container } from "@mui/material";

const AttemptingLogin = () => {
	return (
		<Container
			maxWidth={false}
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "background.default",
				zIndex: 9999
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3
				}}>
				<CircularProgress size={60} color="primary" />
				<Typography variant="h5" color="text.primary">
					Signing you in...
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Please wait while we authenticate your credentials
				</Typography>
			</Box>
		</Container>
	);
};

export default AttemptingLogin;
