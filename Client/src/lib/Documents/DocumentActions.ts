"use server";

import { auth, storage } from "@/lib/firebase";
import { ref, listAll, getMetadata, getDownloadURL } from "firebase/storage";

/**
 * Gets a list of folder names (prefixes) from a user's storage bucket
 *
 * @param userId - The ID of the user whose folders to retrieve
 * @param path - Optional path within user directory to list folders from (defaults to root of user documents)
 * @returns A Promise that resolves to an array of folder names
 */
export async function getUserFolders(
	userId: string,
	path: string = "documents"
): Promise<string[]> {
	try {
		// Create a reference to the user's storage location
		const storageRef = ref(storage, `users/${userId}/${path}`);

		// List all items at this location
		const result = await listAll(storageRef);

		// Extract just the folder names from the prefixes
		// Firebase Storage prefixes include the full path, so we extract just the last segment
		const folderNames = result.prefixes.map((prefixRef) => {
			// Get the full path
			const fullPath = prefixRef.fullPath;

			// Extract the folder name (last segment of the path)
			const pathSegments = fullPath.split("/");
			return pathSegments[pathSegments.length - 1];
		});

		return folderNames;
	} catch (error) {
		console.error("Error getting user folders:", error);
		throw new Error("Failed to retrieve folders. Please try again later.");
	}
}

/**
 * Creates a new folder in a user's storage bucket
 *
 * @param userId - The ID of the user for whom to create a folder
 * @param folderName - The name of the folder to create
 * @param parentPath - Optional parent path to create the folder in
 * @returns A Promise that resolves once the folder is created
 */
export async function createUserFolder(
	userId: string,
	folderName: string,
	parentPath: string = "documents"
): Promise<void> {
	try {
		// Firebase Storage doesn't have explicit folders, they are implied by paths
		// To create a "folder", we create an empty .keep file in that path
		const folderRef = ref(
			storage,
			`users/${userId}/${parentPath}/${folderName}/.keep`
		);

		// Create a Blob containing an empty string
		const emptyBlob = new Blob([""], { type: "text/plain" });

		// Upload the empty file to establish the folder
		await fetch(folderRef.toString(), {
			method: "PUT",
			body: emptyBlob,
			headers: {
				"Content-Type": "text/plain"
			}
		});
	} catch (error) {
		console.error("Error creating user folder:", error);
		throw new Error("Failed to create folder. Please try again later.");
	}
}
