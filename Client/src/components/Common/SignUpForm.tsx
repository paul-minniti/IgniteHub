"use client";

import React, { useState } from "react";
import { Stack, TextField, Button } from "@mui/material";
import {
	getNewsletterByEmail,
	addNewsletterSignUp
} from "@IgniteHub/dataconnect";
import { useSnackbar } from "@/lib/context/snackbarContext";

const SignupForm: React.FC = () => {
	const [email, setEmail] = useState("");
	const { showMessage } = useSnackbar();

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const isSignedup = await getNewsletterByEmail({ email });
			if (!isSignedup.data.newsletter) {
				await addNewsletterSignUp({ email });
				showMessage(
					"Thanks for signing up! We will keep you up to date with IgniteHubs latest releases."
				);
			} else {
				showMessage(
					"You're already signed up! We will keep you up to date with IgniteHubs latest releases."
				);
			}
		} catch (error) {
			console.error(error);
			showMessage("Something went wrong. Try again later", "error");
		}
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
