import { LandingSubheader } from "@/components/Typography/Subheaders";
import { Box, Stack, Typography, Container } from "@mui/material";

const pageData = [
	{
		question: "Why wouldn't I just hire a full-time engineer?",
		answer:
			"Good question! For starters, the annual cost of a full-time senior-level engineer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize. With the monthly plan, you can pause and resume your subscription as often as you need to ensure you're only paying your engineer when you have work available for them."
	},
	{
		question: "Is there a limit to how many requests I can have?",
		answer:
			"Once subscribed, you're able to add as many requests to your queue as you'd like, and they will be delivered one by one."
	},
	{
		question: "How fast will I receive my request?",
		answer:
			"On average, most requests are completed in just three days or less. However, more complex requests can take longer. Each request on our board is tagged with an expected compltion date."
	},
	{
		question: "Who are the engineers?",
		answer:
			"You might be surprised to hear this, but IgniteHub is actually an agency of one, you will work directly with me. However, we will work to integrate with other service providers as your business grows. You might also exprect to hear from an intern or two."
	},
	{
		question: "What technologies do you use to develope your applications?",
		answer:
			"This is a hard question to answer because not every problem has a once sized fits all solution. Adapting old technologies to newer onces is also a challenge we face in our industry. Here is a list of technologies we will work with: Git/Github, GitLab, Python, Typescript, Node, TailwindCss, Bootstrap, MaterialUI Svelte, React, Angular, Vue, Docker, AWS, GCP, Nginx, Kubernetes, MongDB, PostgreSQL, JWT Auth, Restful APIs, Redis, Testing... and so much more."
	},
	{
		question: "How do I request work?",
		answer:
			"IgniteHub offers a ton of flexibility in how you request designs using our custom built request boards. It has pre built requests with forms for information about your specific request. Upload any relevant inforamtion to the ticket and put into your queue. Basically, if it can be linked to or shared over the internet, it's fair game."
	},
	{
		question: "What if I don't like the end result?",
		answer: "No worries! We'll continue to revise until you're 100% satisfied."
	},
	{
		question: "Is there any design work you don't cover?",
		answer:
			"Absolutely. If there isnt already a ticket for it on our board, Create a custom ticket, we will review and see if its something we think we can do. If it is we will add it as a new request type!"
	},
	{
		question: "What if I only have a single request?",
		answer:
			"That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste."
	},
	{
		question: "Are there any refunds if I don't like the service?",
		answer:
			"There are no refunds. We strive to make sure you feel your getting value out of your subscription. IF you dont feel like you are, cancel at any time, no questions asked."
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
							textAlign="center"
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
