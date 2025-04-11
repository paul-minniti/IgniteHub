"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
// import CardAlert from "./CardAlert";
import UserOptionsMenu from "./UserOptionsMenu";
import { useAuth } from "@/lib/context/authContext";

export default function UserMenu() {
	const { user } = useAuth();

	return (
		<>
			<Stack
				direction="row"
				sx={{
					p: 2,
					gap: 1,
					alignItems: "center",
					borderTop: "1px solid",
					borderColor: "divider"
				}}>
				<Avatar
					sizes="small"
					alt={user?.displayName as string}
					// src="/static/images/avatar/7.jpg"
					sx={{ width: 36, height: 36 }}
				/>
				<Box sx={{ mr: "auto" }}>
					<Typography
						variant="body2"
						sx={{ fontWeight: 500, lineHeight: "16px" }}>
						{user?.displayName}
					</Typography>
				</Box>
				<UserOptionsMenu />
			</Stack>
		</>
	);
}
