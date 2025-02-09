import { LandingSubheader } from "@/components/Typography/Subheaders";
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const membershipData = {
	title: "Empower, Automate, and Scale",
	benefits: [
		{
			title: "Scalable Access for Teams",
			description:
				"Easily onboard and manage your entire team with flexible role-based access. No user limits, no extra fees—collaborate seamlessly."
		},
		{
			title: "Instant Feedback & Execution",
			description:
				"Your requests are handled in real-time with, ensuring quick turnarounds and transparent progress tracking."
		},
		{
			title: "All-in-One Business Hub",
			description:
				"Unify your operations with a single tool—manage projects, automate workflows, track performance, and communicate effortlessly."
		},
		{
			title: "Seamless Integration",
			description:
				"Connect your business tools in one place—Sales, Marketing, HR, and Finance—all working together harmoniously."
		}
	]
};

const MembershipSection = () => {
	return (
		<Box
			component="section"
			id="Membership"
			sx={{ p: 1, backgroundColor: "common.white" }}>
			<Stack direction={"column"} alignItems={"center"} mb={4} px={4}>
				<LandingSubheader title={membershipData.title} />
				<Stack
					direction={"row"}
					gap={4}
					flexWrap={"wrap"}
					justifyContent={"center"}>
					<Image
						src="/coder.svg"
						alt="illustration"
						width={600}
						height={400}
						style={{ maxWidth: "100%", height: "auto" }}
					/>
					<Stack direction={"column"} alignItems={"center"}>
						{membershipData.benefits.map((benefit, index) => (
							<Stack
								key={index}
								direction={"row"}
								alignItems={"center"}
								gap={2}
								mb={2}>
								<Box
									sx={{
										// width: 48,
										// height: 48,
										minWidth: 48,
										minHeight: 48,
										backgroundColor: "#fb923c",
										color: "#fff",
										borderRadius: 1,
										display: "flex",
										alignItems: "center",
										justifyContent: "center"
									}}>
									<FontAwesomeIcon icon={faFire} />
								</Box>
								<Box maxWidth={400}>
									<Typography
										variant="subtitle1"
										fontWeight="bold"
										color="text.primary">
										{benefit.title}
									</Typography>
									<Typography variant="body2" color="text.primary">
										{benefit.description}
									</Typography>
								</Box>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default MembershipSection;
