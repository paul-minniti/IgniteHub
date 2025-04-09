"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Hub, HubType, hubConfigs } from "@/lib/types/hubTypes";
import { usePathname } from "next/navigation";
import { Orginization } from "@/lib/types";
import { createOrg, addUserToOrg } from "@IgniteHub/dataconnect";
import useWebApi from "@/lib/hooks/webHook";
import { useUser } from "@/lib/context/userContext";

interface DashboardContextProps {
	org: Orginization | null;
	activeHub: Hub | null;
	hubType: HubType;
	setActiveHub: (hub: Hub) => void;
	selectedIndex: number;
	setSelectedIndex: (index: number) => void;
	handleAddOrg: (projectName: string) => void;
}

const DashboardContext = createContext<DashboardContextProps>({
	org: null,
	activeHub: null,
	hubType: "web",
	setActiveHub: () => {},
	selectedIndex: 0,
	setSelectedIndex: () => {},
	handleAddOrg: () => {}
});

export const DashboardProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [org, setOrg] = useState<Orginization | null>(null);
	const [activeHub, setActiveHub] = useState<Hub>(hubConfigs.overview);
	const [hubType, setHubType] = useState<HubType>("overview");
	const [selectedIndex, setSelectedIndex] = useState(0);
	const pathname = usePathname();
	const { initCollection } = useWebApi();
	const { user } = useUser();

	useEffect(() => {
		
	}, [user]);	

	useEffect(() => {
		if (org) {
			initCollection(org.name);
		}
	}, [initCollection, org]);

	// const handleSetOrg = (org: Orginization) => {
	// 	setOrg(org);
	// };

	const handleAddOrg = async (projectName: string) => {
		const createOrgResp = await createOrg({
			orgName: projectName,
			orgStatus: "free"
		});
		setOrg({
			id: createOrgResp.data.orginization_insert.id,
			name: projectName,
			status: createOrgResp.ref.variables.orgStatus
		});
		await addUserToOrg({
			orginizationId: createOrgResp.data.orginization_insert.id
		});
	};

	const handleSetActiveHub = (hub: Hub) => {
		if (!hub.disabled) {
			setActiveHub(hub);
			setHubType(hub.id as HubType);
		}
	};

	useEffect(() => {
		setSelectedIndex(0);
		if (pathname === "/dashboard") {
			setSelectedIndex(-1);
		}
	}, [pathname, hubType]);

	return (
		<DashboardContext.Provider
			value={{
				org,
				activeHub,
				hubType,
				setActiveHub: handleSetActiveHub,
				selectedIndex,
				setSelectedIndex,
				handleAddOrg
			}}>
			{children}
		</DashboardContext.Provider>
	);
};

export function useDashboard() {
	return useContext(DashboardContext);
}
