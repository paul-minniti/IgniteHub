"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	IconButton,
	Menu,
	MenuItem,
	Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import IgniteHub from "@/components/Typography/IgniteHub";
import { useAuth } from "@/lib/context/authContext";

interface PageData {
	name: string;
	image: string;
}

const Navbar: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const { setIsModalOpen, setModalView } = useAuth();
	const pageData: PageData[] = [
		{ name: "Benefits", image: "" },
		{ name: "Products", image: "" },
		{ name: "Pricing", image: "" },
		{ name: "FAQs", image: "" }
	];

	const handleOpenLoginModal = () => {
		setModalView("login");
		setIsModalOpen(true);
	};

	const handleOpenSignUpModal = () => {
		setModalView("signup");
		setIsModalOpen(true);
	};

	const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					backgroundColor: "transparent",
					color: "text.primary",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					boxShadow: "none",
					m: "8px"
				}}>
				<Toolbar
					sx={{
						width: "75%",
						justifyContent: "space-between",
						boxShadow: 2,
						backgroundColor: "background.default",
						borderRadius: 2,
						py: 2
					}}>
					<Box display="flex" alignItems="center" gap={1}>
						<Link href="/">
							<IgniteHub />
						</Link>
					</Box>
					<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
						{pageData.map((item) => (
							<Link key={item.name} href={`#${item.name}`}>
								<Typography
									variant="subtitle2"
									sx={{
										fontWeight: 800,
										"&:hover": {
											textDecoration: "underline"
										}
									}}>
									{item.name}
								</Typography>
							</Link>
						))}
					</Box>
					<Stack
						direction="row"
						gap={2}
						sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
						<Button
							variant="contained"
							color="info"
							sx={{ color: "text.primary" }}
							onClick={handleOpenSignUpModal}>
							Sign Up
						</Button>
						<Button
							variant="contained"
							color="secondary"
							sx={{ color: "text.primary" }}
							onClick={handleOpenLoginModal}>
							Login
						</Button>
					</Stack>
					<IconButton
						sx={{ display: { xs: "flex", md: "none" } }}
						size="large"
						edge="end"
						color="inherit"
						aria-label="menu"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}>
						<MenuIcon />
					</IconButton>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right"
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}>
						{pageData.map((item) => (
							<MenuItem key={item.name} onClick={handleClose}>
								<Link href={`#${item.name}`}>{item.name}</Link>
							</MenuItem>
						))}

						<MenuItem>
							<Button
								variant="contained"
								color="secondary"
								sx={{ color: "text.primary" }}
								onClick={handleOpenLoginModal}>
								Login
							</Button>
						</MenuItem>
						<MenuItem>
							<Button
								variant="contained"
								color="info"
								sx={{ color: "text.primary" }}
								onClick={handleOpenSignUpModal}>
								Sign Up
							</Button>
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;
