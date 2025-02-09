import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import IgniteHub from "../Typography/IgniteHub";
import Copyright from "./Copyright";
import SignupForm from "./SignUpForm";

export default function Footer() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: { xs: 4, sm: 8 },
				py: { xs: 8, sm: 10 },
				textAlign: { sm: "center", md: "left" },
				backgroundColor: "secondary.main",
				color: "text.secondary !important"
			}}>
			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					width: "100%",
					justifyContent: "space-between",
					gap: 4
				}}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						minWidth: { xs: "100%", sm: "60%" }
					}}>
					<Box sx={{ width: { xs: "100%", sm: "60%" } }}>
						<IgniteHub color="text.secondary" iconColor="text.secondary" />
						<Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
							Find out how we can transform your business operations. Let&apos;s
							build something extraordinary together.
						</Typography>

						<Typography
							variant="body2"
							gutterBottom
							sx={{ fontWeight: 600, mt: 2, color: "text.secondary" }}>
							Join the newsletter
						</Typography>
						<Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
							Subscribe for weekly updates. No spams ever!
						</Typography>
						<SignupForm />
					</Box>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						flexDirection: "column",
						gap: 1
					}}>
					<Link color="text.secondary" variant="body2" href="#Benefits">
						Benefits
					</Link>
					<Link color="text.secondary" variant="body2" href="#Products">
						Products
					</Link>
					<Link color="text.secondary" variant="body2" href="#Pricing">
						Pricing
					</Link>
					<Link color="text.secondary" variant="body2" href="#FAQs">
						FAQs
					</Link>
				</Box>
				<Box
					sx={{
						display: { xs: "none", sm: "flex" },
						flexDirection: "column",
						gap: 1
					}}>
					<Link color="text.secondary" variant="body2" href="#">
						Terms
					</Link>
					<Link color="text.secondary" variant="body2" href="/privacy">
						Privacy
					</Link>
					<Link color="text.secondary" variant="body2" href="/deleteuserdata">
						Delete Data
					</Link>
				</Box>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					pt: { xs: 4, sm: 8 },
					width: "100%",
					borderTop: "1px solid",
					borderColor: "divider"
				}}>
				<div>
					<Link color="text.secondary" variant="body2" href="/privacy">
						Privacy Policy
					</Link>
					<Typography
						sx={{
							display: "inline",
							mx: 0.5,
							opacity: 0.5,
							color: "text.secondary"
						}}>
						&nbsp;•&nbsp;
					</Typography>
					<Link color="text.secondary" variant="body2" href="#">
						Terms of Service
					</Link>
					<Copyright sx={{ color: "text.secondary" }} />
				</div>
			</Box>
		</Container>
	);
}
