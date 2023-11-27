import React from "react";
import "./nodes.scss";

const ChildNodes = ({ children }) => {
	return <div className="childnodes nodrag">{children}</div>;
};

export default ChildNodes;
