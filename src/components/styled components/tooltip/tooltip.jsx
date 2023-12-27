import React from "react";
import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Tooltip = ({ tip, node }) => {
	return (
		<div className="tooltip">
			<InfoOutlinedIcon className="tooltip-icon" />
			<div
				className={
					!node
						? "tooltip-container tooltip-none-node"
						: "tooltip-container"
				}
			>
				{tip}
			</div>
		</div>
	);
};

export default Tooltip;
