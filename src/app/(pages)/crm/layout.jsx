import CrmTab from "@/components/pages/crm/tab/crm.tab";
import React from "react";

const CrmLayout = ({ children }) => {
	return (
		<div style={{ display: "flex", flexDirection: "column" }}>
			<div>
				<CrmTab />
			</div>
			<div>{children}</div>
		</div>
	);
};

export default CrmLayout;
