import { Box, Stack, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";

const BenefitsSection = () => {
	return (
		<Box
			component="section"
			id="Benefits"
			sx={{ backgroundColor: "common.white", py: 6 }}>
			<Stack direction="column" alignItems="center" mb={4} px="32px">
				<Stack direction="column" textAlign="center" mb={4} maxWidth="40rem">
					<Typography variant="h2" fontWeight="bold" mb={2}>
						Sit Back, We&apos;ve Got It From Here
					</Typography>
					<Box
						sx={{
							width: "16rem",
							height: "4px",
							mx: "auto",
							backgroundColor: "#fb923c",
							opacity: 0.25,
							borderRadius: 1,
							mb: 3
						}}
					/>
					<Typography variant="h6" color="gray.800">
						We bridge the gap between your business needs and top-notch software
						development, making custom software accessible to businesses of all
						scales.
					</Typography>
				</Stack>

				<Stack
					direction="row"
					gap="24px"
					flexWrap="wrap"
					justifyContent="center">
					<Card
						elevation={0}
						sx={{
							textAlign: "center",
							flex: 1,
							p: "16px"
						}}>
						<Box mb={2}>
							<Image
								src="/check_boxes.svg"
								alt="Check Boxes"
								width={200}
								height={200}
							/>
						</Box>
						<Typography variant="body1" color="gray.800">
							Subscribe to a plan that matches your needs. Cancel at any time,
							no questions asked.
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
							<Typography variant="body1" color="gray.800">
								Select a task from our task board, most requests can be
								completed within three working days.
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
							<Typography variant="body1" color="gray.800">
								We tirelessly refine our approach based on your feedback,
								striving for nothing short of your complete satisfaction.
							</Typography>
						</CardContent>
					</Card>
				</Stack>
			</Stack>
		</Box>
	);
};

export default BenefitsSection;
