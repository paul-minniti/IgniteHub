import React, { useState, FormEvent } from "react";
import {
	Box,
	Button,
	Checkbox,
	FormControlLabel,
	Divider,
	FormLabel,
	FormControl,
	Link,
	TextField,
	Typography
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import ForgotPassword from "./ForgotPassword";
import { GoogleIcon } from "@/components/Icons/CustomIcons";
import IgniteHub from "@/components/Typography/IgniteHub";
import { useAuth } from "@/context/authContext";

const Card = styled(MuiCard)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignSelf: "center",
	width: "100%",
	padding: theme.spacing(4),
	gap: theme.spacing(2),
	margin: "auto",
	[theme.breakpoints.up("sm")]: {
		maxWidth: "450px"
	}
}));

export default function SignIn() {
	const [emailError, setEmailError] = useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = useState("");
	const [passwordError, setPasswordError] = useState(false);
	const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
	const [open, setOpen] = useState(false);
	const { setModalView, handleGoogleSignIn, handleEmailSignIn } = useAuth();

	const handleClickOpenSignUp = () => {
		setModalView("signup");
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (emailError || passwordError) {
			return;
		}
		const data = new FormData(event.currentTarget);
		handleEmailSignIn(
			data.get("email") as string,
			data.get("password") as string
		);
	};

	const validateInputs = () => {
		const email = document.getElementById("email") as HTMLInputElement;
		const password = document.getElementById("password") as HTMLInputElement;

		let isValid = true;

		if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
			setEmailError(true);
			setEmailErrorMessage("Please enter a valid email address.");
			isValid = false;
		} else {
			setEmailError(false);
			setEmailErrorMessage("");
		}

		if (!password.value || password.value.length < 6) {
			setPasswordError(true);
			setPasswordErrorMessage("Password must be at least 6 characters long.");
			isValid = false;
		} else {
			setPasswordError(false);
			setPasswordErrorMessage("");
		}

		return isValid;
	};

	return (
		<Box
			sx={{
				position: "absolute" as const,
				top: "50%",
				left: "50%",
				transform: "translate(-50%, -50%)",
				maxWidth: 450, // or whatever fits your design
				width: "90%",
				boxShadow: 24
			}}>
			<Card variant="outlined">
				<IgniteHub />
				<Typography
					component="h1"
					variant="h4"
					sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}>
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					noValidate
					sx={{
						display: "flex",
						flexDirection: "column",
						width: "100%",
						gap: 2
					}}>
					<FormControl>
						<FormLabel htmlFor="email" sx={{ color: "text.primary" }}>
							Email
						</FormLabel>
						<TextField
							error={emailError}
							helperText={emailErrorMessage}
							id="email"
							type="email"
							name="email"
							placeholder="your@email.com"
							autoComplete="email"
							autoFocus
							required
							fullWidth
							size="small"
							variant="outlined"
							color={emailError ? "error" : "primary"}
						/>
					</FormControl>
					<FormControl>
						<FormLabel htmlFor="password" sx={{ color: "text.primary" }}>
							Password
						</FormLabel>
						<TextField
							error={passwordError}
							helperText={passwordErrorMessage}
							name="password"
							placeholder="••••••"
							type="password"
							id="password"
							autoComplete="current-password"
							autoFocus
							required
							fullWidth
							size="small"
							variant="outlined"
							color={passwordError ? "error" : "primary"}
						/>
					</FormControl>
					<FormControlLabel
						control={
							<Checkbox value="remember" sx={{ color: "text.primary" }} />
						}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={validateInputs}>
						Sign in
					</Button>
					<ForgotPassword open={open} handleClose={handleClose} />
					<Link
						component="button"
						type="button"
						onClick={handleClickOpen}
						variant="body2"
						sx={{ alignSelf: "center" }}>
						Forgot your password?
					</Link>
				</Box>
				<Divider>or</Divider>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Button
						fullWidth
						variant="outlined"
						onClick={handleGoogleSignIn}
						startIcon={<GoogleIcon />}>
						Sign in with Google
					</Button>
					{/* <Button
						fullWidth
						variant="outlined"
						onClick={handleFacebookSignIn}
						startIcon={<FacebookIcon />}>
						Sign in with Facebook
					</Button> */}
					<Typography
						component={"div"}
						variant="body2"
						sx={{
							textAlign: "center",
							":hover": {
								cursor: "pointer"
							}
						}}>
						Don&apos;t have an account?{" "}
						<Box
							onClick={handleClickOpenSignUp}
							sx={{ display: "inline", alignSelf: "center" }}>
							<Link>Sign up</Link>
						</Box>
					</Typography>
				</Box>
			</Card>
		</Box>
	);
}
