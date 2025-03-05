import { LandingSubheader } from "@/components/Typography/Subheaders";
import { Box, Stack, Typography, Container } from "@mui/material";

const pageData = [
	{
		question: "What is IgniteHub, and who is it for?",
		answer:
			"IgniteHub is an ERP-style platform designed for influencers, freelancers, and entrepreneurs looking for a simple, integrated way to manage every aspect of their business—from building a website to handling finances. We aim to streamline your tech stack so you can focus on what you do best: serving your customers."
	},
	{
		question:
			"How is IgniteHub different from other business management tools?",
		answer:
			"Unlike one-size-fits-all solutions, IgniteHub offers specialized Hubs—Web, Marketing, Social, Sales, Inventory, HR, Finance, and AI—that each address a specific area of your business. All Hubs work seamlessly together, giving you a single source of truth for data and eliminating the need for multiple, disjointed platforms."
	},
	{
		question: "Do I need technical skills to build a website with the Web Hub?",
		answer:
			"Not at all. The Web Hub comes with intuitive drag-and-drop features and pre-made templates, making it easy for anyone to create a professional-looking website—no coding required. Plus, our integrated SEO and analytics tools give you actionable insights without needing to be an expert."
	},
	{
		question: "How does IgniteHub help me manage my marketing campaigns?",
		answer:
			"The Marketing Hub provides an all-in-one dashboard for planning, executing, and tracking multi-channel campaigns (email, SMS, social, and more). You can segment audiences, automate follow-ups, and measure conversions, ensuring your marketing efforts are both targeted and effective."
	},
	{
		question:
			"Can I handle social media scheduling and engagement from one place?",
		answer:
			"Yes. The Social Hub consolidates your social media accounts, allowing you to schedule posts, track real-time engagement, and analyze performance metrics—all from a unified interface."
	},
	{
		question: "What if I already have a CRM or other business tools?",
		answer:
			"IgniteHub is designed to integrate smoothly with many popular platforms. We also provide migration tools and support to help you bring over existing data from your current systems, ensuring a seamless transition."
	},
	{
		question:
			"How does IgniteHub’s AI work, and what can it do for my business?",
		answer:
			"IgniteHub’s AI engine analyzes data across all Hubs—sales, marketing, inventory, and more—to identify patterns and opportunities. It can forecast demand, suggest marketing strategies, or even generate content ideas. The more data you supply, the more accurate and valuable its insights become."
	},
	{
		question: "Is my data secure on IgniteHub?",
		answer:
			"Absolutely. We prioritize security and data protection with encrypted data transfer, secure hosting environments, and regular security audits. We also follow industry best practices to ensure compliance with relevant data protection regulations."
	},
	{
		question: "How do updates and new features work?",
		answer:
			"As part of your subscription or service package, you automatically receive updates and new features. We continuously improve IgniteHub based on user feedback and market trends, so you always have access to the latest capabilities without any extra cost."
	},
	{
		question: "What kind of customer support can I expect?",
		answer:
			"We offer multiple support channels—email, live chat, knowledge base, and even one-on-one onboarding sessions. Our team is dedicated to helping you set up, troubleshoot, and optimize your use of IgniteHub, ensuring you get the most out of our platform."
	}
];

const FAQSection = () => {
	return (
		<Box
			component="section"
			id="FAQs"
			sx={{ backgroundColor: "common.white", pt: 10, pb: 2, px: 6 }}>
			<Stack direction="column" alignItems="center" mb={4}>
				<LandingSubheader title="FAQs" />

				<Container maxWidth="md">
					{pageData.map((item, index) => (
						<Box
							key={index}
							mb={4}
							display={"flex"}
							flexDirection={"column"}
							textAlign="left"
							alignItems={"center"}>
							<Typography
								variant="h4"
								fontWeight="bold"
								color="text.primary"
								mb={1}>
								{item.question}
							</Typography>
							<Box
								sx={{
									width: "45%",
									height: "2px",
									backgroundColor: "secondary.main",
									opacity: 0.25,
									borderRadius: 1,
									mb: 2
								}}
							/>
							<Typography variant="body1" color="text.primary">
								{item.answer}
							</Typography>
						</Box>
					))}
				</Container>
			</Stack>
		</Box>
	);
};

export default FAQSection;
