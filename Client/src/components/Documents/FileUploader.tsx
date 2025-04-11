"use client";

import React, { useState, useRef } from "react";
import {
	Button,
	Box,
	Typography,
	LinearProgress,
	Paper,
	Alert,
	IconButton
} from "@mui/material";
import { CloudUpload, Close } from "@mui/icons-material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { useAuth } from "@/lib/context/authContext";

interface FileUploaderProps {
	onUploadSuccess?: (fileUrl: string, fileName: string) => void;
	allowedFileTypes?: string[];
	maxFileSizeMB?: number;
	folder?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
	onUploadSuccess,
	allowedFileTypes = [".pdf", ".doc", ".docx", ".txt", ".jpg", ".jpeg", ".png"],
	maxFileSizeMB = 5,
	folder = "documents"
}) => {
	const [file, setFile] = useState<File | null>(null);
	const [progress, setProgress] = useState<number>(0);
	const [error, setError] = useState<string | null>(null);
	const [uploading, setUploading] = useState<boolean>(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setError(null);

		if (!event.target.files?.length) {
			return;
		}

		const selectedFile = event.target.files[0];

		// Check file size
		if (selectedFile.size > maxFileSizeMB * 1024 * 1024) {
			setError(`File size must be less than ${maxFileSizeMB}MB`);
			return;
		}

		// Check file type
		const fileExtension = `.${selectedFile.name.split(".").pop()?.toLowerCase()}`;
		if (!allowedFileTypes.includes(fileExtension)) {
			setError(
				`File type not supported. Allowed types: ${allowedFileTypes.join(", ")}`
			);
			return;
		}

		setFile(selectedFile);
	};

	const handleUpload = async () => {
		if (!file || !user) return;

		setUploading(true);
		setError(null);

		const timestamp = new Date().getTime();
		const fileName = `${timestamp}_${file.name}`;
		const storageRef = ref(storage, `users/${user.uid}/${folder}/${fileName}`);

		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(progress);
			},
			(error) => {
				setError("Upload failed: " + error.message);
				setUploading(false);
			},
			async () => {
				const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
				onUploadSuccess?.(downloadURL, file.name);
				setUploading(false);
				setFile(null);
				setProgress(0);

				// Reset file input
				if (fileInputRef.current) {
					fileInputRef.current.value = "";
				}
			}
		);
	};

	const handleCancel = () => {
		setFile(null);
		setProgress(0);
		setError(null);

		// Reset file input
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	return (
		<Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3 }}>
			<Typography variant="h6" gutterBottom>
				Upload Document
			</Typography>

			{error && (
				<Alert
					severity="error"
					sx={{ mb: 2 }}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							size="small"
							onClick={() => setError(null)}>
							<Close fontSize="inherit" />
						</IconButton>
					}>
					{error}
				</Alert>
			)}

			<Box
				sx={{
					display: "flex",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: { xs: "stretch", sm: "center" },
					gap: 2
				}}>
				<Button
					variant="outlined"
					component="label"
					disabled={uploading}
					startIcon={<CloudUpload />}
					sx={{ flexGrow: { xs: 1, sm: 0 } }}>
					Select File
					<input
						ref={fileInputRef}
						type="file"
						hidden
						onChange={handleFileSelect}
						accept={allowedFileTypes.join(",")}
					/>
				</Button>

				{file && (
					<Box sx={{ flexGrow: 1, ml: { xs: 0, sm: 2 } }}>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mb: 0.5
							}}>
							<Typography
								variant="body2"
								sx={{
									maxWidth: "240px",
									overflow: "hidden",
									textOverflow: "ellipsis",
									whiteSpace: "nowrap"
								}}>
								{file.name}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{(file.size / 1024 / 1024).toFixed(2)} MB
							</Typography>
						</Box>
						{uploading && (
							<LinearProgress
								variant="determinate"
								value={progress}
								sx={{ height: 6, borderRadius: 3 }}
							/>
						)}
					</Box>
				)}

				<Box sx={{ display: "flex", gap: 1, ml: { xs: 0, sm: "auto" } }}>
					{file && !uploading && (
						<>
							<Button
								variant="text"
								color="inherit"
								onClick={handleCancel}
								disabled={uploading}>
								Cancel
							</Button>
							<Button
								variant="contained"
								onClick={handleUpload}
								disabled={uploading}>
								Upload
							</Button>
						</>
					)}
					{uploading && (
						<Button variant="outlined" color="secondary" disabled>
							Uploading... {Math.round(progress)}%
						</Button>
					)}
				</Box>
			</Box>
		</Paper>
	);
};

export default FileUploader;
