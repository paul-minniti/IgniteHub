import { LandingSubheader } from "@/components/Typography/Subheaders";
import { Box, Stack, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

const BenefitsSection = () => {
	return (
		<Box
			component="section"
			id="Benefits"
			sx={{ backgroundColor: "common.white", pt: 10, pb: 2, px: 6 }}>
			<Stack direction="column" alignItems="center" mb={4}>
				<LandingSubheader
					title="Your Business, Simplified with IgniteHub"
					text="IgniteHub transforms how businesses operate by integrating essential tools into a single, AI-powered platform. Automate tasks, gain real-time insights, and scale effortlessly."
				/>

				<Stack
					direction={{ xs: "column", md: "row" }}
					gap="24px"
					flexWrap="wrap"
					justifyContent="center">
					<Card elevation={0} sx={{ textAlign: "center", flex: 1, p: "16px" }}>
						<Box mb={2}>
							<Image
								src="/check_boxes.svg"
								alt="Check Boxes"
								width={200}
								height={200}
							/>
						</Box>
						<Typography variant="body1" color="text.primary">
							Unlock a powerful suite of connected tools to seamlessly drive
							growth and efficiency.
						</Typography>
					</Card>

					<Card elevation={0} sx={{ textAlign: "center", flex: 1 }}>
						<CardContent>
							<Box mb={2}>
								<Image
									src="/working.svg"
									alt="Working"
									width={200}
									height={200}
								/>
							</Box>
							<Typography variant="body1" color="text.primary">
								Leverage AI-driven insights to optimize workflows, saving time
								and maximizing impact.
							</Typography>
						</CardContent>
					</Card>

					<Card elevation={0} sx={{ textAlign: "center", flex: 1 }}>
						<CardContent>
							<Box mb={2}>
								<Image
									src="/iteration.svg"
									alt="Iteration"
									width={200}
									height={200}
								/>
							</Box>
							<Typography variant="body1" color="text.primary">
								IgniteHub adapts to your business size and needs, tailored for
								freelancers, entrepreneurs, and growing enterprises.
							</Typography>
						</CardContent>
					</Card>
				</Stack>
			</Stack>
		</Box>
	);
};

export default BenefitsSection;
