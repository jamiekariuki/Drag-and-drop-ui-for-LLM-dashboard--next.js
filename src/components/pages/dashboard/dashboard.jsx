import React from "react";
import "./dashboard.scss";
import ChartContainer from "@/components/styled components/containers/chart container/chart.container";
import TodaysSummaryTasks from "./todays summary/todays.summary.task";
import TodaysSummaryTokens from "./todays summary/todays.summary.tokens";
import TotalCredits from "./total credits/total.credits";
import DiskStorage from "./disk torage/disk.storage";
import SummaryChatCredits from "./summary chart/summary.chat.credits";
import SummaryChatTask from "./summary chart/summary.chat.task";

const Dashboard = () => {
	const customer = {
		title: "Customers Served",
		number: "112",
		percent: "+67%",
		positive: true,
	};

	const tokens = {
		title: "Credits Used",
		number: "82",
		percent: "-7%",
		positive: false,
	};

	return (
		<div className="dashboard">
			<div className="dash-top">
				<div className="top-side">
					<div className="summary">
						<ChartContainer>
							<SummaryChatCredits
								title={tokens.title}
								number={tokens.number}
								percent={tokens.percent}
								positive={tokens.positive}
							/>
						</ChartContainer>
					</div>
					<div className="summary">
						<ChartContainer>
							<SummaryChatTask
								title={customer.title}
								number={customer.number}
								percent={customer.percent}
								positive={customer.positive}
							/>
						</ChartContainer>
					</div>
				</div>
				<div className="top-side">
					<div className="summary">
						<ChartContainer>
							<TodaysSummaryTasks />
						</ChartContainer>
					</div>
					<div className="summary">
						<ChartContainer>
							<TodaysSummaryTokens />
						</ChartContainer>
					</div>
				</div>
			</div>
			<div className="dash-bottom">
				<div className="bottom-left">
					<ChartContainer>
						<TotalCredits />
					</ChartContainer>
				</div>
				<div className="bottom-right">
					<ChartContainer>
						<DiskStorage />
					</ChartContainer>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
