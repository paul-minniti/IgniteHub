import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// Get the pathname
	const url = request.nextUrl.clone();
	const authIdToken = request.headers.get("authorization")?.split(" ")[1];
	const { pathname } = url;

	// Log based on path
	if (pathname === "/") {
		console.log("-----you are in the client-----");
	} else if (pathname.startsWith("/api")) {
		console.log("-----you are in the server-----");
		console.log("authIdToken: ", authIdToken);
		console.log("-----you are in the server-----");
	}

	return NextResponse.next();
}

// Configure which paths should trigger this middleware
export const config = {
	matcher: [
		// Match all paths
		"/:path*"
	]
};
