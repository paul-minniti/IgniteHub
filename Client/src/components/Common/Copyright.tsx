import * as React from "react";
import Typography from "@mui/material/Typography";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			align="center"
			{...props}
			sx={[
				{
					color: "text.primary"
				},
				...(Array.isArray(props.sx) ? props.sx : [props.sx])
			]}>
			{"Copyright © "}
			IgniteHub &nbsp; {new Date().getFullYear()}
		</Typography>
	);
}
