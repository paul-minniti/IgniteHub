"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
	IconButton,
	Menu,
	MenuItem,
	Typography,
	Stack,
	Box
} from "@mui/material";
import {
	Home as HomeIcon,
	Settings as SettingsIcon
} from "@mui/icons-material";
import { useDashboard } from "@/utils/context/dashboardContext";

export default function OrgMenu() {
	const { selectedIndex } = useDashboard();
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(menuAnchorEl);

	const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setMenuAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};

	useEffect(() => {
		console.log("selectedIndex", selectedIndex);
	}, [selectedIndex]);

	return (
		<>
			<Stack
				direction={"row"}
				width={"100%"}
				justifyContent={"space-between"}
				alignItems={"center"}>
				<Box
					sx={{
						padding: "8px",
						borderRadius: "100px",
						bgcolor: selectedIndex === -1 ? "grey.300" : "transparent",
						"&:hover": { bgcolor: "grey.300" }
					}}>
					<Link
						href="/dashboard"
						style={{
							display: "flex",
							textDecoration: "none",
							color: "inherit"
						}}>
						<HomeIcon sx={{ mr: "8px" }} />
						<Typography variant="subtitle1">Org Overview</Typography>
					</Link>
				</Box>
				<IconButton onClick={handleClickOpen}>
					<SettingsIcon />
				</IconButton>
			</Stack>

			<Menu
				anchorEl={menuAnchorEl}
				open={openMenu}
				onClose={handleMenuClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right"
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right"
				}}>
				<MenuItem onClick={handleMenuClose}>
					<Link
						href="/settings"
						style={{
							textDecoration: "none",
							color: "inherit",
							width: "100%"
						}}>
						Settings
					</Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link
						href="/users"
						style={{
							textDecoration: "none",
							color: "inherit",
							width: "100%"
						}}>
						Users
					</Link>
				</MenuItem>
				<MenuItem onClick={handleMenuClose}>
					<Link
						href="/billing"
						style={{
							textDecoration: "none",
							color: "inherit",
							width: "100%"
						}}>
						Billing
					</Link>
				</MenuItem>
			</Menu>
		</>
	);
}
