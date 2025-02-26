// "use client";

// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useAuth } from "@/utils/context/authContext";

// // import {
// // 	User,
// // 	onAuthStateChanged,
// // 	signInWithPopup,
// // 	GoogleAuthProvider,
// // 	FacebookAuthProvider,
// // 	signInWithEmailAndPassword,
// // 	createUserWithEmailAndPassword,
// // 	updateProfile
// // } from "firebase/auth";
// // import { listUsers, getUserById, createUser } from "@IgniteHub/dataconnect";
// // import { auth, dataConnect } from "@/utils/firebase";
// // import { useRouter } from "next/navigation";

// export interface Org {
// 	name: string;
// }

// interface OrgContextProps {
// 	org: Org | null;
// 	// loading: boolean;
// 	// isModalOpen: boolean;
// 	// setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
// 	// setModalView: React.Dispatch<React.SetStateAction<"login" | "signup">>;
// 	// handleGoogleSignIn: () => Promise<void>;
// 	// handleFacebookSignIn: () => Promise<void>;
// 	// handleEmailSignIn: (email: string, password: string) => Promise<void>;
// 	// handleEmailSignUp: (
// 	// 	firstName: string,
// 	// 	lastName: string,
// 	// 	email: string,
// 	// 	password: string
// 	// ) => Promise<void>;
// }

// const OrgContext = createContext<OrgContextProps>({
// 	org: null
// 	// loading: true,
// 	// isModalOpen: false,
// 	// setIsModalOpen: () => {},
// 	// setModalView: () => {},
// 	// handleGoogleSignIn: async () => {},
// 	// handleFacebookSignIn: async () => {},
// 	// handleEmailSignIn: async () => {},
// 	// handleEmailSignUp: async () => {}
// });

// export const OrgProvider = ({ children }: { children: React.ReactNode }) => {
// 	const [org, setOrg] = useState<Org | null>(null);
// 	// const [loading, setLoading] = useState(true);
// 	// const router = useRouter();
// 	const { user } = useAuth();

// 	useEffect(() => {
// 		setOrg({ name: "test" });
// 		// if (user) {
// 		// 	console.log("User from Org Context: ", user);
// 		// 	const userProfile = fetch(
// 		// 		"/api/user?" +
// 		// 			new URLSearchParams({
// 		// 				userId: user.uid,
// 		// 				displayName: user.displayName as string,
// 		// 				email: user.email as string
// 		// 			}).toString()
// 		// 	);
// 		// }
// 	}, [user]);

// 	return (
// 		<OrgContext.Provider
// 			value={{
// 				org
// 				// loading,
// 				// isModalOpen,
// 				// setIsModalOpen,
// 				// setModalView,
// 				// handleGoogleSignIn,
// 				// handleFacebookSignIn,
// 				// handleEmailSignIn,
// 				// handleEmailSignUp
// 			}}>
// 			{children}
// 		</OrgContext.Provider>
// 	);
// };

// export function useOrg() {
// 	return useContext(OrgContext);
// }
