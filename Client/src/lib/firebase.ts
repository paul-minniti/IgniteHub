/** @format */

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./stores/docStore";
import {
	PUBLIC_FB_apiKey,
	PUBLIC_FB_authDomain,
	PUBLIC_FB_projectId,
	PUBLIC_FB_storageBucket,
	PUBLIC_FB_messagingSenderId,
	PUBLIC_FB_appId,
	PUBLIC_FB_measurementId
} from "$env/static/public";

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
