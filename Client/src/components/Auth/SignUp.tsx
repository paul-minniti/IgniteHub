import React, { useState, useEffect } from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	FormLabel,
	FormControl,
	Link,
	TextField,
	Typography
} from "@mui/material";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { useAuth } from "@/utils/context/authContext";

import IgniteHub from "@/components/Typography/IgniteHub";

const Card = styled(MuiCard)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignSelf: "center",
	width: "100%",
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	margin: "auto",
	[theme.breakpoints.up("sm")]: {
		width: "450px"
	}
}));

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState("");
	const [firstNameError, setFirstNameError] = useState(false);
	const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
	const [lastNameError, setLastNameError] = useState(false);
	const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
	const { setModalView, handleEmailSignUp } = useAuth();

	const handleClickOpenSignUp = () => {
		setModalView("login");
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			let pwdError = false;

			if (password && password.length < 6) {
				pwdError = true;
				setPasswordErrorMessage("Password must be at least 6 characters long.");
			} else {
				setPasswordErrorMessage("");
			}

			if (password || confirmPassword) {
				if (password !== confirmPassword) {
					pwdError = true;
					setPasswordErrorMessage("Passwords do not match.");
				} else {
					if (password.length >= 6) {
						setPasswordErrorMessage("");
					}
				}
			}

			setPasswordError(pwdError);
		}, 500);

		return () => clearTimeout(timer);
	}, [confirmPassword]);

	const validateInputs = () => {
		let isValid = true;

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			setEmailError(true);
			setEmailErrorMessage("Please enter a valid email address.");
			isValid = false;
		} else {
			setEmailError(false);
			setEmailErrorMessage("");
		}

		if (!password || password.length < 6) {
			setPasswordError(true);
			setPasswordErrorMessage("Password must be at least 6 characters long.");
			isValid = false;
		}
		if (password !== confirmPassword) {
			setPasswordError(true);
			setPasswordErrorMessage("Passwords do not match.");
			isValid = false;
		}

		if (!firstName) {
			setFirstNameError(true);
			setFirstNameErrorMessage("First name is required.");
			isValid = false;
		} else {
			setFirstNameError(false);
			setFirstNameErrorMessage("");
		}

		if (!lastName) {
			setLastNameError(true);
			setLastNameErrorMessage("Last name is required.");
			isValid = false;
		} else {
			setLastNameError(false);
			setLastNameErrorMessage("");
		}

		return isValid;
	};

	const handleSubmit = () => {
		if (!validateInputs()) {
			return;
		}

		handleEmailSignUp(firstName, lastName, email, password);
	};

	return (
		<Box
			sx={{
				position: "absolute" as const,
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				maxWidth: 450,
				width: "90%",
				boxShadow: 24
			}}>
			<Card variant="outlined">
				<IgniteHub />
				<Typography
					component="h1"
					variant="h4"
					sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
					Sign up
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Box sx={{ display: "flex", gap: 2 }}>
						<FormControl fullWidth>
							<FormLabel htmlFor="firstName" sx={{ color: "text.primary" }}>
								First name
							</FormLabel>
							<TextField
								autoComplete="given-name"
								name="firstName"
								required
								size="small"
								fullWidth
								id="firstName"
								placeholder="Jon"
								error={firstNameError}
								helperText={firstNameErrorMessage}
								color={firstNameError ? "error" : "primary"}
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</FormControl>
						<FormControl fullWidth>
							<FormLabel htmlFor="lastName" sx={{ color: "text.primary" }}>
								Last name
							</FormLabel>
							<TextField
								autoComplete="family-name"
								name="lastName"
								required
								size="small"
								fullWidth
								id="lastName"
								placeholder="Snow"
								error={lastNameError}
								helperText={lastNameErrorMessage}
								color={lastNameError ? "error" : "primary"}
								value={lastName}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</FormControl>
					</Box>
					<FormControl>
						<FormLabel htmlFor="email" sx={{ color: "text.primary" }}>
							Email
						</FormLabel>
						<TextField
							required
							fullWidth
							size="small"
							id="email"
							placeholder="your@email.com"
							name="email"
							autoComplete="email"
							variant="outlined"
							error={emailError}
							helperText={emailErrorMessage}
							color={emailError ? "error" : "primary"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="password" sx={{ color: "text.primary" }}>
							Password
						</FormLabel>
						<TextField
							required
							fullWidth
							size="small"
							name="password"
							placeholder="••••••"
							type="password"
							id="password"
							autoComplete="new-password"
							variant="outlined"
							error={passwordError}
							color={passwordError ? "error" : "primary"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="confirmPassword" sx={{ color: "text.primary" }}>
							Confirm Password
						</FormLabel>
						<TextField
							required
							fullWidth
							size="small"
							name="confirmPassword"
							placeholder="••••••"
							type="password"
							id="confirmPassword"
							autoComplete="new-password"
							variant="outlined"
							error={passwordError}
							helperText={passwordErrorMessage}
							color={passwordError ? "error" : "primary"}
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</FormControl>
					<FormControlLabel
						control={
							<Checkbox
								value="allowExtraEmails"
								sx={{ color: "text.primary" }}
							/>
						}
						label="I want to receive updates via email."
					/>
					<Button type="submit" fullWidth variant="contained">
						Sign up
					</Button>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography
						component="div"
						variant="body2"
						sx={{
							textAlign: "center",
							":hover": {
								cursor: "pointer"
							}
						}}>
						Already have an account?{" "}
						<Box
							onClick={handleClickOpenSignUp}
							sx={{ display: "inline", alignSelf: "center" }}>
							<Link>Sign in</Link>
						</Box>
					</Typography>
				</Box>
			</Card>
		</Box>
	);
}
