"use client";

import { LandingSubheader } from "@/components/Typography/Subheaders";
import { useAuth } from "@/lib/context/authContext";
import {
	Box,
	Stack,
	Typography,
	Card,
	CardContent,
	Button
} from "@mui/material";

const pageData = [
	{
		title: "Other ERP's",
		description:
			"Traditional ERP providers charge exorbitant fees—up to $1,800 for a single license or over $99 per user, making scalability expensive and restrictive.",
		price: "$1XXX+",
		period: "/month"
	},
	{
		title: "Base Subscription",
		description:
			"Get full access to IgniteHub’s powerful features for a simple, predictable flat rate. No hidden costs, just seamless business management.",
		price: "$49",
		period: "/month"
	},
	{
		title: "Additional Users",
		description:
			"Scale your team effortlessly. Add unlimited users at an affordable price, ensuring everyone has access without breaking the bank.",
		price: "$9.99",
		period: "/month"
	}
];

const PricingSection = () => {
	const { setModalView, setIsModalOpen } = useAuth();

	return (
		<Box
			component="section"
			id="Pricing"
			sx={{ backgroundColor: "common.white", pt: 10, pb: 2, px: 6 }}>
			<Stack direction="column" alignItems="center" mb={4}>
				<LandingSubheader
					title="Transparent Pricing"
					text="Our Competitors Hide Their Prices Behind A Sales Call, We Don't!"
				/>

				<Stack
					direction={{ xs: "column", md: "row" }}
					spacing={4}
					justifyContent="center"
					flexGrow={1}>
					{pageData.map((card, index) => (
						<Card key={index} sx={{ textAlign: "center", flex: 1 }}>
							<CardContent>
								<Typography variant="h3" fontWeight="bold" mb={1}>
									{card.title}
								</Typography>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="baseline"
									my={2}>
									<Typography variant="h4" fontWeight="bold" mr={1}>
										{card.price}
									</Typography>
									<Typography variant="body1" color="text.primary">
										{card.period}
									</Typography>
								</Box>
								<Box textAlign="left" mb={4} px={2}>
									<Typography variant="body2" color="text.primary">
										{card.description}
									</Typography>
								</Box>
								{card.title !== "Other ERP's" && (
									<Box
										sx={{
											display: "flex",
											flexDirection: "column",
											gap: 2
										}}>
										<Button
											variant="contained"
											sx={{
												color: "text.primary",
												backgroundColor: "info.main",
												":hover": { backgroundColor: "info.600" }
											}}
											onClick={() => {
												setModalView("signup");
												setIsModalOpen(true);
											}}>
											Sign Up For Free
										</Button>
										<Button
											variant="contained"
											color="secondary"
											href="https://calendly.com/pminniti94/introductory-call"
											target="_blank"
											rel="noopener noreferrer">
											Book A Call
										</Button>
									</Box>
								)}
							</CardContent>
						</Card>
					))}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PricingSection;
