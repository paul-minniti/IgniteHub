import React from "react";
import { Typography, SvgIcon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

const IgniteHub: React.FC = () => {
	return (
		<Typography variant="h2" display="flex" alignItems="center" gap={1}>
			<SvgIcon sx={{ color: "secondary.main", fontSize: 40 }}>
				<FontAwesomeIcon icon={faFire} />
			</SvgIcon>
			IgniteHub
		</Typography>
	);
};

export default IgniteHub;
