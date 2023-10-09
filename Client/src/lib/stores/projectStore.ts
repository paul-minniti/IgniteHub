import { onAuthStateChanged, type User } from "firebase/auth";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./docStore";
import { auth } from "$lib/firebase";

/**
 * @returns a store with the current firebase user
 */
function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn("Auth is not initialized or not in browser");
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

const user = userStore();

interface UserData {
	email: string;
	display_name: string;
	photo_url: string;
	metadata: {
		lastSignInTime: string;
		creationTime: string;
	};
}

export const userData: Readable<UserData | null> = derived(
	user,
	($user, set) => {
		if ($user) {
			return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
		} else {
			set(null);
		}
	}
);
