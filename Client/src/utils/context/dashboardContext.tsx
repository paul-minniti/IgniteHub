"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Hub, HubType, hubConfigs } from "@/utils/types/hubTypes";

export interface Org {
	name: string;
}

interface DashboardContextProps {
	org: Org | null;
	activeHub: Hub | null;
	hubType: HubType;
	setActiveHub: (hub: Hub) => void;
}

const DashboardContext = createContext<DashboardContextProps>({
	org: null,
	activeHub: null,
	hubType: "web",
	setActiveHub: () => {}
});

export const DashboardProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [org, setOrg] = useState<Org | null>(null);
	const [activeHub, setActiveHub] = useState<Hub>(hubConfigs.web);
	const [hubType, setHubType] = useState<HubType>("web");

	useEffect(() => {
		setOrg({ name: "test" });
	}, []);

	const handleSetActiveHub = (hub: Hub) => {
		if (!hub.disabled) {
			setActiveHub(hub);
			setHubType(hub.id as HubType);
		}
	};

	return (
		<DashboardContext.Provider
			value={{
				org,
				activeHub,
				hubType,
				setActiveHub: handleSetActiveHub
			}}>
			{children}
		</DashboardContext.Provider>
	);
};

export function useDashboard() {
	return useContext(DashboardContext);
}
