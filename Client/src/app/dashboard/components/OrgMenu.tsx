"use client";

import React, { useState } from "react";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function OrgContent() {
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const openMenu = Boolean(menuAnchorEl);

	const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => {
		event.stopPropagation();
		setMenuAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setMenuAnchorEl(null);
	};

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

						<Typography variant="subtitle1">Org Home</Typography>
					</Link>
				</Box>
				{/* Right: Gear icon that opens a popout menu */}
				<IconButton onClick={handleClickOpen}>
					<SettingsIcon />
				</IconButton>
			</Stack>

			{/* Popout menu for gear icon */}
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
