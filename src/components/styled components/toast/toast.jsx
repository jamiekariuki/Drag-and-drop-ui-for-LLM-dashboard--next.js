"use client";
import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import "./toast.scss";
import { useToast } from "@/context/ToastContext";

//type error, warning, success, info
//use case : showToast("Schedule saved successfully", "success");

const Toast = () => {
	const { setOpen, open, toastMessage } = useToast();

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	}; 

	return (
		<div className="toast">
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				TransitionComponent={SlideTransition}
			>
				<Alert
					onClose={handleClose}
					severity={toastMessage.type}
					sx={{ width: "100%" }}
				>
					<p> {toastMessage.message} </p>
				</Alert>
			</Snackbar>
		</div>
	);
};

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SlideTransition(props) {
	return <Slide {...props} direction="up" />;
}

export default Toast;
