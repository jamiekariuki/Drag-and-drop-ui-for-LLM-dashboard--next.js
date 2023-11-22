"use client";
import "./agent.tabs.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AgentsTabs = () => {
	const pathname = usePathname();

	if (pathname === "/agents" || pathname === "/agents/task-queues") {
		return (
			<div className="agents-tab">
				<div
					className="tab-line"
					style={{
						width:
							pathname === "/agents"
								? "45px"
								: pathname === "/agents/task-queues"
								? "82px"
								: "0px",
						marginLeft:
							pathname === "/agents"
								? "0px"
								: pathname === "/agents/task-queues"
								? "87px"
								: "0px",
					}}
				/>

				<div className="tab-container">
					<Link href={"/agents"}>
						<button>
							<h6
								style={{
									color: pathname === "/agents" && "#b12f9c",
								}}
							>
								Agents
							</h6>
						</button>
					</Link>
				</div>
				<div className="tab-container">
					<Link href={"/crm/task-queues"}>
						<button>
							<h6
								style={{
									color:
										pathname === "/agents/task-queues" &&
										"#b12f9c",
								}}
							>
								Task Queues
							</h6>
						</button>
					</Link>
				</div>
				{/* <div className="tab-container">
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
			</div> */}
			</div>
		);
	} else {
		return null;
	}
};

export default AgentsTabs;
