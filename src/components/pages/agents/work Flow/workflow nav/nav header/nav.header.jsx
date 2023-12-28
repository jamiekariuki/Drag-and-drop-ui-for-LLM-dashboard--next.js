import "./nav.header.scss";
import React, { useContext } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SaveIcon from "@mui/icons-material/Save";
import { ThemeContext } from "@/context/themeContext";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const NavHeader = ({ onClose, open, onSave }) => {
	const { toggle } = useContext(ThemeContext);

	return (
		<div className="nav-header">
			{/* <button onClick={onClose}>open</button> */}

			<div className="nav-header-left">
				<div className="nav-header-theme">
					<div className="mode" onClick={toggle.toggleColorMode}>
						<div className="dark">
							<DarkModeIcon className="dark-icon" />
						</div>

						<div className="light">
							<LightModeIcon className="light-icon" />
						</div>
					</div>
				</div>

				<div className="nav-header-save">
					<Button
						className="nav-header-save-btn"
						variant="outlined"
						startIcon={
							<SaveIcon className="nav-header-save-icon" />
						}
						onClick={onSave}
					>
						<p>save</p>
					</Button>
				</div>
			</div>

			<IconButton aria-label="delete" size="small" onClick={onClose}>
				<KeyboardDoubleArrowUpIcon
					style={{
						transform: open && "rotate(180deg)",
						transition: "transform 0.3s ease-in-out",
					}}
				/>
			</IconButton>
		</div>
	);
};

export default NavHeader;
