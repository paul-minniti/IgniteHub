"use client";

import { Box, Stack, Typography } from "@mui/material";

export default function Models() {
	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto"
			}}>
			<Stack
				spacing={2}
				sx={{
					alignItems: "center",
					mx: 3,
					pb: 5,
					mt: { xs: 8, md: 2 }
				}}>
				<Typography variant="h4" component="h1" gutterBottom>
					Models
				</Typography>
				<Typography variant="body1">
					Your AI models will appear here.
				</Typography>
			</Stack>
		</Box>
	);
}
