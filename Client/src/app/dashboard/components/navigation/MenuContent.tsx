// MenuContent.tsx
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useDashboard } from "@/utils/context/dashboardContext";
import { useRouter } from "next/navigation";

// Common icons
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";

// Define icon mapping for different menu items
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

// Secondary items that remain constant across hubs
const secondaryListItems = [
	{ text: "Settings", icon: <SettingsRoundedIcon />, path: "/settings" },
	{ text: "About", icon: <InfoRoundedIcon />, path: "/about" },
	{ text: "Feedback", icon: <HelpRoundedIcon />, path: "/feedback" }
];

export default function MenuContent() {
	const { activeHub, hubType } = useDashboard();
	const router = useRouter();
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	// Map the menu items from activeHub
	const mainListItems = (activeHub?.menuItems || []).map((item) => ({
		text: item.label,
		icon: iconMap[item.label as keyof typeof iconMap] || (
			<AssignmentRoundedIcon />
		),
		path: item.path,
		disabled: item.disabled
	}));

	const handleListItemClick = (path: string, index: number) => {
		setSelectedIndex(index);
		router.push(path);
	};

	// Update selected index when hub changes
	React.useEffect(() => {
		setSelectedIndex(0); // Reset to first item when hub changes
	}, [hubType]);

	return (
		<Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
			<List dense>
				{mainListItems.map((item, index) => (
					<ListItem
						key={index}
						disablePadding
						sx={{ display: "block" }}
						// disabled={item.disabled}
					>
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
