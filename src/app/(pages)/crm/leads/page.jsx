import React from "react";
import "./page.leads.scss";
//import LeadsInfo from "@/components/pages/crm/leads table/leads info/leads.info";
//import { LeadsData } from "@/components/pages/crm/leads table/leads.data";
import LeadsTable from "@/components/pages/crm/leads table/leads.table";

const Leads = () => {
	/* const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	}; */

	return (
		<div className="page-leads">
			<LeadsTable />

			{/* <button
				onClick={() => {
					setOpen(true);
				}}
			>
				<p>open</p>
			</button>
			<LeadsInfo open={open} onClose={onClose} userData={LeadsData[0]} /> */}
		</div>
	);
};

export default Leads;
