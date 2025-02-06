import { LandingSubheader } from "@/components/Typography/Subheaders";
import { Box, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const MembershipSection = () => {
	return (
		<Box
			component="section"
			id="Membership"
			sx={{ p: 1, backgroundColor: "common.white" }}>
			<Stack direction={"column"} alignItems={"center"} mb={4} px={4}>
				<LandingSubheader title="No Tricks, Just Code" />
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
						<Stack direction={"row"} alignItems={"center"} gap={2} mb={2}>
							<Box
								sx={{
									width: 48,
									height: 48,
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
									color="grey.900">
									Real-Time Updates
								</Typography>
								<Typography variant="body2" color="grey.600">
									We make sure you are kept in the loop 100% of the time. You
									will see changes daily...
								</Typography>
							</Box>
						</Stack>
						<Stack direction={"row"} alignItems={"center"} gap={2} mb={2}>
							<Box
								sx={{
									width: 48,
									height: 48,
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
									color="grey.900">
									Unlimited Members
								</Typography>
								<Typography variant="body2" color="grey.600">
									Invite as many users to your workspace as needed. Zero hidden
									fees.
								</Typography>
							</Box>
						</Stack>
						<Stack direction={"row"} alignItems={"center"} gap={2} mb={2}>
							<Box
								sx={{
									width: 48,
									height: 48,
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
									color="grey.900">
									Manage With One Tool
								</Typography>
								<Typography variant="body2" color="grey.600">
									Use our software to submit and prioritize your requests,
									manage your projects, communicate directly with your Ignite
									engineers...
								</Typography>
							</Box>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default MembershipSection;
