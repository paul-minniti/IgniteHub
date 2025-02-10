"use static";

import React from "react";
import { Box, Typography, Link, List, ListItem } from "@mui/material";

export default function Terms() {
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
			<Typography variant="h3" component="h1" gutterBottom>
				IgniteHub Terms of Service
			</Typography>

			<Typography variant="body2" color="text.primary">
				<strong>Effective Date:</strong> Febuary 9th 2025
				<br />
				<strong>Last Updated:</strong> Febuary 9th 2025
			</Typography>

			<Typography variant="h5" component="h2" gutterBottom>
				1. Acceptance of Terms
			</Typography>
			<Typography variant="body1">
				By accessing or using <strong>IgniteHub</strong> (&quot;Service&quot;),
				you agree to be bound by these Terms, including our{" "}
				<Link href="/privacy">Privacy Policy</Link>. If you do not agree to
				these Terms, you may not use the Service.
			</Typography>
			<Typography variant="body1">
				If you are using IgniteHub on behalf of an organization, you represent
				that you have the authority to bind that organization to these Terms.
			</Typography>

			<Typography variant="h5" component="h2" gutterBottom>
				2. Changes to Terms
			</Typography>
			<Typography variant="body1">
				We may update these Terms periodically. We will notify you of material
				changes by email or through the platform. <strong>Continued use</strong>{" "}
				of IgniteHub after the changes take effect constitutes{" "}
				<em>acceptance</em> of the revised Terms.
			</Typography>

			<Typography variant="h5" component="h2" gutterBottom>
				3. Account Registration & Security
			</Typography>

			<Typography variant="subtitle1">
				3.1 <strong>Eligibility</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					You must be at least <strong>18 years old</strong> or of legal age in
					your jurisdiction.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					You must provide <strong>accurate and complete</strong> information
					when creating an account.
				</ListItem>
			</List>

			<Typography variant="subtitle1">
				3.2 <strong>Account Responsibilities</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					You are responsible for maintaining the{" "}
					<strong>security of your account credentials</strong>.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					You agree <strong>not</strong> to share your account with others or
					allow unauthorized access.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					You must notify us <strong>immediately</strong> if you suspect
					unauthorized activity.
				</ListItem>
			</List>

			<Typography variant="h5" component="h2" gutterBottom>
				4. Use of Service
			</Typography>
			<Typography variant="subtitle1">
				4.1 <strong>Permitted Use</strong>
			</Typography>
			<Typography variant="body1">
				IgniteHub is designed for <strong>business purposes only</strong>. You
				may use the Service to manage your business operations, including
				marketing, sales, inventory, finance, and HR.
			</Typography>

			<Typography variant="subtitle1">
				4.2 <strong>Prohibited Activities</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					You agree <strong>not</strong> to use IgniteHub for{" "}
					<strong>illegal, harmful, or fraudulent purposes</strong>.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					You may not reverse-engineer, copy, or attempt to{" "}
					<strong>hack</strong> the platform.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					Do not interfere with or disrupt the Service, including distributing{" "}
					<strong>malware</strong>.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					Violating <strong>intellectual property rights</strong> belonging to
					IgniteHub or others is prohibited.
				</ListItem>
			</List>

			<Typography variant="h5" component="h2" gutterBottom>
				5. Subscription & Payment
			</Typography>

			<Typography variant="subtitle1">
				5.1 <strong>Pricing & Plans</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					IgniteHub offers <strong>subscription-based pricing</strong> with
					different tiers.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					Prices and features vary based on the selected plan.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					All fees are listed in <strong>[Insert Currency]</strong> and are
					subject to change.
				</ListItem>
			</List>

			<Typography variant="h5" component="h2" gutterBottom>
				6. Data & Privacy
			</Typography>

			<Typography variant="subtitle1">
				6.1 <strong>Data Ownership</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					You retain ownership of all <strong>data you input</strong> into
					IgniteHub.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					By using the Service, you grant IgniteHub a{" "}
					<strong>limited, non-exclusive</strong> license to process your data
					to provide the Service.
				</ListItem>
			</List>

			<Typography variant="h5" component="h2" gutterBottom>
				10. Limitation of Liability
			</Typography>
			<Typography variant="subtitle1">
				10.1 <strong>Disclaimer of Warranties</strong>
			</Typography>
			<List sx={{ listStyleType: "disc", pl: 2 }}>
				<ListItem sx={{ display: "list-item" }}>
					IgniteHub is provided <strong>&quot;as is&quot;</strong> without
					warranties of any kind.
				</ListItem>
				<ListItem sx={{ display: "list-item" }}>
					We <strong>do not guarantee</strong> uninterrupted service, error-free
					operation, or absolute data security.
				</ListItem>
			</List>

			<Typography variant="h5" component="h2" gutterBottom>
				14. Contact Information
			</Typography>
			<Typography variant="body1">
				For questions about these Terms, contact us at:
			</Typography>
			<Typography variant="body1">
				<strong>IgniteHub</strong>
				<br />
				Attn: Legal Team
				<br />
				P.O. Box 4398
				<br />
				Chase, Maryland, 21220, United States
				<br />
				Email:{" "}
				<Link href="mailto:support@getignitehub.com">
					support@getignitehub.com
				</Link>
			</Typography>

			<Typography variant="body2" color="text.primary">
				By using IgniteHub, you acknowledge that you have read and understood
				these Terms of Service.
			</Typography>
		</Box>
	);
}
