/** @format */

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./stores/docStore";
import {
	FB_apiKey,
	FB_authDomain,
	FB_projectId,
	FB_storageBucket,
	FB_messagingSenderId,
	FB_appId,
	FB_measurementId
} from "$env/static/private";

const firebaseConfig = {
	apiKey: FB_apiKey,
	authDomain: FB_authDomain,
	projectId: FB_projectId,
	storageBucket: FB_storageBucket,
	messagingSenderId: FB_messagingSenderId,
	appId: FB_appId,
	measurementId: FB_measurementId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
