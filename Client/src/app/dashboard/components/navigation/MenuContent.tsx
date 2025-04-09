import React, { useEffect } from "react";
import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Stack
} from "@mui/material";

import { useDashboard } from "@/lib/context/dashboardContext";
import { useRouter } from "next/navigation";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";

const iconMap = {
	Dashboard: <HomeRoundedIcon />,
	Sites: <DevicesRoundedIcon />,
	Analytics: <AnalyticsRoundedIcon />,
	Clients: <PeopleRoundedIcon />,
	Tasks: <AssignmentRoundedIcon />,
	Campaigns: <AssignmentRoundedIcon />,
	Leads: <PeopleRoundedIcon />,
	Settings: <SettingsRoundedIcon />,
	About: <InfoRoundedIcon />,
	Feedback: <HelpRoundedIcon />
};

const mainListItems = [
	{ text: "Dashboard", icon: <InfoRoundedIcon />, path: "/dashboard" },
	{ text: "Documents", icon: <HelpRoundedIcon />, path: "/documents" },
	{ text: "Models", icon: <HelpRoundedIcon />, path: "/models" },
	{ text: "RAG", icon: <HelpRoundedIcon />, path: "/rag" }
];

// Secondary items that remain constant across hubs
const secondaryListItems = [
	{ text: "About", icon: <InfoRoundedIcon />, path: "/about" },
	{ text: "Feedback", icon: <HelpRoundedIcon />, path: "/feedback" }
];

export default function MenuContent() {
	const { selectedIndex, setSelectedIndex } = useDashboard();
	const router = useRouter();

	// const mainListItems = (activeHub?.menuItems || []).map((item) => ({
	// 	text: item.label,
	// 	icon: iconMap[item.label as keyof typeof iconMap] || (
	// 		<AssignmentRoundedIcon />
	// 	),
	// 	path: item.path,
	// 	disabled: item.disabled
	// }));

	const handleListItemClick = (path: string, index: number) => {
		setSelectedIndex(index);
		router.push(path);
	};

	return (
		<Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
			<List dense>
				{mainListItems.map((item, index) => (
					<ListItem key={index} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							selected={index === selectedIndex}
							onClick={() => handleListItemClick(item.path, index)}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<List dense>
				{secondaryListItems.map((item, index) => (
					<ListItem key={index} disablePadding sx={{ display: "block" }}>
						<ListItemButton
							onClick={() =>
								handleListItemClick(item.path, index + mainListItems.length)
							}
							selected={selectedIndex === index + mainListItems.length}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Stack>
	);
}
