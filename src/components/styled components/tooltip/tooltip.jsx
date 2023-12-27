import React from "react";
import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ReactDOM from "react-dom";

const Tooltip = ({ tip, node }) => {
	return ReactDOM.createPortal(
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
		</div>,
		document.getElementById("ctooltip")
	);
};

export default Tooltip;
