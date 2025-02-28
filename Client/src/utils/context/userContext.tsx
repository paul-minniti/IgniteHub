"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/utils/context/authContext";
import { getUserById } from "@IgniteHub/dataconnect";
import { dataConnect } from "@/utils/firebase";
import { useRouter } from "next/navigation";

export interface UserProfile {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	profilePictureUrl?: string;
	orginizationId?: string;
	roles?: Array<string>;
	lastLoggedIn?: Date;
	createdAt?: Date;
	updatedAt?: Date;
}

interface UserContextProps {
	userProfile: UserProfile | null;
}

const UserContext = createContext<UserContextProps>({
	userProfile: null
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
	// const [loading, setLoading] = useState(true);
	const { user } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (user) {
			const fetchUserProfile = async () => {
				try {
					const userProfile = await getUserById(dataConnect, { id: user.uid });
					console.log("userProfile", userProfile);
					setUserProfile(userProfile.data.user as UserProfile);
				} catch (error) {
					console.error("Error fetching user profile:", error);
				}
			};

			fetchUserProfile();
		}
	}, [user]);

	useEffect(() => {
		if (userProfile && !userProfile.orginizationId) {
			router.replace("/dashboard/newOrg");
		}
	}, [userProfile, router]);

	return (
		<UserContext.Provider
			value={{
				userProfile
			}}>
			{children}
		</UserContext.Provider>
	);
};

export function useUser() {
	return useContext(UserContext);
}
