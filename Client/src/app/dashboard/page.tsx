// "use client";

import { Box, Stack } from "@mui/material";
import MainGrid from "./components/MainGrid";

export default function Dashboard() {
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
				<MainGrid />
			</Stack>
		</Box>
	);
}
