import PageHeader from "@/components/styled components/containers/page header/page.header";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddPlugin from "./add plugin/add.plugin";

const PluginHeader = ({ handleAddPlugin }) => {
	const [openPlugin, setOpenPlugin] = useState(false);
	const onClosePlugin = () => {
		setOpenPlugin(false);
	};

	return (
		<PageHeader>
			<div className="group">
				<svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
					<g>
						<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
					</g>
				</svg>
				<input
					placeholder="Search..."
					type="search"
					className="input"
				/>
			</div>

			<Button
				variant="contained"
				startIcon={<AddIcon className="header-icon" />}
				size="small"
				className="header-btn "
				disableElevation
				onClick={() => {
					setOpenPlugin(true);
				}}
			>
				<p>add plugin</p>
			</Button>
			{openPlugin && (
				<AddPlugin
					open={openPlugin}
					onClose={onClosePlugin}
					handleAddPlugin={handleAddPlugin}
				/>
			)}
		</PageHeader>
	);
};

export default PluginHeader;
