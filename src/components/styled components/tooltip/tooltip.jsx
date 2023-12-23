import React from "react";
import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip as CustomTooltip } from "react-tooltip";

const Tooltip = ({ tip }) => {
	return (
		<div className="ctooltip">
			<a data-tooltip-id="my-tooltip" data-tooltip-offset={3}>
				<InfoOutlinedIcon className="tooltip-icon" />
			</a>
			<CustomTooltip
				id="my-tooltip"
				className="custom-tooltip"
				classNameArrow="example-arrow"
				place={"right-start"}
			>
				{tip}
			</CustomTooltip>
		</div>
	);
};

export default Tooltip;
