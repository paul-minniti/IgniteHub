"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/utils/context/authContext";

// import {
// 	User,
// 	onAuthStateChanged,
// 	signInWithPopup,
// 	GoogleAuthProvider,
// 	FacebookAuthProvider,
// 	signInWithEmailAndPassword,
// 	createUserWithEmailAndPassword,
// 	updateProfile
// } from "firebase/auth";
import { getUserById } from "@IgniteHub/dataconnect";
import { dataConnect } from "@/utils/firebase";
// import { useRouter } from "next/navigation";

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePictureUrl?: string;
	project_id?: string;
	roles?: Array<string>;
	lastLoggedIn?: Date;
	createdAt?: Date;
	updatedAt?: Date;
}

interface UserContextProps {
	userProfile: UserProfile | null;
	// loading: boolean;
	// isModalOpen: boolean;
	// setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	// setModalView: React.Dispatch<React.SetStateAction<"login" | "signup">>;
	// handleGoogleSignIn: () => Promise<void>;
	// handleFacebookSignIn: () => Promise<void>;
	// handleEmailSignIn: (email: string, password: string) => Promise<void>;
	// handleEmailSignUp: (
	// 	firstName: string,
	// 	lastName: string,
	// 	email: string,
	// 	password: string
	// ) => Promise<void>;
}

const UserContext = createContext<UserContextProps>({
	userProfile: null
	// loading: true,
	// isModalOpen: false,
	// setIsModalOpen: () => {},
	// setModalView: () => {},
	// handleGoogleSignIn: async () => {},
	// handleFacebookSignIn: async () => {},
	// handleEmailSignIn: async () => {},
	// handleEmailSignUp: async () => {}
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
	// const [loading, setLoading] = useState(true);
	// const router = useRouter();
	const { user } = useAuth();

	useEffect(() => {
		if (user) {
			const fetchUserProfile = async () => {
				try {
					const userProfile = await getUserById(dataConnect, { id: user.uid });
					setUserProfile(userProfile.data.user as UserProfile);
				} catch (error) {
					console.error("Error fetching user profile:", error);
				}
			};

			fetchUserProfile();
		}
	}, [user]);

	return (
		<UserContext.Provider
			value={{
				userProfile
				// loading,
				// isModalOpen,
				// setIsModalOpen,
				// setModalView,
				// handleGoogleSignIn,
				// handleFacebookSignIn,
				// handleEmailSignIn,
				// handleEmailSignUp
			}}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	return useContext(UserContext);
}
