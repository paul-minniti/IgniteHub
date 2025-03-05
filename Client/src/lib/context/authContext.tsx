"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {
	User,
	onAuthStateChanged,
	signInWithPopup,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
import { getUserById, createUser } from "@IgniteHub/dataconnect";
import { auth, dataConnect } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { Modal } from "@mui/material";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePictureUrl: string;
	project_id: string;
	roles: Array<string>;
	lastLoggedIn: Date;
	createdAt: Date;
	updatedAt: Date;
}

interface AuthContextProps {
	user: User | null;
	loading: boolean;
	isModalOpen: boolean;
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setModalView: React.Dispatch<React.SetStateAction<"login" | "signup">>;
	handleGoogleSignIn: () => Promise<void>;
	handleEmailSignIn: (email: string, password: string) => Promise<void>;
	handleEmailSignUp: (
		firstName: string,
		lastName: string,
		email: string,
		password: string
	) => Promise<void>;
	handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps>({
	user: null,
	loading: true,
	isModalOpen: false,
	setIsModalOpen: () => {},
	setModalView: () => {},
	handleGoogleSignIn: async () => {},
	handleEmailSignIn: async () => {},
	handleEmailSignUp: async () => {},
	handleLogout: async () => {}
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

	// useEffect(() => {
	// 	const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
	// 		if (!firebaseUser) {
	// 			router.push("/");
	// 		}
	// 		setUser(firebaseUser);
	// 		setLoading(false);
	// 	});
	// 	return () => unsubscribe();
	// }, []);

	useEffect(() => {
		let signOutTimer: ReturnType<typeof setTimeout>;

		const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
			if (firebaseUser) {
				const lastSignInTime = firebaseUser.metadata.lastSignInTime;
				if (lastSignInTime) {
					const signInDate = new Date(lastSignInTime);
					const twelveHours = 12 * 60 * 60 * 1000;
					const expirationTime = signInDate.getTime() + twelveHours;
					const now = Date.now();

					if (now >= expirationTime) {
						auth.signOut();
						return;
					}

					signOutTimer = setTimeout(() => {
						auth.signOut();
					}, expirationTime - now);
				}
				setUser(firebaseUser);
			} else {
				router.push("/");
				setUser(null);
			}
			setLoading(false);
		});

		return () => {
			clearTimeout(signOutTimer);
			unsubscribe();
		};
	}, [router]);

	async function handleGoogleSignIn() {
		try {
			setLoading(true);
			const provider = new GoogleAuthProvider();
			const userCredential = await signInWithPopup(auth, provider);
			const userProfile = await getUserById(dataConnect, {
				id: userCredential.user.uid
			});
			// const token = await userCredential.user.getIdToken();
			handleCloseModal();
			if (!userProfile.data.user) {
				const displayName = userCredential.user.displayName || "";
				const [firstName, lastName = ""] = displayName.split(" ");
				// const userProfile = fetch(
				// 	"/api/user?" +
				// 		new URLSearchParams({
				// 			userId: userCredential.user.uid,
				// 			displayName: userCredential.user.displayName as string,
				// 			email: userCredential.user.email as string
				// 		}).toString(),
				// 	{
				// 		headers: {
				// 			Authorization: `Bearer ${token}`
				// 		}
				// 	}
				// );
				// console.log("userProfile: ", userProfile);

				await createUser({
					id: userCredential.user.uid,
					firstName: firstName,
					lastName: lastName,
					email: userCredential.user.email as string
				});
				router.push("/dashboard/newOrg");
				return;
			} else {
				router.push("/dashboard");
			}
		} catch (error) {
			console.error("Google sign-in error:", error);
		} finally {
			setLoading(false);
		}
	}

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

	const handleLogout = async () => {
		auth.signOut();
	};

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
			router.push("/dashboard/newOrg");
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
				handleEmailSignIn,
				handleEmailSignUp,
				handleLogout
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
