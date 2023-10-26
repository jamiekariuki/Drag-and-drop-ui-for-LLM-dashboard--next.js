"use client";
import React, { useEffect, useState } from "react";
import "./leads.table.scss";
import { LeadsData } from "./leads.data";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import LeadsInfo from "./leads info/leads.info";

const columns = [
	{ field: "id", headerName: "ID", width: 100 },

	{
		field: "more",
		headerName: "More info",
		width: 90,

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
						<UnfoldMoreIcon fontSize="small" />
					</IconButton>

					<LeadsInfo
						open={open}
						onClose={onClose}
						userData={params.row}
					/>
				</>
			);
		},
	},

	{
		field: "name",
		headerName: "Name",
		minWidth: 125,
		flex: 1,
		editable: false,
	},

	{
		field: "source",
		headerName: "Source",
		minWidth: 120,
		flex: 1,
		editable: false,
	},

	{
		field: "email",
		headerName: "Email",
		minWidth: 270,
		editable: false,
	},

	/* {
		field: "contact",
		headerName: "Contacts", 
		width: 250,
		flex: 1,
		editable: false,
	}, */

	{
		field: "status",
		headerName: "Status",
		minWidth: 120,
		flex: 1,
		editable: false,

		renderCell: (params) => {
			return (
				<div
					className="status-container"
					style={{
						backgroundColor:
							params.row.status === "New lead"
								? "rgba(0, 136, 255, 0.109)"
								: params.row.status === "In progress"
								? "rgba(238, 0, 255, 0.109)"
								: params.row.status === "pending"
								? "rgba(255, 213, 0, 0.109)"
								: params.row.status === "Won lead"
								? "rgba(9, 255, 0, 0.109)"
								: "rgba(255, 0, 0, 0.109)",
					}}
				>
					<p
						style={{
							color:
								params.row.status === "New lead"
									? "rgb(0, 136, 255)"
									: params.row.status === "In progress"
									? "rgb(238, 0, 255)"
									: params.row.status === "pending"
									? "rgb(208, 173, 0)"
									: params.row.status === "Won lead"
									? "rgb(0, 205, 24)"
									: "rgb(223, 13, 13)",
						}}
					>
						{params.row.status}
					</p>
				</div>
			);
		},
	},
	/* {
		field: "industry",
		headerName: "Industry",
		width: 250,
		flex: 1,
		editable: false,
	},

	{
		field: "company",
		headerName: "Company",
		width: 250,
		flex: 1,
		editable: false,
	},
	{
		field: "website",
		headerName: "Website",
		width: 250,
		flex: 1,
		editable: false,
	}, */

	{
		field: "dateAdded",
		headerName: "Date added",
		minWidth: 100,
		flex: 1,
		editable: false,
	},
];

const LeadsTable = () => {
	return (
		<Box sx={{ height: "100%", width: "100%", padding: "10px" }}>
			<DataGrid
				className="leads-table"
				rows={LeadsData}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 10,
						},
					},
					columns: {
						...LeadsData.initialState?.columns,
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
				pageSizeOptions={[10]}
				disableRowSelectionOnClick
				disableColumnSelector
				disableDensitySelector
				/*disablecheckboxSelection
				/*
				disableColumnSelector
				disableDensitySelector
				disableColumnFilter
				disableColumnMenu*/
				checkboxSelection
			/>
		</Box>
	);
};

export default LeadsTable;
