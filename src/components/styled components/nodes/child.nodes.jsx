import React from "react";
import "./nodes.scss";

const ChildNodes = ({ children, agent }) => {
	return (
		<div
			className={
				agent
					? "childnodes childnodes-agent nodrag "
					: "childnodes nodrag"
			}
		>
			{children}
		</div>
	);
};

export default ChildNodes;
