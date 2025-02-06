import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface LandingSubheaderProps {
	title: string;
	text?: string;
}
export const LandingSubheader: React.FC<LandingSubheaderProps> = ({
	title,
	text
}) => {
	return (
		<Stack direction="column" textAlign="center" mb={4} maxWidth="40rem">
			<Typography variant="h2" fontWeight="bold" mb={2}>
				{title}
			</Typography>
			<Box
				sx={{
					width: "16rem",
					height: "4px",
					mx: "auto",
					backgroundColor: "#fb923c",
					opacity: 0.25,
					borderRadius: 1,
					mb: 3
				}}
			/>
			{text && (
				<Typography variant="h6" color="grey.800">
					{text}
				</Typography>
			)}
		</Stack>
	);
};
