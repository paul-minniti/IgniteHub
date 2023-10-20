import { collection, getDocs, limit, query, where } from "firebase/firestore";
import type { PageLoad } from "./$types";
import { db } from "$lib/firebase";
import { error } from "@sveltejs/kit";
import { userData } from "$lib/stores/userStore";
import { get } from "svelte/store";

const user = get(userData);

export const load = (async ({ params }) => {
	console.log("USER: ", user);
	const projectsRef = collection(db, "projects");

	// const q = query(projectsRef);
	const q = query(projectsRef, where("admin", "==", user?.email), limit(1));
	// const q = query(
	// 	collection(db, "projects"),
	// 	where("admin", "==", user?.email)
	// );

	const snapshot = await getDocs(q);
	const exists = snapshot.docs[0]?.exists();
	const data = snapshot.docs[0]?.data();
	console.log("Data: ", data);

	if (!exists) {
		throw error(404, "that user does not exist!");
	}

	return {
		admin: data?.admin,
		projectName: data?.project_name,
		discription: data?.discription
	};
}) satisfies PageLoad;
