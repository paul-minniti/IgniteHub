import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCqPKzKFJvy9ptHd7aSATBC6f8ShE6yea4",
    authDomain: "getinked-c6243.firebaseapp.com",
    projectId: "getinked-c6243",
    storageBucket: "getinked-c6243.appspot.com",
    messagingSenderId: "112707874647",
    appId: "1:112707874647:web:2d4af08332332c8a6e9812",
    measurementId: "G-QHL08L8KSK"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();