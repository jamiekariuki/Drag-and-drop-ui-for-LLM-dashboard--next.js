"use client";
import React from "react";
import "./page.scss";
import SummaryPieChart from "@/components/pages/home/pie chart/pie.chart";
import ProductTable from "@/components/pages/home/product table/product.table";
import SummaryChatCustomer from "@/components/pages/home/summary chart/summary.chat.customers";
import SummaryChatTokens from "@/components/pages/home/summary chart/summary.chat.tokens";
import SummaryChatTask from "@/components/pages/home/summary chart/summary.chat.task";
import UpcomingEvents from "@/components/pages/home/upcoming events/upcoming.events";
import AgentBarChart from "@/components/pages/home/agents bar chart/agents.bar.chart";

const Home = () => {
	const customer = {
		title: "Customers Served",
		number: "112",
		percent: "+67%",
		positive: true,
	};

	const tokens = {
		title: "Tokens Used",
		number: "82",
		percent: "-7%",
		positive: false,
	};

	const tasks = {
		title: "Tasks Completed",
		number: "18",
		percent: "+38%",
		positive: true,
	};

	return (
		<div className="dashboard">
			<div className="dashboard-left-container">
				<div className="dashboard-left-top-container">
					<div className="summary">
						<SummaryChatCustomer
							title={customer.title}
							number={customer.number}
							percent={customer.percent}
							positive={customer.positive}
						/>
					</div>
					<div className="summary">
						<SummaryChatTokens
							title={tokens.title}
							number={tokens.number}
							percent={tokens.percent}
							positive={tokens.positive}
						/>
					</div>
					<div className="summary">
						<SummaryChatTask
							title={tasks.title}
							number={tasks.number}
							percent={tasks.percent}
							positive={tasks.positive}
						/>
					</div>
				</div>
				<div className="dashboard-left-bottom-container">
					<div className="dashboard-left-left-bottom-container">
						<UpcomingEvents />
					</div>
					<div className="dashboard-left-right-bottom-container">
						<AgentBarChart />
					</div>
				</div>
			</div>
			<div className="dashboard-right-container">
				<div className="dashboard-right-top-container">
					<SummaryPieChart />
				</div>
				<div className="dashboard-right-bottom-container">
					<ProductTable />
				</div>
			</div>
		</div>
	);
};

export default Home;
