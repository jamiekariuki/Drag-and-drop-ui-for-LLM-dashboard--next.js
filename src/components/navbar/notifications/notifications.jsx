"use client";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./notifications.scss";
import { NotificationBadge } from "../badge/badge";

const options = [
	"None",
	"Atria",
	"Callisto",
	"Dione",
	"Ganymede",
	"Hangouts Call",
	"Luna",
	"Oberon",
	"Phobos",
	"Pyxis",
	"Sedna",
	"Titania",
	"Triton",
	"Umbriel",
];

const ITEM_HEIGHT = 78;

export default function Notification() {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	function notificationsLabel(count) {
		if (count === 0) {
			return "no notifications";
		}
		if (count > 99) {
			return "more than 99 notifications";
		}
		return `${count} notifications`;
	}

	return (
		<div>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<NotificationBadge />
			</IconButton>
			<Menu
				id="long-menu"
				className="custom-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "40ch",
					},

					sx: {
						borderRadius: 2,
						bgcolor: "background.paper",
					},
				}}
			>
				{options.map((option) => (
					<MenuItem
						key={option}
						selected={option === "Pyxis"}
						onClick={handleClose}
					>
						{option}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}
