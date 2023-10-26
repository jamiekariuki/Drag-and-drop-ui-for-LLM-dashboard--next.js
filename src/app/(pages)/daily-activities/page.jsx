"use client";
import React from "react";
import "./page.daily.activities.scss";
import TodaysEvents from "@/components/pages/daily activities/todays event/todays.event";
import TodaysPlatformActivities from "@/components/pages/daily activities/todays platform activities/todays.platform.activities";
import TodaysPlatformUpdates from "@/components/pages/daily activities/todays platform update/todays.platform.updates";
import TodaysAgentActivity from "@/components/pages/daily activities/todays agent activity/todays.agent.activity";
import TodaysTasks from "@/components/pages/daily activities/todays tasks/todays.tasks";
import TodaysLeads from "@/components/pages/daily activities/todays leads/todays.leads";
import TodaysSummaryTokens from "@/components/pages/daily activities/todays summary/todays.summary.tokens";
import TodaysSummaryTasks from "@/components/pages/daily activities/todays summary/todays.summary.task";

const DailyActivities = () => {
	return (
		<div className="daily-activities">
			<div className="daily-activities-top">
				<div className="daily-activities-top-left">
					<TodaysTasks />
				</div>

				<div className="daily-activities-top-right">
					<div className="daily-activities-top-right-top">
						<div className="daily-activities-summarries-left">
							<div className="daily-activities-summarries-left-top">
								<TodaysSummaryTokens />
							</div>
							<div className="daily-activities-summarries-left-bottom">
								<TodaysSummaryTasks />
							</div>
						</div>
						<div className="daily-activities-summarries-right">
							<TodaysAgentActivity />
						</div>
					</div>
					<div className="daily-activities-top-right-bottom">
						<TodaysLeads />
					</div>
				</div>
			</div>

			<div className="daily-activities-bottom">
				<div className="daily-activities-bottom-left">
					<div className="daily-activities-bottom-left-top">
						<TodaysEvents />
					</div>
					<div className="daily-activities-bottom-left-bottom">
						<TodaysPlatformActivities />
					</div>
				</div>

				<div className="daily-activities-bottom-right">
					<TodaysPlatformUpdates />
				</div>
			</div>
		</div>
	);
};

export default DailyActivities;
