"use client";
import React, { createContext, useState, useContext } from "react";

// Create a context for managing toast messages
const ToastContext = createContext();

// Create a ToastProvider component to wrap your app with the context provider
export const ToastProvider = ({ children }) => {
	const [open, setOpen] = useState(false);
	const [toastMessage, setToastMessage] = useState({
		message: "",
		type: "",
	});

	const showToast = (message, type) => {
		setToastMessage({ message, type });
		setOpen(true);
	};

	return (
		<ToastContext.Provider
			value={{ showToast, setOpen, open, toastMessage }}
		>
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	return useContext(ToastContext);
};
