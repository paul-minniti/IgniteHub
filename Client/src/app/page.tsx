import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Landing/Navbar";
import BenefitsSection from "../components/Landing/Benefits";
import HeroSection from "../components/Landing/Hero";
import MembershipSection from "../components/Landing/Membership";
import ProductSection from "../components/Landing/Products";
import PricingSection from "../components/Landing/Pricing";
import FAQSection from "../components/Landing/Faqs";
import { Wave1, Wave2 } from "@/components/Icons/CustomIcons";
import Footer from "@/components/Common/Footer";

export default function LandingPage() {
	return (
		<Box sx={{ backgroundColor: "secondary.main" }}>
			<Navbar />

			<HeroSection />

			<Wave1 />

			<BenefitsSection />

			<MembershipSection />

			<ProductSection />

			<PricingSection />

			<FAQSection />

			<Wave2 />

			<Footer />

			{/* <Box
				sx={{
					textAlign: "center",
					py: 6,
					backgroundColor: "#fb923c",
					color: "text.secondary"
				}}>
				<Container>
					<Typography
						variant="h1"
						fontWeight="bold"
						color="text.secondary"
						mb={2}>
						See if IgniteHub is right for you.
					</Typography>
					<Box
						sx={{
							width: "160px",
							height: "4px",
							mx: "auto",
							mt: 1,
							backgroundColor: "#fff",
							opacity: 0.25,
							borderRadius: 1,
							mb: 2
						}}
					/>
					<Typography variant="h5" color="text.secondary">
						Get a guided tour through IgniteHub.
					</Typography>
					<Typography variant="h5" color="text.secondary">
						Find out how we can transform your business operations.
					</Typography>
					<Typography variant="h5" mb={4} color="text.secondary">
						Let&apos;s build something extraordinary together.
					</Typography>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#fff",
							color: "#000",
							":hover": { backgroundColor: "#f0f0f0" }
						}}
						href="https://calendly.com/pminniti94/introductory-call"
						target="_blank"
						rel="noopener noreferrer">
						Book A Call
					</Button>
				</Container>
			</Box> */}
		</Box>
	);
}
