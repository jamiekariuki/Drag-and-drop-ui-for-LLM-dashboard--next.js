import React from "react";
import "./split.layout.scss";

const SplitLayout = ({ children, flexReverse }) => {
	return (
		<div
			className="split-layout"
			style={{ flexDirection: flexReverse && "row-reverse" }}
		>
			{children}
		</div>
	);
};

export default SplitLayout;
