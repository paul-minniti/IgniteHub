"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectHubs";
import MenuContent from "./MenuContent";
// import CardAlert from "./CardAlert";
import OptionsMenu from "./OptionsMenu";
import OrgContent from "./OrgMenu";
import { useAuth } from "@/utils/context/authContext";

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
				<OptionsMenu />
			</Stack>
		</>
	);
}
