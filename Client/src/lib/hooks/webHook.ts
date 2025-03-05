import { useState, useCallback } from "react";

export interface Item {
	id?: string;
	[key: string]: any;
}

export default function useWebApi() {
	// State to hold the collection name.
	const [collection, setCollection] = useState<string | undefined>(undefined);

	/**
	 * Initialize the collection name using the provided organization name.
	 * @param orgName The organization name.
	 */
	const initCollection = useCallback((orgName: string) => {
		setCollection(`${orgName}_web`);
	}, []);

	/**
	 * Fetch all documents from the collection.
	 */
	const getItems = useCallback(async (): Promise<Item[]> => {
		if (!collection) {
			throw new Error(
				"Collection not initialized. Please call initCollection(orgName) first."
			);
		}
		const response = await fetch(`/api/items?collection=${collection}`, {
			method: "GET"
		});
		if (!response.ok) {
			throw new Error("Failed to fetch items");
		}
		const data = await response.json();
		return data.items;
	}, [collection]);

	/**
	 * Create a new document in the collection.
	 * @param data The document data to be created.
	 */
	const createItem = useCallback(
		async (data: Item): Promise<{ id: string }> => {
			if (!collection) {
				throw new Error(
					"Collection not initialized. Please call initCollection(orgName) first."
				);
			}
			const response = await fetch(`/api/items?collection=${collection}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ ...data, collection })
			});
			if (!response.ok) {
				throw new Error("Failed to create item");
			}
			return response.json();
		},
		[collection]
	);

	/**
	 * Update an existing document in the collection.
	 * @param id The document id.
	 * @param data The fields to update.
	 */
	const updateItem = useCallback(
		async (id: string, data: Item): Promise<{ message: string }> => {
			if (!collection) {
				throw new Error(
					"Collection not initialized. Please call initCollection(orgName) first."
				);
			}
			const response = await fetch(`/api/items?collection=${collection}`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({ id, ...data, collection })
			});
			if (!response.ok) {
				throw new Error("Failed to update item");
			}
			return response.json();
		},
		[collection]
	);

	/**
	 * Delete a document from the collection.
	 * @param id The document id.
	 */
	const deleteItem = useCallback(
		async (id: string): Promise<{ message: string }> => {
			if (!collection) {
				throw new Error(
					"Collection not initialized. Please call initCollection(orgName) first."
				);
			}
			const response = await fetch(
				`/api/items?collection=${collection}&id=${id}`,
				{
					method: "DELETE"
				}
			);
			if (!response.ok) {
				throw new Error("Failed to delete item");
			}
			return response.json();
		},
		[collection]
	);

	return {
		initCollection,
		getItems,
		createItem,
		updateItem,
		deleteItem,
		collection
	};
}
