"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
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
// import { listUsers, getUserById, createUser } from "@IgniteHub/dataconnect";
// import { auth, dataConnect } from "@/utils/firebase";
// import { useRouter } from "next/navigation";

interface OrgContextProps {
	// user: User | null;
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

const OrgContext = createContext<OrgContextProps>({
	// user: null,
	// loading: true,
	// isModalOpen: false,
	// setIsModalOpen: () => {},
	// setModalView: () => {},
	// handleGoogleSignIn: async () => {},
	// handleFacebookSignIn: async () => {},
	// handleEmailSignIn: async () => {},
	// handleEmailSignUp: async () => {}
});

export const OrgProvider = ({ children }: { children: React.ReactNode }) => {
	// const [user, setUser] = useState<User | null>(null);
	// const [loading, setLoading] = useState(true);
	// const router = useRouter();

	useEffect(() => {}, []);

	return (
		<OrgContext.Provider
			value={
				{
					// user,
					// loading,
					// isModalOpen,
					// setIsModalOpen,
					// setModalView,
					// handleGoogleSignIn,
					// handleFacebookSignIn,
					// handleEmailSignIn,
					// handleEmailSignUp
				}
			}>
			{children}
		</OrgContext.Provider>
	);
};

export function useOrg() {
	return useContext(OrgContext);
}
