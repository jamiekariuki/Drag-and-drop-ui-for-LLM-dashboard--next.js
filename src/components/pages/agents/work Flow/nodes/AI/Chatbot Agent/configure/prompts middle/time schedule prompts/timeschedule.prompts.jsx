import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useNodeAiContext } from "@/context/nodeAiContext";
import React from "react";
import Switch from "@mui/material/Switch";

const TimeschedulePrompts = () => {
	const {
		scheduleTitle,
		setScheduleTitle,
		scheduleTitleLength,
		guestEmail,
		setGuestEmail,
		scheduleLocation,
		setScheduleLocation,
		scheduleDescription,
		setScheduleDescription,
		scheduleBusy,
		setScheduleBusy,
	} = useNodeAiContext();

	return (
		<div className="prompts">
			<div className="prompt-container">
				<div className="header">
					<h6>Schedule Title</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This input field prompts users to designate a
								title or label for a scheduled event or plan
								associated with Google Maps.
							</p>
						}
					/>
				</div>
				<div className="text-input">
					<Inputs2
						error={
							scheduleTitle.replace(/\s/g, "").length >=
							scheduleTitleLength
						}
						type={"text"}
						label={"Schedule title"}
						id={"scheduletitle"}
						value={scheduleTitle}
						changeValue={(e) => {
							setScheduleTitle(e);
						}}
					/>
					<p
						style={{
							color:
								scheduleTitle.replace(/\s/g, "").length >=
									scheduleTitleLength &&
								"rgba(255, 0, 0, 0.7)",
							fontSize: "11px",
						}}
					>
						{scheduleTitle.replace(/\s/g, "").length}/
						{scheduleTitleLength}
					</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Guest Email</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This enables the AI to request and collect guest
								emails. Please note some users may choose not to
								provide their email information under specific
								circumstances or preferences.
							</p>
						}
					/>
				</div>
				<div className="switch-input">
					<Switch
						checked={guestEmail}
						onChange={(e) => setGuestEmail(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to ask and collect email</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Location</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This allows the AI to collect meeting locations
								automatically or utilize the previously provided
								location information. Users can opt to have the
								AI use the existing location details or specify
								a particular location for events. Additionally,
								if there is a specific location the user
								prefers, they can input this information in the
								"Extra Info" section for accurate event location
								allocation
							</p>
						}
					/>
				</div>
				<div className="switch-input">
					<Switch
						checked={scheduleLocation}
						onChange={(e) => setScheduleLocation(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to ask and collect Location</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Description</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This permits the AI to generate a description or
								summary for the schedule or event.
							</p>
						}
					/>
				</div>
				<div className="switch-input">
					<Switch
						checked={scheduleDescription}
						onChange={(e) =>
							setScheduleDescription(e.target.checked)
						}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to add description in schedule</p>
				</div>
			</div>
			{/*-------------------------------------------------------- */}
			<div className="prompt-container">
				<div className="header">
					<h6>Detect Time</h6>
					<Tooltip
						node={false}
						tip={
							<p>
								This feature enables the AI to detect periods of
								availability and busyness based on Google
								Calendar events. By analyzing the calendar, the
								AI can identify free time slots, allowing it to
								inform customers or users about available
								timeframes for appointments or interactions.{" "}
							</p>
						}
					/>
				</div>
				<div className="switch-input">
					<Switch
						checked={scheduleBusy}
						onChange={(e) => setScheduleBusy(e.target.checked)}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
					/>
					<p>Enable AI to detect when busy and free</p>
				</div>
			</div>
		</div>
	);
};

export default TimeschedulePrompts;
