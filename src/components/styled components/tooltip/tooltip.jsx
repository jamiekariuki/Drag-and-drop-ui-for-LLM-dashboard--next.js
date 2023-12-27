import React from "react";
import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Tooltip = ({ tip }) => {
	return (
		<div className="tooltip">
			<InfoOutlinedIcon className="tooltip-icon" />
			<div className="tooltip-container">{tip}</div>
		</div>
	);
};

export default Tooltip;
