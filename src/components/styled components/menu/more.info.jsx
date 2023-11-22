"use client";
import React, { useState } from "react";
import "./more.info.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

const MoreInfo = ({ list, func }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (item) => {
		setAnchorEl(null);
		func(item);
	};

	return (
		<div>
			<IconButton
				aria-label="more info"
				size="medium"
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
			>
				<MoreVertIcon fontSize="inherit" />
			</IconButton>

			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				{/* <MenuItem onClick={handleClose}>
					<p style={{ fontSize: "13px" }}>Edit</p>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<p style={{ fontSize: "13px", color: "rgb(199, 13, 13)" }}>
						Delete
					</p>
				</MenuItem> */}

				{list.map((item, index) => (
					<MenuItem onClick={() => handleClose(item)} key={index}>
						<p
							style={{
								fontSize: "13px",
								color: item === "Delete" && "rgb(199, 13, 13)",
							}}
						>
							{item}
						</p>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default MoreInfo;
