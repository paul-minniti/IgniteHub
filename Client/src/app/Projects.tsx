import { LandingSubheader } from "@/components/Typography/Subheaders";
import {
	Box,
	Stack,
	Typography,
	Card,
	CardContent,
	Grid2 as Grid
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const ProjectsSection = () => {
	const pageData = [
		{
			title: "Software Design",
			description:
				"Our Software Architecture Design process is your gateway to a reliable, scalable, and efficient software ecosystem..."
		},
		{
			title: "UI/UX",
			description:
				"Elevate your digital presence with UI/UX design that meets your brand’s narrative..."
		},
		{
			title: "API Development",
			description:
				"Step into a world of endless integration possibilities with IgniteHub's custom API development..."
		},
		{
			title: "CI/CD Automation",
			description:
				"Propel your software delivery pipelines to new speeds with our CI/CD process..."
		},
		{
			title: "Database Management",
			description:
				"We prioritize your data's safety. Achieve peace of mind with our database management and security processes..."
		},
		{
			title: "Audit Consulting",
			description:
				"Already have something built? Our software audit process is meticulously designed to ensure your system’s efficiency..."
		}
	];

	return (
		<Box
			component="section"
			id="Projects"
			sx={{ backgroundColor: "common.white", pt: 10, pb: 2, px: 6 }}>
			<Stack direction="column" alignItems="center">
				<LandingSubheader title="What We Do" />
			</Stack>
			<Grid container spacing={4}>
				{pageData.map((item, index) => (
					<Grid key={index} size={{ xs: 12, md: 4 }}>
						<Card>
							<CardContent>
								<Box display="flex" alignItems="center" mb={2}>
									<Box
										sx={{
											width: 48,
											height: 48,
											backgroundColor: "#fb923c",
											color: "#fff",
											borderRadius: 1,
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											mr: 2
										}}>
										<FontAwesomeIcon icon={faFire} />
									</Box>
									<Typography variant="h6" fontWeight="bold" color="gray.800">
										{item.title}
									</Typography>
								</Box>
								<Typography variant="body2" color="gray.800">
									{item.description}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default ProjectsSection;
