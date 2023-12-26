/* import React from "react";
import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip as CustomTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Tooltip = ({ tip }) => {
	return (
		<div className="ctooltip">
			<a data-tooltip-offset={3}>
				<InfoOutlinedIcon className="tooltip-icon" />
			</a>
			<CustomTooltip
				className="custom-tooltip"
				classNameArrow="example-arrow"
				place={"right-start"}
			>
				{tip}
			</CustomTooltip>
		</div>
	);
};
export default Tooltip; */

import "./tooltip.scss";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import * as React from "react";
import { Tooltip as CustomTooltip } from "@mui/material/Tooltip";

export default function Tooltip({ tip }) {
	return (
		<CustomTooltip title={tip} className="ctooltip">
			<IconButton>
				<InfoOutlinedIcon className="tooltip-icon" />
			</IconButton>
		</CustomTooltip>
	);
}
