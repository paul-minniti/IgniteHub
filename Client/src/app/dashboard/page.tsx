"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";

export default function Dashboard() {
	const router = useRouter();
	const { user, loading } = useAuth();

	useEffect(() => {
		// If not loading, but no user, redirect to login
		if (!loading && !user) {
			router.push("/");
		}
	}, [user, loading, router]);

	// If still loading, show a spinner or loading UI
	if (loading) return <p>Loading...</p>;
	if (!user) return null; // or return a skeleton

	// If user exists, show the protected content
	return (
		<div>
			<h1>Welcome to your dashboard</h1>
			<p>User email: {user.email}</p>
		</div>
	);
}
