"use client";
import "./crm.tab.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CrmTab = () => {
	const pathname = usePathname();

	return (
		<div className="crm-tab">
			<div
				className="tab-line"
				style={{
					width:
						pathname === "/crm"
							? "63px"
							: pathname === "/crm/leads"
							? "43px"
							: pathname === "/crm/campaigns"
							? "84px"
							: "0px",
					marginLeft:
						pathname === "/crm"
							? "0px"
							: pathname === "/crm/leads"
							? "103px"
							: pathname === "/crm/campaigns"
							? "184px"
							: "0px",
				}}
			/>

			<div className="tab-container">
				<Link href={"/crm"}>
					<button>
						<h6
							style={{
								color: pathname === "/crm" && "#b12f9c",
							}}
						>
							Overview
						</h6>
					</button>
				</Link>
			</div>
			<div className="tab-container">
				<Link href={"/crm/leads"}>
					<button>
						<h6
							style={{
								color: pathname === "/crm/leads" && "#b12f9c",
							}}
						>
							Leads
						</h6>
					</button>
				</Link>
			</div>
			<div className="tab-container">
				<Link href={"/campaigns"}>
					<button>
						<h6
							style={{
								color:
									pathname === "/crm/campaigns" && "#b12f9c",
							}}
						>
							Campaigns
						</h6>
					</button>
				</Link>
			</div>
		</div>
	);
};

export default CrmTab;
