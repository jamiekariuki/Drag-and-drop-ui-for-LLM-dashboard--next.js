import React, { useEffect, useState } from "react";
import "./google.calender.schedule.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNodeId, useReactFlow } from "reactflow";
import { Inputs2 } from "@/components/styled components/inputs/inputs";
import { useToast } from "@/context/ToastContext";

const GoogleCalenderSchedule = ({ data }) => {
	const { showToast } = useToast();

	const [allSchedules, setAllSchedules] = useState(
		data.googleCalender ? data.googleCalender : []
	);

	//------creating schdules
	const handleAddSchedule = () => {
		const newSchedule = { calenderId: "", calenderSummary: "" };
		setAllSchedules([newSchedule, ...allSchedules]);
	};

	//-----handling form change
	//----id change
	const handleIdChange = (newValue, index) => {
		const updatedSchedules = [...allSchedules];
		updatedSchedules[index].calenderId = newValue;
		setAllSchedules(updatedSchedules);
	};
	//----summary change
	const handleSummaryChange = (newValue, index) => {
		const updatedSchedules = [...allSchedules];
		updatedSchedules[index].calenderSummary = newValue;
		setAllSchedules(updatedSchedules);
	};

	//-----deleting schedules
	const handleDeleteSchedule = (index) => {
		const updatedSchedules = [...allSchedules];
		updatedSchedules.splice(index, 1);
		setAllSchedules(updatedSchedules);
		if (updatedSchedules.length === 0) {
			setSaveBtn(false);
		}
		const hasNullTime = updatedSchedules.some(
			(schedule) =>
				schedule.calenderId === "" || schedule.calenderSummary === ""
		);
		if (hasNullTime) {
			setSaveBtn(false);
		} else {
			setSaveBtn(true);
		}
	};

	//---saving btn control
	//by default its disabled
	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);

	//----saving to nodes
	const nodeId = useNodeId();
	const { setNodes } = useReactFlow();

	const onSave = () => {
		//clean shedules prevent saving null values
		const cleanedSchedules = allSchedules.filter(
			(schedule) =>
				schedule.calenderId !== "" || schedule.calenderId !== ""
		);

		if (cleanedSchedules !== 0) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === nodeId) {
						node.data = {
							...node.data,
							googleCalender: cleanedSchedules,
						};
					}

					return node;
				})
			);
			setSaveBtn(false);

			showToast("Schedule saved successfully", "success");
		}
	};

	return (
		<div className="google-calender-schedule">
			<div className="google-schedules-heading">
				<h3>Google calender schedules</h3>

				<div className="google-schedules-btns">
					<Button
						variant="outlined"
						startIcon={<AddIcon className="gs-icon" />}
						size="small"
						className="gs-btn"
						disableElevation
						onClick={handleAddSchedule}
					>
						<p>add event</p>
					</Button>
				</div>
			</div>

			<div className="gs-container">
				<div className="gc-info">
					<p>
						For precise execution, include the calendar ID and event
						summary. If the node executes successfully, it will
						carry over all details associated with the event in
						Google Calendar, such as description, start/end time,
						location, and any other pertinent fields, to the
						subsequent nodes in the process. Enable the Google
						Calendar plugin in your app's plugin section to sync
						events correctly.
					</p>
				</div>

				<div className="gs-wrapper">
					{allSchedules.map((item, index) => (
						<div key={index}>
							<Event
								calenderId={item.calenderId}
								calenderSummary={item.calenderSummary}
								handleDeleteSchedule={handleDeleteSchedule}
								index={index}
								handleIdChange={handleIdChange}
								handleSummaryChange={handleSummaryChange}
								setSaveBtn={setSaveBtn}
								allSchedules={allSchedules}
								track={track}
								setTrack={setTrack}
							/>
						</div>
					))}
				</div>
			</div>

			<div className="gs-bottom">
				<Button
					disabled={!saveBtn}
					variant="contained"
					startIcon={<SaveIcon className="gs-icon" />}
					size="small"
					className="gs-btn"
					disableElevation
					onClick={onSave}
				>
					<p
						style={{
							//if btn is false it will be grey
							color: saveBtn || "grey",
						}}
					>
						save
					</p>
				</Button>
			</div>
		</div>
	);
};

export default GoogleCalenderSchedule;

//input-----------------------

const Event = ({
	handleDeleteSchedule,
	index,
	handleIdChange,
	handleSummaryChange,
	calenderId,
	calenderSummary,
	setSaveBtn,
	allSchedules,
	track,
	setTrack,
}) => {
	useEffect(() => {
		const hasNullTime = allSchedules.some(
			(schedule) =>
				schedule.calenderId === "" || schedule.calenderSummary === ""
		);

		if (
			track &&
			calenderId &&
			calenderSummary &&
			allSchedules.length !== 0 &&
			!hasNullTime
		) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}

		setTrack(true);
	}, [calenderId, calenderSummary]);

	return (
		<div className="event-container">
			<div className="events-wrapper">
				<div className="calender-details">
					<div className="calender-title">
						<p>Calender ID:</p>
					</div>

					<div className="calender-input">
						<Inputs2
							type={"text"}
							label={"ID"}
							id={"id"}
							value={calenderId}
							changeValue={(e) => {
								handleIdChange(e, index);
							}}
						/>
					</div>
				</div>

				<div className="calender-details">
					<div className="calender-title">
						<p>Calender Summary title:</p>
					</div>

					<div className="calender-input">
						<Inputs2
							type={"text"}
							label={"sumary title"}
							id={"summarytitle"}
							value={calenderSummary}
							disabled={
								calenderId === "" && calenderSummary === ""
							}
							changeValue={(e) => {
								handleSummaryChange(e, index);
							}}
						/>
					</div>
				</div>
			</div>

			<div className="event-delete">
				<IconButton
					aria-label="delete"
					size="small"
					color="error"
					onClick={() => {
						handleDeleteSchedule(index);
					}}
				>
					<DeleteIcon className="tb-delete" />
				</IconButton>
			</div>
		</div>
	);
};
