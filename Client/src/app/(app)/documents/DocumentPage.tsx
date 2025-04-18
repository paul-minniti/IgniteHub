"use client";

import React, { useState } from "react";
import {
	Box,
	Stack,
	Typography,
	Container,
	Paper,
	Alert,
	Snackbar,
	Divider
} from "@mui/material";
import FileUploader from "@/components/Documents/FileUploader";
import DocumentList from "@/components/Documents/DocumentList";
import { useAuth } from "@/lib/context/authContext";

// Define the document item interface
interface DocumentItem {
	name: string;
	fullPath: string;
	url: string;
	contentType: string;
	size: number;
	timeCreated: string;
	fileExtension: string;
}

interface DocumentPageProps {
	serverDocuments?: DocumentItem[];
}

export default function DocumentPage({
	serverDocuments = []
}: DocumentPageProps) {
	const [notification, setNotification] = useState<{
		message: string;
		type: "success" | "error";
	} | null>(null);
	const { user } = useAuth();

	const handleUploadSuccess = (
		uploads: { url: string; fileName: string }[]
	) => {
		setNotification({
			message: `${
				uploads.length > 1 ? `${uploads.length} files` : uploads[0].fileName
			} uploaded successfully!`,
			type: "success"
		});
	};

	const handleCloseNotification = () => {
		setNotification(null);
	};

	return (
		<Box
			component="main"
			sx={{
				flexGrow: 1,
				overflow: "auto"
			}}>
			<Container maxWidth="lg" sx={{ mt: { xs: 8, md: 4 }, mb: 4 }}>
				<Stack spacing={3}>
					<Typography variant="h4" component="h1" gutterBottom>
						Documents
					</Typography>

					{!user ? (
						<Paper elevation={0} variant="outlined" sx={{ p: 3 }}>
							<Typography>
								Please sign in to view and manage your documents.
							</Typography>
						</Paper>
					) : (
						<>
							<FileUploader
								onUploadSuccess={handleUploadSuccess}
								allowedFileTypes={[
									".pdf",
									".doc",
									".docx",
									".txt",
									".jpg",
									".jpeg",
									".png"
								]}
								maxFileSizeMB={10}
							/>
							<Divider sx={{ opacity: 0.5 }} />
							<DocumentList initialDocuments={serverDocuments} />
						</>
					)}
				</Stack>
			</Container>

			<Snackbar
				open={!!notification}
				autoHideDuration={6000}
				onClose={handleCloseNotification}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
				<Alert
					onClose={handleCloseNotification}
					severity={notification?.type}
					variant="filled"
					sx={{ width: "100%" }}>
					{notification?.message}
				</Alert>
			</Snackbar>
		</Box>
	);
}
