import { Suspense } from "react";
import { Metadata } from "next";
// import Loading from "@/components/ui/Loading";
import DocumentPage from "./DocumentPage";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";
import { storage } from "@/lib/firebase";
import { ref, listAll, getMetadata, getDownloadURL } from "firebase/storage";
import { CircularProgress } from "@mui/material";
import { useAuth } from "@/lib/context/authContext";

export const metadata: Metadata = {
	title: "Documents | IgniteHub",
	description: "Upload and manage your documents"
};

interface DocumentItem {
	name: string;
	fullPath: string;
	url: string;
	contentType: string;
	size: number;
	timeCreated: string;
	fileExtension: string;
}

async function getServerSideDocuments(userId: string): Promise<DocumentItem[]> {
	try {
		// Use the client-side storage instance from firebase.ts
		const storageRef = ref(storage, `users/${userId}/documents`);
		const res = await listAll(storageRef);

		const docsWithMetadata = await Promise.all(
			res.items.map(async (itemRef) => {
				try {
					const metadata = await getMetadata(itemRef);
					const url = await getDownloadURL(itemRef);

					// Extract display name (remove timestamp prefix if exists)
					const nameParts = itemRef.name.split("_");
					const displayName =
						nameParts.length > 1 ? nameParts.slice(1).join("_") : itemRef.name;

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
					console.error(`Error fetching metadata for ${itemRef.name}:`, error);
					return null;
				}
			})
		);

		// Filter out any nulls from failed metadata fetches
		return docsWithMetadata.filter(Boolean) as DocumentItem[];
	} catch (error) {
		console.error("Error loading documents:", error);
		return [];
	}
}

export default async function DocumentsPage() {
	// Get the user session
	// const session = await getServerSession(authOptions);

	// const { user } = useAuth();

	const documents: DocumentItem[] = [];

	// Only fetch documents if we have a user
	// if (user?.uid) {
	// 	documents = await getServerSideDocuments(user.uid);
	// }

	return (
		<Suspense fallback={<CircularProgress size={24} />}>
			<DocumentPage serverDocuments={documents} />
		</Suspense>
	);
}
