"use client";

import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";

export default function DataDeletionRequest() {
	const [email, setEmail] = useState("");
	const [submissionState, setSubmissionState] = useState<
		"idle" | "success" | "error"
	>("idle");

	// This is just an example. In a real app, you'd call your backend API
	// that handles data deletion. For instance, /api/request-data-deletion
	const handleRequestDeletion = async () => {
		try {
			// Reset UI state
			setSubmissionState("idle");
			// Call your server with the user’s email
			const response = await fetch("/api/request-data-deletion", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email })
			});

			if (!response.ok) {
				throw new Error("Server responded with an error");
			}

			// If successful, update the UI
			setSubmissionState("success");
		} catch (err) {
			console.error("Error requesting data deletion:", err);
			setSubmissionState("error");
		}
	};

	return (
		<Box
			sx={{
				maxWidth: 600,
				mx: "auto",
				my: 4,
				px: 2,
				display: "flex",
				flexDirection: "column",
				gap: 2
			}}>
			<Typography variant="h4" component="h1" gutterBottom>
				Request Data Deletion
			</Typography>

			<Typography variant="body1">
				In accordance with Facebook’s Developer policies and applicable privacy
				laws, you have the right to request deletion of your data associated
				with our app. Please enter the email address used to register or sign in
				with Facebook.
			</Typography>

			{/* Email Input */}
			<TextField
				required
				type="email"
				label="Email Address"
				placeholder="your@email.com"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				fullWidth
			/>

			{/* Submit Button */}
			<Button
				variant="contained"
				color="error"
				onClick={handleRequestDeletion}
				disabled={!email}>
				Request Deletion
			</Button>

			{/* Feedback Messages */}
			{submissionState === "success" && (
				<Alert severity="success">
					Your data deletion request was submitted successfully.
				</Alert>
			)}
			{submissionState === "error" && (
				<Alert severity="error">
					There was a problem submitting your request. Please try again or
					contact support.
				</Alert>
			)}
		</Box>
	);
}
