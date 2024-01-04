import React, { useEffect, useState } from "react";
import "./plugins.form.scss";
import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Image from "next/image";
import DeletePlugin from "../delete plugin/delete.plugin";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const PluginsForm = ({ onClose2, plugin, index, handleDeletePlugin }) => {
	//delete plugin
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className="plugins-form">
			<div className="back-container">
				<IconButton
					aria-label="go back"
					size="small"
					onClick={onClose2}
				>
					<KeyboardBackspaceIcon className="back-icon" />
				</IconButton>
			</div>

			{plugin && (
				<>
					<div className="form-title">
						<div className="card-icon">
							<Image
								alt="platform icon"
								src={plugin?.icon}
								fill={true}
								className="platfrom-avatar"
								quality={20}
							/>
						</div>
						<h1>{plugin?.title}</h1>

						<IconButton
							aria-label="delete"
							size="small"
							onClick={() => setOpen(true)}
						>
							<DeleteIcon className="tb-delete" />
						</IconButton>

						{open && (
							<DeletePlugin
								onClose2={onClose2}
								open={open}
								onClose={onClose}
								handleDeletePlugin={handleDeletePlugin}
								index={index}
							/>
						)}
					</div>
					<p>{plugin?.desc}</p>
					<div className="info">
						<InfoIcon className="ct-info-icon" />
						<p>
							Feel free to customize the prompt area if you desire
							specific responses. However, rest assured that we've
							streamlined the process for you if no customization
							is needed.
						</p>
					</div>
					<Button
						variant="contained"
						size="small"
						className="form-btn"
						disableElevation
					>
						<p>connect </p>
					</Button>
				</>
			)}
		</div>
	);
};

export default PluginsForm;
