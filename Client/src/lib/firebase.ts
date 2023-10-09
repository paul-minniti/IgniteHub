/** @format */

import { initializeApp } from "firebase/app";
import { doc, getFirestore, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, type User } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, type Readable, derived } from "svelte/store";
import { docStore } from "./stores/docStore";

const firebaseConfig = {
	apiKey: "AIzaSyAHPng-HYy5uqslnxk1QnnPXwzdDcQ12ls",
	authDomain: "ignitehub-d0696.firebaseapp.com",
	projectId: "ignitehub-d0696",
	storageBucket: "ignitehub-d0696.appspot.com",
	messagingSenderId: "735417507395",
	appId: "1:735417507395:web:fad6444e2e76ed4b09bef6",
	measurementId: "G-M22ZWDPS97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
