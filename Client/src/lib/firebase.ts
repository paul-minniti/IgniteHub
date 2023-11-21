/** @format */

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./stores/docStore";

const PUBLIC_FB_apiKey = "AIzaSyAHPng-HYy5uqslnxk1QnnPXwzdDcQ12ls";
const PUBLIC_FB_authDomain = "ignitehub-d0696.firebaseapp.com";
const PUBLIC_FB_projectId = "ignitehub-d0696";
const PUBLIC_FB_storageBucket = "ignitehub-d0696.appspot.com";
const PUBLIC_FB_messagingSenderId = "735417507395";
const PUBLIC_FB_measurementId = "G-M22ZWDPS97";
const PUBLIC_FB_appId = "1:735417507395:web:fad6444e2e76ed4b09bef6";

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
