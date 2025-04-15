// app/train/page.tsx
"use client";

import { useState } from "react";
import { createTrainingJobAction } from "@/lib/Models/TrainingActions";
import {
	TextField,
	Button,
	Typography,
	Box,
	Paper,
	Stack,
	Container,
	Alert
} from "@mui/material";

export default function TrainModel() {
	const [parameters, setParameters] = useState({
		fileName: "",
		epochs: 10,
		learningRate: 0.001
	});
	const [jobInfo, setJobInfo] = useState<any>(null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setParameters((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitting(true);
		setError(null);
		try {
			// Call the server action directly
			const result = await createTrainingJobAction(parameters);
			setJobInfo(result);
			console.log("Training job created:", result);
		} catch (err) {
			console.error("Error creating training job:", err);
			setError(
				err instanceof Error ? err.message : "An unknown error occurred"
			);
		}
		setSubmitting(false);
	};

	return (
		<Container maxWidth="md">
			<Paper elevation={3} sx={{ p: 4, mt: 4 }}>
				<Typography variant="h4" component="h1" gutterBottom>
					Create Training Job
				</Typography>

				<Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Stack spacing={3}>
						<TextField
							label="Uploaded File Name"
							name="fileName"
							value={parameters.fileName}
							onChange={handleChange}
							placeholder="Enter the file name you uploaded"
							required
							fullWidth
							variant="outlined"
						/>

						<TextField
							label="Epochs"
							name="epochs"
							type="number"
							value={parameters.epochs}
							onChange={handleChange}
							required
							fullWidth
							variant="outlined"
							inputProps={{ min: 1 }}
						/>

						<TextField
							label="Learning Rate"
							name="learningRate"
							type="number"
							step="0.0001"
							value={parameters.learningRate}
							onChange={handleChange}
							required
							fullWidth
							variant="outlined"
							inputProps={{
								step: 0.0001,
								min: 0.0001
							}}
						/>

						<Button
							type="submit"
							variant="contained"
							color="primary"
							disabled={submitting}
							sx={{ mt: 2 }}>
							{submitting ? "Submitting..." : "Start Training"}
						</Button>
					</Stack>
				</Box>

				{error && (
					<Alert severity="error" sx={{ mt: 3 }}>
						{error}
					</Alert>
				)}

				{jobInfo && (
					<Box
						sx={{ mt: 3, p: 2, bgcolor: "background.paper", borderRadius: 1 }}>
						<Typography variant="body1">
							Job created with ID:{" "}
							<Box component="span" fontWeight="bold">
								{jobInfo.jobId}
							</Box>
						</Typography>
					</Box>
				)}
			</Paper>
		</Container>
	);
}
