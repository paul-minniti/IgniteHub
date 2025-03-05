import React, { createContext, useContext, useState, FC } from "react";
import { Snackbar, Alert, AlertColor, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SnackbarOptions {
	hideDuration?: number; // Duration (in ms) before auto-hide. Set to null for no auto-hide.
	showCloseButton?: boolean; // Whether to show an optional close button.
}

interface SnackbarContextProps {
	showMessage: (
		message: string,
		severity?: AlertColor,
		options?: SnackbarOptions
	) => void;
}

const SnackbarContext = createContext<SnackbarContextProps>({
	showMessage: () => {}
});

export const useSnackbar = () => useContext(SnackbarContext);

export const SnackbarProvider: FC<{ children: React.ReactNode }> = ({
	children
}) => {
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [severity, setSeverity] = useState<AlertColor>("info");
	const [hideDuration, setHideDuration] = useState<number | null>(6000);
	const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

	const showMessage = (
		msg: string,
		sev: AlertColor = severity,
		options?: SnackbarOptions
	) => {
		setMessage(msg);
		setSeverity(sev);
		setHideDuration(
			options?.hideDuration !== undefined ? options.hideDuration : 6000
		);
		setShowCloseButton(options?.showCloseButton ?? false);
		setOpen(true);
	};

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") return;
		setOpen(false);
	};

	return (
		<SnackbarContext.Provider value={{ showMessage }}>
			{children}
			<Snackbar
				open={open}
				autoHideDuration={hideDuration}
				onClose={handleClose}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
				<Alert
					severity={severity}
					variant="filled"
					sx={{ width: "100%" }}
					action={
						showCloseButton ? (
							<IconButton size="small" color="inherit" onClick={handleClose}>
								<CloseIcon fontSize="small" />
							</IconButton>
						) : null
					}
					onClose={showCloseButton ? handleClose : undefined}>
					{message}
				</Alert>
			</Snackbar>
		</SnackbarContext.Provider>
	);
};
