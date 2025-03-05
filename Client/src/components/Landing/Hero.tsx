import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import SignupForm from "@/components/Common/SignUpForm";

const HeroSection = () => {
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
					<Typography
						variant="h1"
						fontWeight="bold"
						sx={{ lineHeight: 1.2, color: "text.secondary" }}>
						Ignite Your Business’s <br />
						Potential on Fire!
					</Typography>
					<Stack
						spacing={2}
						alignItems="center"
						sx={{ width: "100%", maxWidth: 400 }}>
						<Typography
							variant="h5"
							sx={{ fontWeight: 400, maxWidth: 600, color: "text.secondary" }}>
							One AI-powered ERP to unify your entire business—so you can focus
							on serving your customers.
						</Typography>

						<SignupForm />
					</Stack>
				</Stack>
				<Button
					variant="contained"
					href="#Pricing"
					size="large"
					sx={{
						color: "text.primary",
						backgroundColor: "primary.contrastText",
						":hover": { backgroundColor: "grey.400" }
					}}>
					Explore Our Plans
				</Button>
			</Stack>
		</Box>
	);
};

export default HeroSection;
