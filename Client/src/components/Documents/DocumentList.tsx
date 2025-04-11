"use client";

import React, { useState, useEffect } from "react";
import {
	Box,
	Typography,
	Paper,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Menu,
	MenuItem,
	CircularProgress,
	Divider,
	Alert,
	Tooltip
} from "@mui/material";
import {
	InsertDriveFile,
	PictureAsPdf,
	Image,
	Description,
	MoreVert,
	Delete,
	Download,
	OpenInNew
} from "@mui/icons-material";
import {
	ref,
	listAll,
	getMetadata,
	getDownloadURL,
	deleteObject
} from "firebase/storage";
import { storage } from "@/lib/firebase";
import { useAuth } from "@/lib/context/authContext";

interface DocumentItem {
	name: string;
	fullPath: string;
	url: string;
	contentType: string;
	size: number;
	timeCreated: string;
	fileExtension: string;
}

const DocumentList: React.FC = () => {
	const [documents, setDocuments] = useState<DocumentItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [menuAnchorEl, setMenuAnchorEl] = useState<null | HTMLElement>(null);
	const [selectedDocument, setSelectedDocument] = useState<DocumentItem | null>(
		null
	);
	const { user } = useAuth();

	const loadDocuments = async () => {
		if (!user) return;

		setLoading(true);
		setError(null);

		try {
			const storageRef = ref(storage, `users/${user.uid}/documents`);
			console.log("storageRef", storageRef);
			const res = await listAll(storageRef);

			const docsWithMetadata = await Promise.all(
				res.items.map(async (itemRef) => {
					try {
						const metadata = await getMetadata(itemRef);
						const url = await getDownloadURL(itemRef);
						const nameParts = itemRef.name.split("_");
						// Remove timestamp prefix if it exists
						const displayName =
							nameParts.length > 1
								? nameParts.slice(1).join("_")
								: itemRef.name;
						const fileExtension =
							displayName.split(".").pop()?.toLowerCase() || "";

						return {
							name: displayName,
							fullPath: itemRef.fullPath,
							url,
							contentType: metadata.contentType || "application/octet-stream",
							size: metadata.size || 0,
							timeCreated: metadata.timeCreated || "",
							fileExtension
						};
					} catch (error) {
						console.error(
							`Error fetching metadata for ${itemRef.name}:`,
							error
						);
						return null;
					}
				})
			);

			// Filter out any nulls from failed metadata fetches
			setDocuments(docsWithMetadata.filter(Boolean) as DocumentItem[]);
		} catch (err: any) {
			setError(`Error loading documents: ${err.message}`);
			console.error("Error loading documents:", err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (user) {
			loadDocuments();
		}
	}, [user]);

	const formatFileSize = (bytes: number): string => {
		if (bytes < 1024) return bytes + " B";
		else if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
		else return (bytes / (1024 * 1024)).toFixed(1) + " MB";
	};

	const formatDate = (dateString: string): string => {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString() + " " + date.toLocaleTimeString();
	};

	const getFileIcon = (fileExtension: string) => {
		switch (fileExtension) {
			case "pdf":
				return <PictureAsPdf color="error" />;
			case "jpg":
			case "jpeg":
			case "png":
			case "gif":
				return <Image color="primary" />;
			case "doc":
			case "docx":
				return <Description color="info" />;
			default:
				return <InsertDriveFile />;
		}
	};

	const handleOpenMenu = (
		event: React.MouseEvent<HTMLButtonElement>,
		doc: DocumentItem
	) => {
		setSelectedDocument(doc);
		setMenuAnchorEl(event.currentTarget);
	};

	const handleCloseMenu = () => {
		setMenuAnchorEl(null);
	};

	const handleOpenDocument = () => {
		if (selectedDocument) {
			window.open(selectedDocument.url, "_blank");
			handleCloseMenu();
		}
	};

	const handleDownloadDocument = () => {
		if (selectedDocument) {
			const a = document.createElement("a");
			a.href = selectedDocument.url;
			a.download = selectedDocument.name;
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
			handleCloseMenu();
		}
	};

	const handleDeleteDocument = async () => {
		if (!selectedDocument || !user) return;

		try {
			const fileRef = ref(storage, selectedDocument.fullPath);
			await deleteObject(fileRef);

			// Update documents list after deletion
			setDocuments((prevDocs) =>
				prevDocs.filter((doc) => doc.fullPath !== selectedDocument.fullPath)
			);

			handleCloseMenu();
		} catch (error: any) {
			setError(`Error deleting document: ${error.message}`);
			console.error("Error deleting document:", error);
			handleCloseMenu();
		}
	};

	return (
		<Paper elevation={0} variant="outlined" sx={{ p: 0 }}>
			<Box
				sx={{
					p: 2,
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center"
				}}>
				<Typography variant="h6">Your Documents</Typography>
				{loading && <CircularProgress size={24} />}
			</Box>

			<Divider />

			{error && (
				<Alert severity="error" sx={{ m: 2 }}>
					{error}
				</Alert>
			)}

			{!loading && documents.length === 0 && (
				<Box sx={{ p: 4, textAlign: "center" }}>
					<Typography color="text.secondary">
						No documents found. Upload your first document above.
					</Typography>
				</Box>
			)}

			{documents.length > 0 && (
				<List sx={{ width: "100%", bgcolor: "background.paper" }}>
					{documents.map((doc) => (
						<ListItem
							button
							divider
							key={doc.fullPath}
							onClick={() => window.open(doc.url, "_blank")}
							sx={{
								"&:hover": {
									bgcolor: "action.hover"
								}
							}}>
							<ListItemIcon>{getFileIcon(doc.fileExtension)}</ListItemIcon>
							<ListItemText
								primary={doc.name}
								secondary={
									<React.Fragment>
										<Typography
											component="span"
											variant="body2"
											color="text.secondary">
											{formatFileSize(doc.size)}
										</Typography>
										{" • "}
										<Typography
											component="span"
											variant="body2"
											color="text.secondary">
											{formatDate(doc.timeCreated)}
										</Typography>
									</React.Fragment>
								}
							/>
							<ListItemSecondaryAction>
								<Tooltip title="Options">
									<IconButton
										edge="end"
										onClick={(e) => handleOpenMenu(e, doc)}>
										<MoreVert />
									</IconButton>
								</Tooltip>
							</ListItemSecondaryAction>
						</ListItem>
					))}
				</List>
			)}

			<Menu
				anchorEl={menuAnchorEl}
				open={Boolean(menuAnchorEl)}
				onClose={handleCloseMenu}>
				<MenuItem onClick={handleOpenDocument}>
					<ListItemIcon>
						<OpenInNew fontSize="small" />
					</ListItemIcon>
					<ListItemText>Open</ListItemText>
				</MenuItem>
				<MenuItem onClick={handleDownloadDocument}>
					<ListItemIcon>
						<Download fontSize="small" />
					</ListItemIcon>
					<ListItemText>Download</ListItemText>
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleDeleteDocument}>
					<ListItemIcon>
						<Delete fontSize="small" color="error" />
					</ListItemIcon>
					<ListItemText
						primary="Delete"
						primaryTypographyProps={{ color: "error" }}
					/>
				</MenuItem>
			</Menu>
		</Paper>
	);
};

export default DocumentList;
