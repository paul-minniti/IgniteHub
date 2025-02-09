import React from "react";
import { Typography, SvgIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

interface IgniteHubProps {
	iconColor?: string;
	color?: string;
}

const IgniteHub: React.FC<IgniteHubProps> = ({
	iconColor = "secondary.main",
	color = "text.primary"
}) => {
	return (
		<Typography
			variant="h2"
			display="flex"
			alignItems="center"
			gap={1}
			sx={{ color: color }}>
			<SvgIcon sx={{ color: iconColor, fontSize: 40 }}>
				<FontAwesomeIcon icon={faFire} />
			</SvgIcon>
			IgniteHub
		</Typography>
	);
};

export default IgniteHub;
