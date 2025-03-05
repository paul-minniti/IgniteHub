import React from "react";
import MuiAvatar from "@mui/material/Avatar";
import MuiListItemAvatar from "@mui/material/ListItemAvatar";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import { useDashboard } from "@/lib/context/dashboardContext";
import { hubConfigs } from "@/lib/types/hubTypes";
import { useRouter } from "next/navigation";

const Avatar = styled(MuiAvatar)(({ theme }) => ({
	width: 28,
	height: 28,
	backgroundColor: theme.palette.background.paper,
	color: theme.palette.text.primary,
	border: `1px solid ${theme.palette.divider}`
}));

const ListItemAvatar = styled(MuiListItemAvatar)({
	minWidth: 0,
	marginRight: 12
});

export default function SelectHubs() {
	const { activeHub, setActiveHub } = useDashboard();
	const router = useRouter();

	const handleChange = (event: SelectChangeEvent) => {
		const selectedHub = Object.values(hubConfigs).find(
			(hub) => hub.title === event.target.value
		);
		if (selectedHub) {
			setActiveHub(selectedHub);
			router.push(selectedHub.path);
		}
	};

	return (
		<Select
			value={activeHub?.title || "overview"}
			onChange={handleChange}
			displayEmpty
			fullWidth
			sx={{
				maxHeight: 56,
				width: 215,
				"&.MuiList-root": {
					p: "8px"
				},
				[`& .${selectClasses.select}`]: {
					display: "flex",
					alignItems: "center",
					gap: "2px",
					pl: 1
				}
			}}>
			{Object.values(hubConfigs).map((data) => (
				<MenuItem key={data.id} value={data.title} disabled={data.disabled}>
					<ListItemAvatar>
						<Avatar>
							<DevicesRoundedIcon sx={{ fontSize: "1rem" }} />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						sx={{ color: "text.primary" }}
						slotProps={{ secondary: { color: "text.primary" } }}
						primary={data.title}
						secondary={data.disabled ? "Coming soon!" : null}
					/>
				</MenuItem>
			))}
		</Select>
	);
}
