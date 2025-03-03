import admin from "firebase-admin";

// Initialize Firebase Admin if it hasn't been initialized already
if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert({
			projectId: process.env.FIREBASE_PROJECT_ID,
			// Ensure newlines in the private key are correctly formatted
			privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
			clientEmail: process.env.FIREBASE_CLIENT_EMAIL
		}),
		databaseURL: process.env.FIREBASE_DATABASE_URL // Optional: include if needed
	});
}

const db = admin.firestore();
const collectionName = "web";

export async function GET(request: Request) {
	try {
		const snapshot = await db.collection(collectionName).get();
		const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
		return Response.json({ items });
	} catch (error) {
		console.error("Error fetching documents:", error);
		return Response.json(
			{ error: "Failed to fetch documents" },
			{ status: 500 }
		);
	}
}

export async function POST(request: Request) {
	try {
		const data = await request.json();
		const docRef = await db.collection(collectionName).add(data);
		return Response.json({ id: docRef.id });
	} catch (error) {
		console.error("Error creating document:", error);
		return Response.json(
			{ error: "Failed to create document" },
			{ status: 500 }
		);
	}
}

export async function PUT(request: Request) {
	try {
		const data = await request.json();
		const { id, ...updateData } = data;
		if (!id) {
			return Response.json({ error: "Missing document id" }, { status: 400 });
		}
		await db.collection(collectionName).doc(id).update(updateData);
		return Response.json({ message: "Document updated successfully" });
	} catch (error) {
		console.error("Error updating document:", error);
		return Response.json(
			{ error: "Failed to update document" },
			{ status: 500 }
		);
	}
}

export async function DELETE(request: Request) {
	try {
		const { searchParams } = new URL(request.url);
		const id = searchParams.get("id");
		if (!id) {
			return Response.json(
				{ error: "Missing document id in query parameter" },
				{ status: 400 }
			);
		}
		await db.collection(collectionName).doc(id).delete();
		return Response.json({ message: "Document deleted successfully" });
	} catch (error) {
		console.error("Error deleting document:", error);
		return Response.json(
			{ error: "Failed to delete document" },
			{ status: 500 }
		);
	}
}
