"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Modal,
	Box,
	IconButton,
	Menu,
	MenuItem,
	SvgIcon,
	Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircle from "@mui/icons-material/AccountCircle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

interface PageData {
	name: string;
	image: string;
}

const Navbar: React.FC = () => {
	const [loginModal, setLoginModal] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const pageData: PageData[] = [
		{ name: "Benefits", image: "" },
		{ name: "Projects", image: "" },
		{ name: "Pricing", image: "" },
		{ name: "FAQs", image: "" }
	];

	const handleOpenModal = () => {
		setLoginModal(true);
	};

	const handleCloseModal = () => {
		setLoginModal(false);
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
							<Typography
								variant="h2"
								display="flex"
								alignItems="center"
								gap={1}>
								<SvgIcon sx={{ color: "secondary.main", fontSize: 40 }}>
									<FontAwesomeIcon icon={faFire} />
								</SvgIcon>
								IgniteHub
							</Typography>
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
							href="https://calendly.com/pminniti94/introductory-call"
							sx={{ color: "text.primary" }}
							onClick={handleOpenModal}>
							Book A Call
						</Button>
						<Button
							variant="contained"
							color="secondary"
							sx={{ color: "text.primary" }}
							onClick={handleOpenModal}>
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

						<MenuItem onClick={handleClose}>
							<Button
								variant="contained"
								color="info"
								href="https://calendly.com/pminniti94/introductory-call"
								sx={{ color: "text.primary" }}
								onClick={handleOpenModal}>
								Book A Call
							</Button>
						</MenuItem>
						<MenuItem>
							<Button
								variant="contained"
								color="secondary"
								sx={{ color: "text.primary" }}
								onClick={handleOpenModal}>
								Login
							</Button>
						</MenuItem>
					</Menu>
				</Toolbar>
			</AppBar>

			<Modal open={loginModal} onClose={handleCloseModal}>
				<Box
					sx={{
						p: 4,
						backgroundColor: "white",
						borderRadius: 1,
						width: 400,
						mx: "auto",
						mt: "20vh"
					}}>
					<Typography variant="h6" component="h2">
						Login
					</Typography>
					{/* Add your login form here */}
				</Box>
			</Modal>
		</>
	);
};

export default Navbar;
