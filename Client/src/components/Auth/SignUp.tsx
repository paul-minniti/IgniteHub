import * as React from "react";
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
import { useAuth } from "@/context/authContext";

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
	const [emailError, setEmailError] = React.useState(false);
	const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
	const [passwordError, setPasswordError] = React.useState(false);
	const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
	const [nameError, setNameError] = React.useState(false);
	const [nameErrorMessage, setNameErrorMessage] = React.useState("");
	const { setModalView } = useAuth();

	const handleClickOpenSignUp = () => {
		setModalView("login");
	};

	const validateInputs = () => {
		const email = document.getElementById("email") as HTMLInputElement;
		const password = document.getElementById("password") as HTMLInputElement;
		const name = document.getElementById("name") as HTMLInputElement;

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

		if (!name.value || name.value.length < 1) {
			setNameError(true);
			setNameErrorMessage("Name is required.");
			isValid = false;
		} else {
			setNameError(false);
			setNameErrorMessage("");
		}

		return isValid;
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (nameError || emailError || passwordError) {
			event.preventDefault();
			return;
		}
		const data = new FormData(event.currentTarget);
		console.log({
			name: data.get("name"),
			lastName: data.get("lastName"),
			email: data.get("email"),
			password: data.get("password")
		});
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
					Sign up
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<FormControl>
						<FormLabel htmlFor="name" sx={{ color: "text.primary" }}>
							Full name
						</FormLabel>
						<TextField
							autoComplete="name"
							name="name"
							required
							size="small"
							fullWidth
							id="name"
							placeholder="Jon Snow"
							error={nameError}
							helperText={nameErrorMessage}
							color={nameError ? "error" : "primary"}
						/>
					</FormControl>
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
							color={passwordError ? "error" : "primary"}
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
							helperText={passwordErrorMessage}
							color={passwordError ? "error" : "primary"}
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
					<Button
						type="submit"
						fullWidth
						variant="contained"
						onClick={validateInputs}>
						Sign up
					</Button>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
					<Typography
						component={"div"}
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
