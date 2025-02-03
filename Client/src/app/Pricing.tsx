import { LandingSubheader } from "@/components/Typography/Subheaders";
import {
	Box,
	Stack,
	Typography,
	Card,
	CardContent,
	Button
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

// Data for each pricing card
const pageData = [
	{
		title: "Entry Level",
		description: "Best option for small businesses...",
		price: "$299",
		period: "/month",
		benefits: [
			"Static Frontend WebPages",
			"SEO Optimization for Organic Traffic",
			"Maintenance and Support"
		]
	},
	{
		title: "Senior Architect",
		description: "Best for large scale uses...",
		price: "$2499",
		period: "/month",
		benefits: [
			"Full Stack Custom Development",
			"Containerized Cloud Deployments",
			"CI/CD Automated Pipelines",
			"UI/UX Design",
			"Business Integration Automation"
		]
	},
	{
		title: "Mid-Level Dev",
		description: "Relevant for multiple users...",
		price: "$999",
		period: "/month",
		benefits: [
			"Dynamic Frontend Components",
			"Database Management",
			"Cloud Hosting"
		]
	}
];

const PricingSection = () => {
	return (
		<Box
			component="section"
			id="Pricing"
			sx={{ backgroundColor: "common.white", pt: 10, pb: 2, px: 6 }}>
			<Stack direction="column" alignItems="center" mb={4}>
				<LandingSubheader
					title="Software Excellence, Transparent Pricing"
					text="Achieving your software goals shouldn't be a budgetary
						battle..."
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
								<Typography variant="body2" color="grey.700">
									{card.description}
								</Typography>
								<Box
									display="flex"
									justifyContent="center"
									alignItems="baseline"
									my={2}>
									<Typography variant="h4" fontWeight="bold" mr={1}>
										{card.price}
									</Typography>
									<Typography variant="body1" color="gray.500">
										{card.period}
									</Typography>
								</Box>
								<Box textAlign="left" mb={4} px={2}>
									{card.benefits.map((benefit, benefitIndex) => (
										<Box
											display="flex"
											alignItems="center"
											mb={1}
											key={benefitIndex}>
											<FontAwesomeIcon
												icon={faCheck}
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>{benefit}</Typography>
										</Box>
									))}
								</Box>
								<Box sx={{ flexGrow: 1 }}>
									<Button
										variant="contained"
										sx={{
											backgroundColor: "#fb923c",
											":hover": { backgroundColor: "#f28c24" }
										}}
										href="https://calendly.com/pminniti94/introductory-call"
										target="_blank"
										rel="noopener noreferrer">
										Book A Call
									</Button>
								</Box>
							</CardContent>
						</Card>
					))}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PricingSection;
