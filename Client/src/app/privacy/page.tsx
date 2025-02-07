"use client"; // If using Next.js App Router, ensure this is a client component

import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function PrivacyPolicy() {
	return (
		<Box
			sx={{
				maxWidth: 800,
				mx: "auto",
				my: 4,
				px: 2,
				display: "flex",
				flexDirection: "column",
				gap: 2
			}}>
			{/* Title */}
			<Typography variant="h3" component="h1" gutterBottom>
				Privacy Policy
			</Typography>

			<Typography variant="body2" color="text.secondary">
				Last Updated: February 1, 2025
			</Typography>

			{/* Intro */}
			<Typography variant="body1" paragraph>
				Thank you for using <strong>IgniteHub</strong> (“the App”). We respect
				your privacy and are committed to protecting your personal information.
				This Privacy Policy explains what data we collect from you, how we use
				it, and your rights regarding this information, in accordance with the
				requirements for using the Facebook Developers Platform (and other
				relevant laws or regulations).
			</Typography>

			{/* 1. Information We Collect */}
			<Typography variant="h5" component="h2" gutterBottom>
				1. Information We Collect
			</Typography>

			<Typography variant="subtitle1" component="h3">
				1.1 Information You Provide
			</Typography>
			<Typography variant="body1" paragraph>
				When you sign in or sign up using Facebook, we receive information such
				as your name, email address, profile picture, and any other details you
				permit Facebook to share with us through their OAuth process.
			</Typography>

			<Typography variant="subtitle1" component="h3">
				1.2 Automatically Collected Information
			</Typography>
			<Typography variant="body1" paragraph>
				We may collect information about how you interact with our App (e.g.,
				pages or screens visited, timestamps, clicks, etc.). We may also
				automatically collect certain information from your device (IP address,
				browser type, device type, unique device identifiers, operating system,
				etc.).
			</Typography>

			<Typography variant="subtitle1" component="h3">
				1.3 Cookies and Similar Technologies
			</Typography>
			<Typography variant="body1" paragraph>
				We may use cookies or similar technologies to improve your user
				experience, remember preferences, and tailor our services. You can
				configure your browser to refuse cookies or to indicate when a cookie is
				being sent. If you choose to refuse cookies, some features of our App
				may not function properly.
			</Typography>

			{/* 2. How We Use Your Information */}
			<Typography variant="h5" component="h2" gutterBottom>
				2. How We Use Your Information
			</Typography>
			<Typography variant="body1" paragraph>
				<strong>Account Creation & Authentication:</strong> To create,
				authenticate, and manage your user account using Facebook Login.
				<br />
				<strong>Service Delivery:</strong> To operate, maintain, and improve our
				App’s features and functionality.
				<br />
				<strong>Communications:</strong> To send you updates, respond to
				inquiries, and provide customer support.
				<br />
				<strong>Analytics & Improvements:</strong> To understand how users
				engage with our App, diagnose technical issues, and make improvements.
			</Typography>

			{/* 3. How We Share Your Information */}
			<Typography variant="h5" component="h2" gutterBottom>
				3. How We Share Your Information
			</Typography>
			<Typography variant="body1" paragraph>
				We may share data with trusted third parties who perform certain tasks
				on our behalf (e.g., hosting, analytics). We may disclose your
				information to comply with legal obligations or protect our rights. In
				the event of a merger, acquisition, or sale of assets, your personal
				information may be transferred as part of that transaction.
			</Typography>
			<Typography variant="body1">
				We do not sell or rent your personal information to third parties.
			</Typography>

			{/* 4. Third-Party Links and Integrations */}
			<Typography variant="h5" component="h2" gutterBottom>
				4. Third-Party Links and Integrations
			</Typography>
			<Typography variant="body1" paragraph>
				Our App may contain links to third-party websites or use external
				services such as Facebook Login. We do not control the privacy practices
				of these third parties. Any personal data you provide to them is
				governed by their respective privacy policies.
			</Typography>

			{/* 5. Data Retention */}
			<Typography variant="h5" component="h2" gutterBottom>
				5. Data Retention
			</Typography>
			<Typography variant="body1" paragraph>
				We retain your personal information only for as long as necessary to
				fulfill the purposes for which it was collected and to comply with
				legal, accounting, or reporting requirements. If you wish to delete your
				account or ask that we no longer use your information, please contact us
				(see Section 8).
			</Typography>

			{/* 6. Security */}
			<Typography variant="h5" component="h2" gutterBottom>
				6. Security of Your Information
			</Typography>
			<Typography variant="body1" paragraph>
				We implement reasonable technical, organizational, and administrative
				measures to protect your personal information. However, no method of
				transmission over the internet or method of electronic storage is 100%
				secure, and we cannot guarantee absolute security.
			</Typography>

			{/* 7. Your Rights and Choices */}
			<Typography variant="h5" component="h2" gutterBottom>
				7. Your Rights and Choices
			</Typography>
			<Typography variant="body1" paragraph>
				Depending on your location and applicable laws, you may have the right
				to access, correct, delete, or restrict certain uses of your personal
				information. You may also have the right to object to certain
				processing, or to withdraw consent where applicable. To exercise these
				rights, please contact us at the email below.
			</Typography>

			{/* 8. Contact Us */}
			<Typography variant="h5" component="h2" gutterBottom>
				8. Contact Us
			</Typography>
			<Typography variant="body1" paragraph>
				If you have any questions, concerns, or requests regarding this Privacy
				Policy, please contact us at:
			</Typography>
			<Typography variant="body1" paragraph>
				<strong>IgniteHub</strong>
				<br />
				Attn: Privacy Team
				<br />
				P.O. Box 4398
				<br />
				Chase, Maryland, 21220, United States
				<br />
				Email:{" "}
				<Link href="mailto:pminniti94@gmail.com">pminniti94@gmail.com</Link>
			</Typography>

			{/* 9. Updates to Policy */}
			<Typography variant="h5" component="h2" gutterBottom>
				9. Updates to This Policy
			</Typography>
			<Typography variant="body1" paragraph>
				We may update this Privacy Policy from time to time to reflect changes
				in our practices, technologies, legal requirements, or other factors.
				When we do, we will revise the “Last Updated” date above. Your continued
				use of the App after the effective date of the revised policy indicates
				your acceptance of the changes.
			</Typography>

			{/* Footer / Note */}
			<Typography variant="body2" color="text.secondary">
				By using our App, you acknowledge that you have read and understood this
				Privacy Policy. We recommend reviewing it periodically to stay informed
				about how we are protecting your information.
			</Typography>
		</Box>
	);
}
