/** @format */

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./stores/docStore";

const PUBLIC_FB_apiKey = import.meta.env.VITE_PUBLIC_FB_API_KEY;
const PUBLIC_FB_authDomain = import.meta.env.VITE_PUBLIC_FB_AUTH_DOMAIN;
const PUBLIC_FB_projectId = import.meta.env.VITE_PUBLIC_FB_PROJECT_ID;
const PUBLIC_FB_storageBucket = import.meta.env.VITE_PUBLIC_FB_STORAGE_BUCKET;
const PUBLIC_FB_messagingSenderId = import.meta.env
	.VITE_PUBLIC_FB_MESSAGING_SENDER_ID;
const PUBLIC_FB_measurementId = import.meta.env.VITE_PUBLIC_FB_MEASUREMENT_ID;
const PUBLIC_FB_appId = import.meta.env.VITE_PUBLIC_FB_APP_ID;

const firebaseConfig = {
	apiKey: PUBLIC_FB_apiKey,
	authDomain: PUBLIC_FB_authDomain,
	projectId: PUBLIC_FB_projectId,
	storageBucket: PUBLIC_FB_storageBucket,
	messagingSenderId: PUBLIC_FB_messagingSenderId,
	appId: PUBLIC_FB_appId,
	measurementId: PUBLIC_FB_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
