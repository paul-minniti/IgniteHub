import { NextResponse } from "next/server";
import { getUserById, createUser } from "@IgniteHub/dataconnect";
// import { dataConnectServer } from "../firebaseServer";
import { dataConnect, auth } from "@/utils/firebase";
// import { app, dataConnect, firebaseConfig, auth } from "@/utils/firebase";
// import { initializeServerApp } from "firebase/app";
import { z } from "zod";
// import { connectorConfig } from "@IgniteHub/dataconnect";
// import {
// 	getDataConnect,
// 	connectDataConnectEmulator
// } from "firebase/data-connect";
// import { getAuth, connectAuthEmulator } from "firebase/auth";

const querySchema = z.object({
	userId: z.string(),
	displayName: z.string().optional(),
	email: z.string()
});

export async function GET(request: Request) {
	// const authIdToken = request.headers.get("authorization")?.split(" ")[1];
	// const serverApp = initializeServerApp(app, { authIdToken });
	// const serverAuth = await getAuth(serverApp);
	// connectAuthEmulator(serverAuth, "http://localhost:9099");
	console.log("auth.currentUser: ", auth.currentUser);
	// await serverAuth.authStateReady();
	// const dataConnectServer = getDataConnect(app, connectorConfig);
	// connectDataConnectEmulator(dataConnect, "localhost", 9399);
	const { searchParams } = new URL(request.url);
	const query = Object.fromEntries(searchParams.entries());

	const parsed = querySchema.safeParse(query);
	if (!parsed.success) {
		return NextResponse.json(
			{ error: parsed.error.flatten() },
			{ status: 400 }
		);
	}

	const { userId, displayName, email } = parsed.data;

	try {
		const userProfile = await getUserById(dataConnect, { id: userId });
		if (!userProfile.data.user) {
			const [firstName, lastName = ""] = (displayName ?? "").split(" ");
			const userData = await createUser(dataConnect, {
				id: userId,
				firstName,
				lastName,
				email
			});
			console.log("mutation data: ", userData);
		}
		return NextResponse.json({ message: "Success" });
	} catch (error) {
		return NextResponse.json(
			{ error: "Failed to fetch user profile:" + error },
			{ status: 500 }
		);
	}
}
