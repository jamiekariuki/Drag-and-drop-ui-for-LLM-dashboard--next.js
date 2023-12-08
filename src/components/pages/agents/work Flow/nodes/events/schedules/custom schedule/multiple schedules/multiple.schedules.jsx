import React, { useEffect, useState } from "react";
import "./multiple.schedules.scss";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SaveIcon from "@mui/icons-material/Save";
import Switch from "@mui/material/Switch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { SelectDropDown } from "@/components/styled components/menu/more.info";
import { useNodeId, useReactFlow } from "reactflow";
import { useToast } from "@/context/ToastContext";

const MultipleSchedules = ({ data }) => {
	const { showToast } = useToast();

	const [allSchedules, setAllSchedules] = useState(
		data.multipleSchedules ? data.multipleSchedules : []
	);

	//------creating schdules
	const handleAddSchedule = (type) => {
		if (type === "Time") {
			const newSchedule = { title: type, time: null, daily: false };
			setAllSchedules([newSchedule, ...allSchedules]);
		} else if (type === "Day") {
			const newSchedule = {
				title: type,
				time: null,
				day: "",
				weekly: false,
			};
			setAllSchedules([newSchedule, ...allSchedules]);
		} else {
			const newSchedule = { title: type, time: null, monthly: false };
			setAllSchedules([newSchedule, ...allSchedules]);
		}
	};

	//-----handle time changes
	const handleTimeChange = (newValue, index) => {
		const updatedSchedules = [...allSchedules];
		updatedSchedules[index].time = newValue;
		setAllSchedules(updatedSchedules);
	};

	//-----handle cheked
	const handleCheckChange = (checked, index) => {
		const updatedSchedules = [...allSchedules];
		if (updatedSchedules[index].title === "Time") {
			updatedSchedules[index].daily = checked;
		} else if (updatedSchedules[index].title === "Day") {
			updatedSchedules[index].weekly = checked;
		} else if (updatedSchedules[index].title === "Date") {
			updatedSchedules[index].monthly = checked;
		}
		setAllSchedules(updatedSchedules);
	};

	//------handle day
	const handleDayChange = (day, index) => {
		const updatedSchedules = [...allSchedules];
		if (updatedSchedules[index].title === "Day") {
			updatedSchedules[index].day = day;
		}
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
			(schedule) => schedule.time === null
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
			(schedule) => schedule.time !== null
		);

		if (cleanedSchedules !== 0) {
			setNodes((nds) =>
				nds.map((node) => {
					if (node.id === nodeId) {
						node.data = {
							...node.data,
							multipleSchedules: cleanedSchedules,
						};
					}

					return node;
				})
			);
			setSaveBtn(false);
			showToast("Schedule saved successfully", "success");
		}
	};

	//testing
	/* useEffect(() => {
		console.log(allSchedules);
	}, [allSchedules]); */

	return (
		<div className="multiple-schedules">
			<div className="multiple-schedules-heading">
				<h3>Multiple Schedules</h3>

				<div className="multiple-schedules-btns">
					<Button
						variant="outlined"
						startIcon={<AddIcon className="ms-icon" />}
						size="small"
						className="ms-btn"
						disableElevation
						onClick={() => handleAddSchedule("Time")}
					>
						<p>add time</p>
					</Button>
					<Button
						variant="outlined"
						startIcon={<AddIcon className="ms-icon" />}
						size="small"
						className="ms-btn"
						disableElevation
						onClick={() => handleAddSchedule("Day")}
					>
						<p>add day</p>
					</Button>
					<Button
						variant="outlined"
						startIcon={<AddIcon className="ms-icon" />}
						size="small"
						className="ms-btn"
						disableElevation
						onClick={() => handleAddSchedule("Date")}
					>
						<p>add date</p>
					</Button>
				</div>
			</div>

			<div className="ms-container">
				<div className="ms-wrapper">
					{allSchedules.map((item, index) => (
						<div key={index}>
							{item.title === "Time" && (
								<Times
									title={item.title}
									time={item.time}
									checked={item.daily}
									handleCheckChange={handleCheckChange}
									handleTimeChange={handleTimeChange}
									handleDeleteSchedule={handleDeleteSchedule}
									index={index}
									setSaveBtn={setSaveBtn}
									allSchedules={allSchedules}
									track={track}
									setTrack={setTrack}
								/>
							)}
							{item.title === "Day" && (
								<Days
									title={item.title}
									time={item.time}
									checked={item.weekly}
									day={item.day}
									handleCheckChange={handleCheckChange}
									handleTimeChange={handleTimeChange}
									handleDayChange={handleDayChange}
									handleDeleteSchedule={handleDeleteSchedule}
									index={index}
									setSaveBtn={setSaveBtn}
									allSchedules={allSchedules}
									track={track}
									setTrack={setTrack}
								/>
							)}
							{item.title === "Date" && (
								<Dates
									title={item.title}
									time={item.time}
									checked={item.monthly}
									handleCheckChange={handleCheckChange}
									handleTimeChange={handleTimeChange}
									handleDeleteSchedule={handleDeleteSchedule}
									index={index}
									setSaveBtn={setSaveBtn}
									allSchedules={allSchedules}
									track={track}
									setTrack={setTrack}
								/>
							)}
						</div>
					))}
				</div>
			</div>

			<div className="ms-bottom">
				<Button
					disabled={!saveBtn}
					variant="contained"
					startIcon={<SaveIcon className="ms-icon" />}
					size="small"
					className="ms-btn"
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

export default MultipleSchedules;

//--------------------------------------------------------schedule components
//-----time

const Times = ({
	time,
	checked,
	title,
	handleTimeChange,
	handleCheckChange,
	handleDeleteSchedule,
	index,
	setSaveBtn,
	allSchedules,
	track,
	setTrack,
}) => {
	useEffect(() => {
		const hasNullTime = allSchedules.some(
			(schedule) => schedule.time === null
		);

		if (track && time && allSchedules.length !== 0 && !hasNullTime) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}

		setTrack(true);
	}, [time, checked]);

	return (
		<div className="time-container">
			<div className="time-title">
				<h6>{title}</h6>
			</div>

			<div className="time-input">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<TimePicker
						value={time}
						onChange={(newValue) =>
							handleTimeChange(newValue, index)
						}
						label="Time"
						viewRenderers={{
							hours: renderTimeViewClock,
							minutes: renderTimeViewClock,
							seconds: renderTimeViewClock,
						}}
						className="muidp"
						slotProps={{
							textField: {
								size: "small",
								sx: {
									width: 280,
								},
								InputProps: {
									style: {
										borderRadius: 7,
									},
								},
							},
						}}
					/>
				</LocalizationProvider>
			</div>

			<div className="day-position"></div>

			<div className="ot-seq">
				<p>Run daily </p>
				<Switch
					disabled={time === null}
					checked={checked}
					onChange={(e) => {
						handleCheckChange(e.target.checked, index);
					}}
					inputProps={{ "aria-label": "controlled" }}
					size="small"
					className="cswitch"
				/>
			</div>

			<div className="time-delete">
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

//days-------------------------------------------------------------------------------------
const Days = ({
	time,
	checked,
	title,
	day,
	handleTimeChange,
	handleCheckChange,
	handleDayChange,
	handleDeleteSchedule,
	index,
	setSaveBtn,
	allSchedules,
	track,
	setTrack,
}) => {
	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	useEffect(() => {
		const hasNullTime = allSchedules.some(
			(schedule) => schedule.time === null
		);

		if (
			track &&
			time &&
			allSchedules.length !== 0 &&
			!hasNullTime &&
			day !== ""
		) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}

		setTrack(true);
	}, [time, checked, day]);

	//------------------------------------------

	return (
		<div className="time-container">
			<div className="time-title">
				<h6>{title}</h6>
			</div>

			<div className="time-input">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<TimePicker
						value={time}
						onChange={(newValue) =>
							handleTimeChange(newValue, index)
						}
						label="Time"
						viewRenderers={{
							hours: renderTimeViewClock,
							minutes: renderTimeViewClock,
							seconds: renderTimeViewClock,
						}}
						className="muidp"
						slotProps={{
							textField: {
								size: "small",
								sx: {
									width: 280,
								},
								InputProps: {
									style: {
										borderRadius: 7,
									},
								},
							},
						}}
					/>
				</LocalizationProvider>
			</div>

			<div className="day-position">
				<SelectDropDown
					index={index}
					disabled={time === null}
					list={days}
					initialValue={day}
					func={(e) => {
						handleDayChange(e, index);
					}}
					label="Day"
				/>
			</div>

			<div className="ot-seq">
				<p>Run Weekly </p>
				<Switch
					disabled={time === null || day === ""}
					checked={checked}
					onChange={(e) => {
						handleCheckChange(e.target.checked, index);
					}}
					inputProps={{ "aria-label": "controlled" }}
					size="small"
					className="cswitch"
				/>
			</div>

			<div className="time-delete">
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

//dates--------------------------------------------------------------------------------------------------
const Dates = ({
	time,
	checked,
	title,
	handleTimeChange,
	handleCheckChange,
	handleDeleteSchedule,
	index,
	setSaveBtn,
	allSchedules,
	track,
	setTrack,
}) => {
	useEffect(() => {
		const hasNullTime = allSchedules.some(
			(schedule) => schedule.time === null
		);

		if (track && time && allSchedules.length !== 0 && !hasNullTime) {
			setSaveBtn(true);
		} else {
			setSaveBtn(false);
		}

		setTrack(true);
	}, [time, checked]);

	return (
		<div className="time-container">
			<div className="time-title">
				<h6>{title}</h6>
			</div>

			<div className="time-input">
				<LocalizationProvider dateAdapter={AdapterDayjs}>
					<DateTimePicker
						label="Date"
						value={time}
						onChange={(newValue) =>
							handleTimeChange(newValue, index)
						}
						className="muidp"
						slotProps={{
							textField: {
								size: "small",
								sx: {
									width: 280,
								},
								InputProps: {
									style: {
										borderRadius: 7,
									},
								},
							},
						}}
					/>
				</LocalizationProvider>
			</div>

			<div className="day-position"></div>

			<div className="ot-seq">
				<p>Run Monthly </p>
				<Switch
					disabled={time === null}
					checked={checked}
					onChange={(e) => {
						handleCheckChange(e.target.checked, index);
					}}
					inputProps={{ "aria-label": "controlled" }}
					size="small"
					className="cswitch"
				/>
			</div>

			<div className="time-delete">
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
