import { onAuthStateChanged, type User } from "firebase/auth";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./docStore";
import { auth } from "$lib/firebase";

/**
 * @returns a store with the current firebase project
 */
function projectStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn("Auth is not initialized or not in browser");
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (project) => {
			set(project);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

// const project = projectStore();

interface ProjectData {
	owner: string;
	project_id: string;
	project_name: string;
	users: Array<string>;
	admins: Array<string>;
	settings: object;
}

export let projectData = "test";

// export const projectData: Readable<ProjectData | null> = derived(
// 	user,
// 	($project, set) => {
// 		if ($project) {
// 			return docStore<ProjectData>(`projects/${$project.uid}`).subscribe(set);
// 		} else {
// 			set(null);
// 		}
// 	}
// );
