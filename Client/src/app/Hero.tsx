import { Box, Stack, Typography, Button } from "@mui/material";
import Link from "next/link";

const HeroSection = () => {
	return (
		<Box
			sx={{
				pt: { xs: 8, md: 12 },
				pb: 2,
				color: "white"
			}}>
			<Stack
				direction={{ xs: "column", md: "row" }}
				gap={2}
				justifyContent="space-around"
				alignItems="center">
				<Stack
					spacing={2}
					sx={{
						width: { xs: "100%", md: "45%" },
						textAlign: "center"
					}}
					alignItems="center">
					<Typography variant="h1" fontWeight="bold">
						Ignite Your Business&apos;s
						<br />
						Potential on Fire!
					</Typography>
					<Typography variant="h4">
						Take your business to the next level with
						<br />a top-quality software development agency.
					</Typography>
					<Button
						variant="contained"
						href="#Pricing"
						sx={{
							color: "#000",
							backgroundColor: "#fff",
							":hover": { backgroundColor: "#f0f0f0" }
						}}
						size="large">
						Explore Our Plans
					</Button>
				</Stack>

				<Stack
					sx={{
						width: { xs: "100%", md: "45%" }
					}}
					alignItems="center"
					justifyContent="center">
					<Box
						component="iframe"
						width="580px"
						height="315px"
						src="https://www.youtube.com/embed/IVNK5gkVq2Q?si=JuJ_wUuQVM_DEj9s"
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						sx={{ maxWidth: "100%" }}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};

export default HeroSection;
