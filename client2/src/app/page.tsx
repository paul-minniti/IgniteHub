"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
	Box,
	Button,
	Container,
	Grid,
	Typography,
	Card,
	CardContent,
	SvgIcon,
	Stack
} from "@mui/material";
import Navbar from "./Navbar"; // Adjust path as needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import BenefitsSection from "./Benefits";
import HeroSection from "./Hero";
import { LandingSubheader } from "@/components/Typography/Subheaders";

export default function LandingPage() {
	return (
		<Box sx={{ backgroundColor: "secondary.main" }}>
			<Navbar />

			<HeroSection />

			{/* WAVE SVG #1 (INLINE) */}
			<Box>
				<svg
					viewBox="0 0 1428 174"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					style={{ display: "block" }}>
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g
							transform="translate(-2.000000, 44.000000)"
							fill="#FFFFFF"
							fillRule="nonzero">
							<path
								d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 
                   C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 
                   C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
								opacity="0.100000001"
							/>
							<path
								d="M100,104.708498 
                   C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 
                   C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 
                   C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 
                   C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
								opacity="0.100000001"
							/>
							<path
								d="M1046,51.6521276 
                   C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 
                   L1439,120 
                   C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
								opacity="0.200000003"
							/>
						</g>
						<g
							transform="translate(-4.000000, 76.000000)"
							fill="#FFFFFF"
							fillRule="nonzero">
							<path
								d="M0.457,34.035 
                  C57.086,53.198 98.208,65.809 123.822,71.865 
                  C181.454,85.495 234.295,90.29 272.033,93.459 
                  C311.355,96.759 396.635,95.801 461.025,91.663 
                  C486.76,90.01 518.727,86.372 556.926,80.752 
                  C595.747,74.596 622.372,70.008 636.799,66.991 
                  C663.913,61.324 712.501,49.503 727.605,46.128 
                  C780.47,34.317 818.839,22.532 856.324,15.904 
                  C922.689,4.169 955.676,2.522 1011.185,0.432 
                  C1060.705,1.477 1097.39,3.129 1121.236,5.387 
                  C1161.703,9.219 1208.621,17.821 1235.4,22.304 
                  C1285.855,30.748 1354.351,47.432 1440.886,72.354 
                  L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
							/>
						</g>
					</g>
				</svg>
			</Box>

			<BenefitsSection />

			<Box
				component="section"
				id="Benefits"
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
										color="gray.900">
										Real-Time Updates
									</Typography>
									<Typography variant="body2" color="gray.600">
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
										color="gray.900">
										Unlimited Members
									</Typography>
									<Typography variant="body2" color="gray.600">
										Invite as many users to your workspace as needed. Zero
										hidden fees.
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
										color="gray.900">
										Manage With One Tool
									</Typography>
									<Typography variant="body2" color="gray.600">
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

			{/* WHAT WE DO SECTION */}
			<Box
				component="section"
				id="Projects"
				sx={{ backgroundColor: "#fff", py: 6 }}>
				<Container>
					<Typography
						variant="h4"
						fontWeight="bold"
						color="gray.800"
						textAlign="center"
						mt={3}>
						What We Do
					</Typography>
					<Box
						sx={{
							width: "160px",
							height: "4px",
							mx: "auto",
							mt: 2,
							backgroundColor: "#fb923c",
							opacity: 0.25,
							borderRadius: 1
						}}
					/>

					<Grid container spacing={4} sx={{ mt: 4 }}>
						{/* REPEATED CARDS: Software Design, UI/UX, API Development, etc. */}
						<Grid item xs={12} md={4}>
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
											Software Design
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										Our Software Architecture Design process is your gateway to
										a reliable, scalable, and efficient software ecosystem...
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} md={4}>
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
											UI/UX
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										Elevate your digital presence with UI/UX design that meets
										your brand’s narrative...
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} md={4}>
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
											API Development
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										Step into a world of endless integration possibilities with
										IgniteHub&apos;s custom API development...
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						{/* SECOND ROW */}
						<Grid item xs={12} md={4}>
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
											CI/CD Automation
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										Propel your software delivery pipelines to new speeds with
										our CI/CD process...
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} md={4}>
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
											Database Management
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										We prioritize your data&apos;s safety. Achieve peace of mind
										with our database management and security processes...
									</Typography>
								</CardContent>
							</Card>
						</Grid>

						<Grid item xs={12} md={4}>
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
											Audit Consulting
										</Typography>
									</Box>
									<Typography variant="body2" color="gray.800">
										Already have something built? Our software audit process is
										meticulously designed to ensure your system’s efficiency...
									</Typography>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* PRICING SECTION */}
			<Box
				component="section"
				id="Pricing"
				sx={{ backgroundColor: "#fff", py: 6 }}>
				<Container maxWidth="xl">
					<Box textAlign="center" mb={6}>
						<Typography variant="h4" fontWeight="bold" color="gray.800" mt={4}>
							Software Excellence, Transparent Pricing
						</Typography>
						<Box
							sx={{
								width: "160px",
								height: "4px",
								mx: "auto",
								mt: 2,
								backgroundColor: "#fb923c",
								opacity: 0.25,
								borderRadius: 1,
								mb: 2
							}}
						/>
						<Typography variant="h6" color="gray.800">
							Achieving your software goals shouldn&apos;t be a budgetary
							battle...
						</Typography>
					</Box>

					<Grid container spacing={4} justifyContent="center">
						{/* CARD #1 */}
						<Grid item xs={12} md={4}>
							<Card sx={{ textAlign: "center" }}>
								<CardContent>
									<Typography variant="h5" fontWeight="bold" mb={1}>
										Entry Level
									</Typography>
									<Typography variant="body2" color="gray.500">
										Best option for small businesses...
									</Typography>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="baseline"
										my={2}>
										<Typography variant="h4" fontWeight="bold" mr={1}>
											$299
										</Typography>
										<Typography variant="body1" color="gray.500">
											/month
										</Typography>
									</Box>
									<Box textAlign="left" mb={4} px={2}>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Static Frontend WebPages</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>
												SEO Optimization for Organic Traffic
											</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Maintenance and Support</Typography>
										</Box>
									</Box>
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
								</CardContent>
							</Card>
						</Grid>

						{/* CARD #2 */}
						<Grid item xs={12} md={4}>
							<Card sx={{ textAlign: "center" }}>
								<CardContent>
									<Typography variant="h5" fontWeight="bold" mb={1}>
										Senior Architect
									</Typography>
									<Typography variant="body2" color="gray.500">
										Best for large scale uses...
									</Typography>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="baseline"
										my={2}>
										<Typography variant="h4" fontWeight="bold" mr={1}>
											$2499
										</Typography>
										<Typography variant="body1" color="gray.500">
											/month
										</Typography>
									</Box>
									<Box textAlign="left" mb={4} px={2}>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Full Stack Custom Development</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Containerized Cloud Deployments</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>CI/CD Automated Pipelines</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>UI/UX Design</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Business Integration Automation</Typography>
										</Box>
									</Box>
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
								</CardContent>
							</Card>
						</Grid>

						{/* CARD #3 */}
						<Grid item xs={12} md={4}>
							<Card sx={{ textAlign: "center" }}>
								<CardContent>
									<Typography variant="h5" fontWeight="bold" mb={1}>
										Mid-Level Dev
									</Typography>
									<Typography variant="body2" color="gray.500">
										Relevant for multiple users...
									</Typography>
									<Box
										display="flex"
										justifyContent="center"
										alignItems="baseline"
										my={2}>
										<Typography variant="h4" fontWeight="bold" mr={1}>
											$999
										</Typography>
										<Typography variant="body1" color="gray.500">
											/month
										</Typography>
									</Box>
									<Box textAlign="left" mb={4} px={2}>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Dynamic Frontend Components</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Database Management</Typography>
										</Box>
										<Box display="flex" alignItems="center" mb={1}>
											<i
												className="fa-solid fa-check"
												style={{ color: "#fb923c", marginRight: 8 }}
											/>
											<Typography>Cloud Hosting</Typography>
										</Box>
									</Box>
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
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Container>
			</Box>

			{/* FAQ SECTION */}
			<Box
				component="section"
				id="FAQs"
				sx={{ backgroundColor: "#fff", py: 6 }}>
				<Container maxWidth="md" sx={{ textAlign: "center" }}>
					<Typography variant="h3" fontWeight="bold" color="gray.800" mt={4}>
						FAQ
					</Typography>
					<Box
						sx={{
							width: "160px",
							height: "4px",
							mx: "auto",
							mt: 2,
							backgroundColor: "#fb923c",
							opacity: 0.25,
							borderRadius: 1,
							mb: 4
						}}
					/>

					{/* EXAMPLE FAQ ITEM */}
					<Box mb={4} textAlign="left">
						<Typography variant="h6" fontWeight="bold" color="gray.800" mb={1}>
							Why wouldn&apos;t I just hire a full-time engineer?
						</Typography>
						<Box
							sx={{
								width: "160px",
								height: "2px",
								backgroundColor: "#fb923c",
								opacity: 0.25,
								borderRadius: 1,
								mb: 2
							}}
						/>
						<Typography variant="body1" color="gray.800">
							For starters, the annual cost of a full-time senior-level engineer
							now exceeds $100,000, plus benefits...
						</Typography>
					</Box>

					<Box mb={4} textAlign="left">
						<Typography variant="h6" fontWeight="bold" color="gray.800" mb={1}>
							Is there a limit to how many requests I can have?
						</Typography>
						<Box
							sx={{
								width: "160px",
								height: "2px",
								backgroundColor: "#fb923c",
								opacity: 0.25,
								borderRadius: 1,
								mb: 2
							}}
						/>
						<Typography variant="body1" color="gray.800">
							Once subscribed, you&apos;re able to add as many requests as
							you&apos;d like, and they will be delivered one by one.
						</Typography>
					</Box>

					{/* ...Repeat the same pattern for all other FAQ items... */}
				</Container>
			</Box>

			{/* WAVE SVG #2 (INLINE) */}
			<Box sx={{ position: "relative" }}>
				<svg
					viewBox="0 0 1439 147"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					style={{ display: "block" }}>
					<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
						<g transform="translate(-1.000000, -14.000000)" fillRule="nonzero">
							<g fill="#FFF">
								<path
									d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 
                    C1259.5,30.824 1206.707,25.526 1169,22 
                    C1129.711,18.326 1044.426,18.475 980,22 
                    C954.25,23.409 922.25,26.742 884,32 
                    C845.122,37.787 818.455,42.121 804,45 
                    C776.833,50.41 728.136,61.77 713,65 
                    C660.023,76.309 621.544,87.729 584,94 
                    C517.525,105.104 484.525,106.438 429,108 
                    C379.49,106.484 342.823,104.484 319,102 
                    C278.571,97.783 231.737,88.736 205,84 
                    C154.629,75.076 86.296,57.743 0,32 
                    L0,0 L1440,0 L1440,84 Z"
								/>
							</g>
							<g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
								<g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000)">
									<path
										d="M0,0 
                      C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 
                      C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 
                      C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
										opacity="0.100000001"
									/>
									<path
										d="M100,104.708498 
                      C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 
                      C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 
                      C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 
                      C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
										opacity="0.100000001"
									/>
									<path
										d="M1046,51.6521276 
                      C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 
                      L1439,120 
                      C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
										opacity="0.200000003"
									/>
								</g>
							</g>
						</g>
					</g>
				</svg>
			</Box>

			{/* CTA SECTION */}
			<Box
				sx={{
					textAlign: "center",
					py: 6,
					backgroundColor: "#fb923c",
					color: "#fff"
				}}>
				<Container>
					<Typography variant="h4" fontWeight="bold" mb={2}>
						See if IgniteHub is right for you.
					</Typography>
					<Box
						sx={{
							width: "160px",
							height: "4px",
							mx: "auto",
							mt: 1,
							backgroundColor: "#fff",
							opacity: 0.25,
							borderRadius: 1,
							mb: 2
						}}
					/>
					<Typography variant="h6" mb={4}>
						Get a guided tour through IgniteHub. Find out how we can transform
						your business operations. Let&apos;s build something extraordinary
						together.
					</Typography>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#fff",
							color: "#000",
							":hover": { backgroundColor: "#f0f0f0" }
						}}
						href="https://calendly.com/pminniti94/introductory-call"
						target="_blank"
						rel="noopener noreferrer">
						Book A Call
					</Button>
				</Container>
			</Box>
		</Box>
	);
}
