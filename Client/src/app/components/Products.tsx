"use client";

import { useState } from "react";
import {
	Box,
	Typography,
	Card,
	CardContent,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Stack,
	SvgIcon
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { LandingSubheader } from "@/components/Typography/Subheaders";

const products = [
	{
		title: "Web Hub",
		description:
			"Imagine launching a stunning website without wrestling with complicated code or design jargon. The Web Hub provides a simple, powerful platform to build your online presence, helping you captivate visitors and effortlessly convert them into loyal customers. Think of it as your digital storefront—always open, always fresh, and always working hard to showcase the best of what you offer.",
		features: [
			"Intuitive page builder with drag-and-drop customization.",
			"Built-in SEO tools for better search engine visibility.",
			"E-commerce functionality to sell products or services directly.",
			"Real-time analytics to track visitor behavior and site performance.",
			"Seamless integration with email capture forms and newsletters."
		]
	},
	{
		title: "Marketing Hub",
		description:
			"Picture planning a new product launch or a bold influencer campaign with a single, all-in-one console at your fingertips. The Marketing Hub helps you craft compelling strategies, gather invaluable audience insights, and execute multi-channel outreach that resonates. In essence, it’s your personal marketing command center—designed to help you stand out in a crowded marketplace.",
		features: [
			"Multi-channel campaign management (email, SMS, ads, and more)",
			"Targeted audience segmentation and lead scoring",
			"Automated workflows for drip campaigns and follow-up messages",
			"Performance dashboards for real-time metrics",
			"Customizable landing pages and forms for lead capture"
		]
	},
	{
		title: "Social Hub",
		description:
			"Think of a single dashboard where you can watch your brand’s story unfold across multiple social platforms. From Instagram posts to LinkedIn articles, the Social Hub helps you manage content, track engagement, and nurture authentic relationships with your audience. It’s your megaphone in the digital age—bringing your message to the right people at the right time.",
		features: [
			"Unified content scheduling and publishing across social networks",
			"Real-time engagement tracking and sentiment analysis",
			"Team collaboration tools for content review and approvals",
			"Post-performance analytics to identify top-performing content",
			"Easy integration of social feeds into your website"
		]
	},
	{
		title: "Sales Hub",
		description:
			"Envision a streamlined, proactive sales process that keeps you in control from the first hello to the final handshake. The Sales Hub offers an intuitive CRM and deal-tracking pipeline, so you can nurture relationships, monitor progress, and close deals faster. It’s the engine that drives your revenue, helping you transform curious prospects into enthusiastic buyers.",
		features: [
			"Centralized CRM with lead and contact management",
			"Automated deal pipelines with custom stages",
			"Quote and invoice generation directly within the platform",
			"Performance analytics and sales forecasting",
			"Notification system for timely follow-ups and activity reminders"
		]
	},
	{
		title: "Inventory Hub",
		description:
			"Imagine knowing exactly where every product stands—whether it’s on the shelf, en route from a supplier, or racing out the door to your best customer. The Inventory Hub provides real-time visibility and meticulous tracking, freeing you from manual spreadsheets and costly stockouts. It’s your assurance that the right items are always in the right place at the right time.",
		features: [
			"Live inventory tracking with SKU-level detail",
			"Automated reorder triggers based on custom thresholds",
			"Supplier management for seamless purchase orders",
			"Real-time stock updates across sales channels",
			"Centralized dashboard for multi-location oversight"
		]
	},
	{
		title: "HR Hub",
		description:
			"Picture an easy, digital-first approach to recruiting, onboarding, and nurturing your team. The HR Hub takes the headache out of paperwork, payroll, and performance reviews, giving you a people-centric platform that aligns every employee’s growth with your business goals. It’s the backbone of a happier, more engaged workforce.",
		features: [
			"Integrated applicant tracking for streamlined recruiting",
			"Digital onboarding and employee self-service portals",
			"Time-off requests, scheduling, and attendance management",
			"Performance tracking with goal-setting and review cycles",
			"Secure storage of employee records and compliance documents"
		]
	},
	{
		title: "Finance Hub",
		description:
			"Imagine having instant clarity over your entire financial landscape—from daily transactions to future cash flow projections. The Finance Hub brings all your monetary movements under one roof, helping you confidently navigate everything from invoices and payroll to taxes and financial statements. It’s the pulse of your business, guiding each strategic move.",
		features: [
			"Automated invoicing and payment reminders",
			"Expense and budgeting tools for better cost management",
			"Real-time dashboards for revenue, cash flow, and profitability",
			"Tax-ready reporting, including balance sheets and P&L",
			"Secure syncing with payment gateways and bank accounts"
		]
	}
];

const ProductsSection = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const selectedProject = products[selectedIndex];

	return (
		<Box
			component="section"
			id="Products"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				backgroundColor: "common.white",
				pt: 10,
				pb: 2,
				px: { xs: 1, md: 6 }
			}}>
			<LandingSubheader title={"A Hub For Every Purpose"} />

			<Card sx={{ p: 0 }}>
				<CardContent sx={{ p: 0, paddingBottom: "0px !important" }}>
					<Stack direction={{ xs: "column", md: "row" }}>
						<List
							sx={{
								display: { xs: "flex", md: "block" },
								flexWrap: "wrap"
							}}>
							{products.map((project, index) => (
								<ListItem
									key={index}
									disablePadding
									sx={{ width: { xs: "90px", md: "175px" } }}>
									<ListItemButton
										selected={selectedIndex === index}
										onClick={() => setSelectedIndex(index)}
										sx={{
											p: { xs: 1 },
											height: "100%",
											"&.Mui-selected": {
												backgroundColor: "secondary.main",
												color: "text.secondary"
											},
											"&.Mui-selected:hover": {
												backgroundColor: "secondary.600"
											}
										}}>
										<SvgIcon
											sx={{
												display: { xs: "none", md: "block" },
												marginRight: 1
											}}>
											<FontAwesomeIcon icon={faFire} />
										</SvgIcon>
										<ListItemText primary={project.title} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
						<Card sx={{ p: 3 }}>
							<CardContent>
								<Typography variant="h5" fontWeight="bold">
									{selectedProject.title}
								</Typography>
								<Typography variant="body1" sx={{ mt: 2 }}>
									{selectedProject.description}
								</Typography>
								<Typography variant="h6" sx={{ mt: 2 }}>
									Features:
								</Typography>
								<ul>
									{selectedProject.features.map((feature, idx) => (
										<li key={idx}>
											<Typography variant="body2">{feature}</Typography>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</Stack>

					{/* <Grid container>
						<Grid size={{ xs: 12, md: 3 }} sx={{ alignItems: "center" }}></Grid>

						<Grid size={{ xs: 12, md: 9 }}>
							<Card sx={{ p: 3 }}>
								<CardContent>
									<Typography variant="h5" fontWeight="bold">
										{selectedProject.title}
									</Typography>
									<Typography variant="body1" sx={{ mt: 2 }}>
										{selectedProject.description}
									</Typography>
									<Typography variant="h6" sx={{ mt: 2 }}>
										Features:
									</Typography>
									<ul>
										{selectedProject.features.map((feature, idx) => (
											<li key={idx}>
												<Typography variant="body2">{feature}</Typography>
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</Grid>
					</Grid> */}
				</CardContent>
			</Card>
		</Box>
	);
};

export default ProductsSection;
