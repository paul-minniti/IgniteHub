/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHPng-HYy5uqslnxk1QnnPXwzdDcQ12ls",
	authDomain: "ignitehub-d0696.firebaseapp.com",
	projectId: "ignitehub-d0696",
	storageBucket: "ignitehub-d0696.appspot.com",
	messagingSenderId: "735417507395",
	appId: "1:735417507395:web:fad6444e2e76ed4b09bef6",
	measurementId: "G-M22ZWDPS97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

// /*
//  * @returns a store with the current firebase user
//  */
// function userStore() {
// 	let unsubscribe: () => void;

// 	if (!auth || !globalThis.window) {
// 		console.warn("Auth is not initialized or not in the brower");
// 		const { subscribe } = writable<User | null>(null);
// 		return {
// 			subscribe,
// 		};
// 	}

// 	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
// 		onAuthStateChanged(auth, (user) => {
// 			set(user);
// 		});

// 		return () => unsubscribe();
// 	});

// 	return {
// 		subscribe,
// 	};
// }

// export const user = userStore();
