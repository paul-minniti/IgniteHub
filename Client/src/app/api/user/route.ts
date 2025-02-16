import { NextResponse } from "next/server";
import { getUserById, createUser } from "@IgniteHub/dataconnect";
import { auth, dataConnect } from "@/utils/firebase";
import { z } from "zod";

const querySchema = z.object({
	userId: z.string(),
	displayName: z.string().optional(),
	email: z.string()
});

export async function GET(request: Request) {
	// Parse query parameters from the request URL
	const { searchParams } = new URL(request.url);
	const query = Object.fromEntries(searchParams.entries());

	// Validate and parse the query params using Zod
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
			// Safely handle the case where displayName might be undefined
			const [firstName, lastName = ""] = (displayName ?? "").split(" ");
			const userData = await createUser({
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
