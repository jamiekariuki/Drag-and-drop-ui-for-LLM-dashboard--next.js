"use client";
import React, { useEffect, useState } from "react";
import "./more.info.scss";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export function MoreInfo({ list, func }) {
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
		<div className="more-info-container">
			<IconButton
				aria-label="more info"
				//size="small"
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
}

//select

export function SelectDropDown({
	list,
	initialValue,
	func,
	label,
	disabled,
	width,
}) {
	return (
		<div className="form-select">
			<FormControl
				sx={{ m: 1, minWidth: width ? width : 120 }}
				size="small"
				className="form-controller"
			>
				<InputLabel id="demo-select-small-label">
					<p>{label}</p>
				</InputLabel>
				<Select
					disabled={disabled}
					labelId="demo-select-small-label"
					id="demo-select-small"
					value={initialValue}
					label={label}
					onChange={(e) => func(e.target.value)}
					className="select-container"
				>
					{list.map((item, index) => (
						<MenuItem key={index} value={index}>
							<p>{item}</p>
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
