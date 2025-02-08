"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";

const HeroSection = () => {
	const [email, setEmail] = useState("");

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSignUp = () => {
		// TODO: Add your sign-up logic here (e.g., call an API or add to mailing list)
		console.log(`Signing up with email: ${email}`);
	};

	return (
		<Box
			sx={{
				pt: { xs: 12, md: 20 },
				pb: 2,
				color: "white",
				textAlign: "center"
			}}>
			<Stack spacing={2} gap={6} alignItems="center">
				<Stack
					spacing={2}
					gap={4}
					direction={{ xs: "column", md: "row" }}
					alignItems="center">
					{/* Headline */}
					<Typography variant="h1" fontWeight="bold" sx={{ lineHeight: 1.2 }}>
						Ignite Your Business’s <br />
						Potential on Fire!
					</Typography>
					<Stack
						spacing={2}
						alignItems="center"
						sx={{ width: "100%", maxWidth: 400 }}>
						{/* One-sentence pitch about IgniteHub */}
						<Typography variant="h5" sx={{ fontWeight: 400, maxWidth: 600 }}>
							One AI-powered ERP to unify your entire business—so you can focus
							on serving your customers.
						</Typography>

						{/* Email Sign-Up Form */}
						<Stack
							direction={{ xs: "column", sm: "row" }}
							spacing={2}
							alignItems={"center"}
							justifyContent={"space-between"}>
							<TextField
								type="email"
								variant="outlined"
								size="small"
								placeholder="Sign up for updates!"
								value={email}
								onChange={handleEmailChange}
								sx={{ backgroundColor: "#fff", borderRadius: 1, width: 250 }}
							/>
							<Button
								variant="contained"
								size="large"
								sx={{
									color: "#000",
									backgroundColor: "#fff",
									":hover": { backgroundColor: "#f0f0f0" }
								}}
								onClick={handleSignUp}>
								Sign Up
							</Button>
						</Stack>
					</Stack>
				</Stack>
				<Button
					variant="contained"
					href="#Pricing"
					size="large"
					sx={{
						color: "#000",
						backgroundColor: "#fff",
						":hover": { backgroundColor: "#f0f0f0" }
					}}>
					Explore Our Plans
				</Button>
			</Stack>
		</Box>
	);
};

export default HeroSection;
