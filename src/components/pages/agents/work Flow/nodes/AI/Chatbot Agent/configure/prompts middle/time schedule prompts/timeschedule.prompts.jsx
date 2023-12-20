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
					<Tooltip tip={<p>tip</p>} />
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
					<Tooltip tip={<p>sometimes user might refuse</p>} />
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
					<Tooltip tip={<p>sometimes user might refuse</p>} />
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
					<Tooltip tip={<p>sometimes user might refuse</p>} />
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
					<Tooltip tip={<p>sometimes user might refuse</p>} />
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
