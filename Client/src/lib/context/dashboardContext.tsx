"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Hub, HubType, hubConfigs } from "@/lib/types/hubTypes";
import { usePathname } from "next/navigation";

export interface Org {
	name: string;
}

interface DashboardContextProps {
	org: Org | null;
	activeHub: Hub | null;
	hubType: HubType;
	setActiveHub: (hub: Hub) => void;
	selectedIndex: number;
	setSelectedIndex: (index: number) => void;
}

const DashboardContext = createContext<DashboardContextProps>({
	org: null,
	activeHub: null,
	hubType: "web",
	setActiveHub: () => {},
	selectedIndex: 0,
	setSelectedIndex: () => {}
});

export const DashboardProvider = ({
	children
}: {
	children: React.ReactNode;
}) => {
	const [org, setOrg] = useState<Org | null>(null);
	const [activeHub, setActiveHub] = useState<Hub>(hubConfigs.overview);
	const [hubType, setHubType] = useState<HubType>("overview");
	const [selectedIndex, setSelectedIndex] = useState(0);

	const pathname = usePathname();

	useEffect(() => {
		setOrg({ name: "test" });
	}, []);

	const handleSetActiveHub = (hub: Hub) => {
		if (!hub.disabled) {
			setActiveHub(hub);
			setHubType(hub.id as HubType);
		}
	};

	// If the current route is /dashboard, set the index to -1.
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
				setSelectedIndex
			}}>
			{children}
		</DashboardContext.Provider>
	);
};

export function useDashboard() {
	return useContext(DashboardContext);
}
