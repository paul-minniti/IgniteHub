"use client";

import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";

const SignupForm: React.FC = () => {
	const [email, setEmail] = useState("");

	/** Update the local state whenever the email input changes */
	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	/** Handle form submission (e.g. sign-up logic) */
	const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		// Replace with your own sign-up logic (send data to backend, etc.)
		console.log(`Signing up with email: ${email}`);
	};

	return (
		<form onSubmit={handleSignUp}>
			<Stack
				direction={{ xs: "column", sm: "row" }}
				spacing={2}
				alignItems="center">
				<TextField
					type="email"
					variant="outlined"
					size="small"
					placeholder="Sign up for updates!"
					value={email}
					onChange={handleEmailChange}
					sx={{
						backgroundColor: "primary.contrastText",
						borderRadius: 1,
						width: 250
					}}
				/>
				<Button
					variant="contained"
					size="large"
					sx={{
						color: "text.primary",
						backgroundColor: "primary.contrastText",
						":hover": { backgroundColor: "grey.400" }
					}}
					type="submit">
					Sign Up
				</Button>
			</Stack>
		</form>
	);
};

export default SignupForm;
