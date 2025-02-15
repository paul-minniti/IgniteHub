"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
	User,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
import { listUsers, getUserById, createUser } from "@IgniteHub/dataconnect";
import { auth, dataConnect } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

interface AuthContextProps {
	user: User | null;
	loading: boolean;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setModalView: React.Dispatch<React.SetStateAction<"login" | "signup">>;
	handleGoogleSignIn: () => Promise<void>;
	handleFacebookSignIn: () => Promise<void>;
	handleEmailSignIn: (email: string, password: string) => Promise<void>;
	handleEmailSignUp: (
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	loading: true,
	isModalOpen: false,
	setIsModalOpen: () => {},
	setModalView: () => {},
	handleGoogleSignIn: async () => {},
	handleFacebookSignIn: async () => {},
	handleEmailSignIn: async () => {},
	handleEmailSignUp: async () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalView, setModalView] = useState<"login" | "signup">("login");
	const router = useRouter();

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			setUser(firebaseUser);
			setLoading(false);
		});
		return () => unsubscribe();
	}, []);

	// useEffect(() => {
	// 	console.log("Auth User: ", user);
	// 	listUsers(dataConnect).then((res) => {
	// 		console.log("User Created: ", res);
	// 	});
	// 	if (user === null) return;

	// 	let firstName: string = "";
	// 	let lastName: string = "";

	// 	if (typeof user.displayName === "string") {
	// 		[firstName, lastName = ""] = user.displayName.split(" ");
	// 	}

	// 	getUserById(dataConnect, { id: user.uid as string }).then((res) => {
	// 		console.log("dataconnect usrs by ID: ", res);
	// 		if (res.data.user === null) {
	// 			console.log("user does not have a profile");
	// 			createUser({
	// 				id: user.uid as string,
	// 				firstName: firstName,
	// 				lastName: lastName,
	// 				email: user.email as string
	// 			});
	// 		}
	// 	});

	// 	listUsers(dataConnect).then((res) => {
	// 		console.log("List Users: ", res);
	// 	});
	// }, [user]);

	// Google sign-in function
	async function handleGoogleSignIn() {
		try {
			setLoading(true);
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			handleCloseModal();
			router.push("/dashboard");
		} catch (error) {
			console.error("Google sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

	// Facebook sign-in function
	async function handleFacebookSignIn() {
		try {
			setLoading(true);
			const provider = new FacebookAuthProvider();
			await signInWithPopup(auth, provider);
			handleCloseModal();
			router.push("/dashboard");
		} catch (error) {
			console.error("Facebook sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

	// Email/Password sign-in function
	async function handleEmailSignIn(email: string, password: string) {
		try {
			setLoading(true);
			await signInWithEmailAndPassword(auth, email, password);
			handleCloseModal();
			router.push("/dashboard");
		} catch (error) {
			console.error("Email sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

	// Email/Password sign-up function
	async function handleEmailSignUp(
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) {
		try {
			setLoading(true);
			const displayName = firstName + " " + lastName;
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(userCredential.user, { displayName });
			await createUser({
				id: userCredential.user.uid,
				firstName: firstName,
				lastName: lastName,
				email: email
			});
			handleCloseModal();
			router.push("/dashboard");
		} catch (error) {
			console.error("Email sign-up error:", error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				isModalOpen,
				setIsModalOpen,
				setModalView,
				handleGoogleSignIn,
				handleFacebookSignIn,
				handleEmailSignIn,
				handleEmailSignUp
			}}>
			{children}
			<Modal open={isModalOpen} onClose={handleCloseModal}>
				{modalView === "login" ? <SignIn /> : <SignUp />}
			</Modal>
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}
