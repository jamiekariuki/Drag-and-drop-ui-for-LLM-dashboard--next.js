"use client";
import React, { useState } from "react";
import "./users.table.scss";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UserEdit from "./user edit/user.edit";
import UserDelete from "./user delete/user.delete";

const columns = [
	{ field: "id", headerName: "ID", width: 100 },
	{
		field: "profile",
		headerName: "Profile",
		width: 100,
		renderCell: (params) => {
			return (
				<div className="profile-wrapper">
					<Image
						className="profile-image"
						src={params.row.profile}
						alt="avatar"
						fill={true}
					/>
				</div>
			);
		},
	},
	{
		field: "name",
		headerName: "Name",
		width: 200,
		editable: false,
	},
	{
		field: "email",
		headerName: "Email",
		minWidth: 250,
		flex: 1,
		editable: false,
	},

	{
		field: "role",
		headerName: "Role",
		minWidth: 150,
		flex: 1,
		renderCell: (params) => {
			return (
				<div
					className={`user-profile-table ${
						params.row.role === "super admin"
							? "super-admin-table"
							: params.row.role === "admin"
							? "admin-table"
							: "user-table"
					}`}
				>
					<p>{params.row.role}</p>
				</div>
			);
		},
	},
	{
		field: "edit",
		headerName: "Edit",
		width: 100,

		renderCell: function EditingAction(params) {
			const [open, setOpen] = useState(false);
			const onClose = () => {
				setOpen(false);
			};

			return (
				<>
					<IconButton
						aria-label="edit"
						size="small"
						onClick={() => {
							setOpen(true);
						}}
					>
						<EditIcon fontSize="small" />
					</IconButton>

					<UserEdit
						open={open}
						onClose={onClose}
						profile={params.row.profile}
						username={params.row.name}
						email={params.row.email}
						role={params.row.role}
					/>
				</>
			);
		},
	},

	{
		field: "delete",
		headerName: "Delete",
		width: 100,
		renderCell: function DeletingAction(params) {
			const [open, setOpen] = useState(false);
			const onClose = () => {
				setOpen(false);
			};

			return (
				<>
					<IconButton
						aria-label="delete"
						size="small"
						color="error"
						onClick={() => {
							setOpen(true);
						}}
					>
						<DeleteIcon fontSize="small" />
					</IconButton>

					<UserDelete
						open={open}
						onClose={onClose}
						username={params.row.name}
					/>
				</>
			);
		},
	},
];

const rows = [
	{
		id: 1,
		profile:
			"https://i.postimg.cc/MKJLmQ2z/Free-Photo-Woman-wearing-casual-sweater-on-background-hand-on-chin-thinking-about-question-pensiv.jpg",
		name: "Ivy mary",
		email: "ivy12mart@gmail.com",
		role: "super admin",
	},
	{
		id: 2,
		profile:
			"https://i.postimg.cc/PxMDGY7m/16-Black-Chefs-Changing-Food-in-America-Published-2019.jpg",
		name: "Jordan iwako",
		email: "Iwako1985@yahoo.com",
		role: "admin",
	},
	{
		id: 3,
		profile:
			"https://i.postimg.cc/cHKJhYSx/woman-have-fun-with-cosmetic-brushes.jpg",
		name: "Brier mildred",
		email: "briermildred12@gmail.com",
		role: "user",
	},
	{
		id: 4,
		profile:
			"https://i.postimg.cc/0y3FmJcd/Bonobos-Better-Fitting-Better-Looking-Men-s-Clothing-Accessories-Bonobos.jpg",
		name: "Johnny andrew",
		email: "andrewhtl@gmail.com",
		role: "user",
	},
	{
		id: 5,
		profile: "https://i.postimg.cc/y6gj5YXW/smiley-man-with-camera.jpg",
		name: "David j wayne",
		email: "jwayne@yahoo.com",

		role: "user",
	},
	{
		id: 6,
		profile:
			"https://i.postimg.cc/gjWfjXGc/Arkansas-Editorial-with-Javon-M-Wallace.jpg",
		name: "Dennis druig",
		email: "Dennisxcx@gmail.com",
		role: "super admin",
	},
	{
		id: 7,
		profile:
			"https://i.postimg.cc/g0rdbZ2f/Add-length-and-volume-using-Human-Hair-Ponytail-Extension.jpg",
		name: "Claris may",
		email: "claris2may@gmil.com",
		role: "user",
	},
	{
		id: 8,
		profile: "https://i.postimg.cc/WpBBYyrL/This-Is-All-Yours.jpg",
		name: "Ali muhammed",
		email: "muhammed45@gmail.com",
		role: "user",
	},
	{
		id: 9,
		profile:
			"https://i.postimg.cc/1zQbRVBW/cheerful-woman-with-dark-wavy-hairstyle-black-striped-outfit-hat-laughing-looking-into-camera-pink-b.jpg",
		name: "Roxie sarah",
		email: "sarah345@gmail.com",
		role: "admin",
	},
];

export default function UsersTable() {
	return (
		<Box sx={{ height: "100%", width: "100%", padding: "10px" }}>
			<DataGrid
				className="users"
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 8,
						},
					},
					columns: {
						...rows.initialState?.columns,
						columnVisibilityModel: {
							id: false,
						},
					},
				}}
				slots={{ toolbar: GridToolbar }}
				slotProps={{
					toolbar: {
						showQuickFilter: true,
						quickFilterProps: {
							debounceMs: 500,
						},
					},
				}}
				pageSizeOptions={[8]}
				disablecheckboxSelection
				disableRowSelectionOnClick
				disableColumnSelector
				disableDensitySelector
				disableColumnFilter
				disableColumnMenu
			/>
		</Box>
	);
}
