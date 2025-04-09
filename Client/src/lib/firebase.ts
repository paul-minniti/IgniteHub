import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import {
	getDataConnect,
	connectDataConnectEmulator
} from "firebase/data-connect";
import { connectorConfig } from "@IgniteHub/dataconnect";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
// import { getStorage } from "firebase/storage";

export const firebaseConfig =
	process.env.NEXT_PUBLIC_ENV === "development"
		? {
				apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
				authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
				projectId: "ignitehub-f2251",
				storageBucket: "dev.appspot.com",
				messagingSenderId: "dev-sender-id",
				appId: "dev-app-id"
			}
		: {
				apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
				authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
				projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
				storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
				messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
				appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
			};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const dataConnect = getDataConnect(app, connectorConfig);
export const firestore = getFirestore();
// export const functions = getFunctions(app);
// export const storage = getStorage();

if (process.env.NEXT_PUBLIC_ENV === "development") {
	console.log("-- Dev mode detected connecting to emulators ---");
	connectAuthEmulator(auth, "http://localhost:9099");
	console.log("-- Connected to Firebase Auth emulator --");
	// console.log("-- Connected to Firebase Functions emulator --");
	// connectFunctionsEmulator(functions, "localhost", 5001);
	connectDataConnectEmulator(dataConnect, "localhost", 9399);
	console.log("-- Connected to Firebase DataConnect emulator --");
	connectFirestoreEmulator(firestore, "localhost", 8080);
	console.log("-- Connected to Firebase Firestore emulator --");
}
