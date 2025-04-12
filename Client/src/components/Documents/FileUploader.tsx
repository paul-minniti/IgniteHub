"use client";

import React, { useState, useRef } from "react";
import {
	Button,
	Box,
	Typography,
	LinearProgress,
	Paper,
	Alert,
	IconButton,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction
} from "@mui/material";
import { CloudUpload, Close, Delete } from "@mui/icons-material";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase";
import { useAuth } from "@/lib/context/authContext";

interface FileUploaderProps {
	onUploadSuccess?: (uploads: { url: string; fileName: string }[]) => void;
	allowedFileTypes?: string[];
	maxFileSizeMB?: number;
	folder?: string;
}

interface FileWithProgress {
	file: File;
	progress: number;
	uploading: boolean;
	error?: string | null;
	url?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
	onUploadSuccess,
	allowedFileTypes = [".pdf", ".doc", ".docx", ".txt", ".jpg", ".jpeg", ".png"],
	maxFileSizeMB = 5,
	folder = "documents"
}) => {
	const [files, setFiles] = useState<FileWithProgress[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [uploading, setUploading] = useState<boolean>(false);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const { user } = useAuth();

	const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		setError(null);

		if (!event.target.files?.length) {
			return;
		}

		const selectedFiles = Array.from(event.target.files);
		const validFiles: FileWithProgress[] = [];
		const errors: string[] = [];

		selectedFiles.forEach((selectedFile) => {
			// Check file size
			if (selectedFile.size > maxFileSizeMB * 1024 * 1024) {
				errors.push(
					`${selectedFile.name}: File size must be less than ${maxFileSizeMB}MB`
				);
				return;
			}

			// Check file type
			const fileExtension = `.${selectedFile.name.split(".").pop()?.toLowerCase()}`;
			if (!allowedFileTypes.includes(fileExtension)) {
				errors.push(
					`${selectedFile.name}: File type not supported. Allowed types: ${allowedFileTypes.join(", ")}`
				);
				return;
			}

			validFiles.push({ file: selectedFile, progress: 0, uploading: false });
		});

		if (errors.length > 0) {
			setError(errors.join("\n"));
		}

		if (validFiles.length > 0) {
			setFiles((prev) => [...prev, ...validFiles]);
		}
	};

	const uploadFile = async (
		fileWithProgress: FileWithProgress,
		index: number
	) => {
		if (!user) return;

		const timestamp = new Date().getTime();
		const fileName = `${timestamp}_${fileWithProgress.file.name}`;
		const storageRef = ref(storage, `users/${user.uid}/${folder}/${fileName}`);

		setFiles((prev) => {
			const updated = [...prev];
			updated[index] = { ...updated[index], uploading: true, error: null };
			return updated;
		});

		const uploadTask = uploadBytesResumable(storageRef, fileWithProgress.file);

		uploadTask.on(
			"state_changed",
			(snapshot) => {
				const progress =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;

				setFiles((prev) => {
					const updated = [...prev];
					updated[index] = { ...updated[index], progress };
					return updated;
				});
			},
			(error) => {
				setFiles((prev) => {
					const updated = [...prev];
					updated[index] = {
						...updated[index],
						uploading: false,
						error: "Upload failed: " + error.message
					};
					return updated;
				});
			},
			async () => {
				const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

				setFiles((prev) => {
					const updated = [...prev];
					updated[index] = {
						...updated[index],
						uploading: false,
						url: downloadURL
					};
					return updated;
				});

				// Check if all files are uploaded
				checkAllUploaded();
			}
		);
	};

	const checkAllUploaded = () => {
		const allUploaded = files.every((file) => !file.uploading && file.url);

		if (allUploaded && files.length > 0) {
			const uploads = files.map((file) => ({
				url: file.url!,
				fileName: file.file.name
			}));

			onUploadSuccess?.(uploads);
			resetUpload();
		} else {
			setUploading(files.some((file) => file.uploading));
		}
	};

	const handleUpload = async () => {
		if (!files.length || !user) return;

		setUploading(true);
		setError(null);

		// Start uploading all files
		files.forEach((file, index) => {
			if (!file.url && !file.uploading) {
				uploadFile(file, index);
			}
		});
	};

	const resetUpload = () => {
		setFiles([]);
		setUploading(false);
		setError(null);

		// Reset file input
		if (fileInputRef.current) {
			fileInputRef.current.value = "";
		}
	};

	const handleCancel = () => {
		resetUpload();
	};

	const removeFile = (index: number) => {
		setFiles((prev) => prev.filter((_, i) => i !== index));
	};

	return (
		<Paper elevation={0} variant="outlined" sx={{ p: 3, mb: 3 }}>
			<Typography variant="h6" gutterBottom>
				Upload Documents
			</Typography>

			{error && (
				<Alert
					severity="error"
					sx={{ mb: 2, whiteSpace: "pre-line" }}
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
					gap: 2,
					mb: 2
				}}>
				<Button
					variant="outlined"
					component="label"
					disabled={uploading}
					startIcon={<CloudUpload />}
					sx={{ flexGrow: { xs: 1, sm: 0 } }}>
					Select Files
					<input
						ref={fileInputRef}
						type="file"
						hidden
						onChange={handleFileSelect}
						accept={allowedFileTypes.join(",")}
						multiple
					/>
				</Button>

				<Box sx={{ display: "flex", gap: 1, ml: { xs: 0, sm: "auto" } }}>
					{files.length > 0 && !uploading && (
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
								Upload All
							</Button>
						</>
					)}
					{uploading && (
						<Button variant="outlined" color="secondary" disabled>
							Uploading...
						</Button>
					)}
				</Box>
			</Box>

			{files.length > 0 && (
				<List sx={{ width: "100%", bgcolor: "background.paper" }}>
					{files.map((fileItem, index) => (
						<ListItem
							key={`${fileItem.file.name}-${index}`}
							sx={{
								border: "1px solid",
								borderColor: "divider",
								borderRadius: 1,
								mb: 1,
								px: 2,
								py: 1
							}}>
							<ListItemText
								primary={
									<Typography
										variant="body2"
										sx={{
											maxWidth: "240px",
											overflow: "hidden",
											textOverflow: "ellipsis",
											whiteSpace: "nowrap"
										}}>
										{fileItem.file.name}
									</Typography>
								}
								secondary={
									<>
										<Typography
											variant="caption"
											display="block"
											color="text.secondary">
											{(fileItem.file.size / 1024 / 1024).toFixed(2)} MB
										</Typography>
										{fileItem.uploading && (
											<LinearProgress
												variant="determinate"
												value={fileItem.progress}
												sx={{ height: 6, borderRadius: 3, mt: 0.5 }}
											/>
										)}
										{fileItem.error && (
											<Typography variant="caption" color="error">
												{fileItem.error}
											</Typography>
										)}
										{fileItem.url && (
											<Typography variant="caption" color="success.main">
												Upload complete
											</Typography>
										)}
									</>
								}
							/>
							{!fileItem.uploading && !fileItem.url && (
								<ListItemSecondaryAction>
									<IconButton
										edge="end"
										aria-label="delete"
										onClick={() => removeFile(index)}>
										<Delete />
									</IconButton>
								</ListItemSecondaryAction>
							)}
						</ListItem>
					))}
				</List>
			)}
		</Paper>
	);
};

export default FileUploader;
