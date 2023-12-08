import React, { useEffect, useState } from "react";
import "./date.range.scss";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import Switch from "@mui/material/Switch";
import dayjs from "dayjs";
import { useNodeId, useReactFlow } from "reactflow";
import { useToast } from "@/context/ToastContext";

const DateRange = ({ data }) => {
	const { showToast } = useToast();

	//---date range
	const [dateStart, setDateStart] = useState(
		data.dateRange ? data.dateRange.dateStart : null
	);
	const [dateEnd, setDateEnd] = useState(
		data.dateRange ? data.dateRange.dateEnd : null
	);
	const today = dayjs();

	//---time
	const [time, setTime] = useState(
		data.dateRange ? data.dateRange.time : null
	);

	//---checked
	const [checked, setChecked] = useState(
		data.dateRange ? data.dateRange.random : false
	);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	//---clear btn control
	const [clearBtn, setClearBtn] = useState(false);
	//---saving btn control
	//if true button is disaable
	const [saveBtn, setSaveBtn] = useState(false);
	const [track, setTrack] = useState(false);

	useEffect(() => {
		//clear btn
		if (dateStart || dateEnd || time || checked) {
			setClearBtn(true);
		} else {
			setClearBtn(false);
		}
		//save btn
		if (track) {
			if (time || checked) {
				setSaveBtn(true);
			} else {
				setSaveBtn(false);
			}
		}
		setTrack(true);
	}, [dateStart, dateEnd, time, checked]);

	const onClear = () => {
		setDateStart(null);
		setDateEnd(null);
		setChecked(false);
		setTime(null);
	};

	//---save
	const nodeId = useNodeId();
	const { setNodes } = useReactFlow();

	const onSave = () => {
		const data = {
			dateStart: dateStart,
			dateEnd: dateEnd,
			time: time,
			random: checked,
		};

		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === nodeId) {
					node.data = {
						...node.data,
						dateRange: data,
					};
				}

				return node;
			})
		);
		setSaveBtn(false);
		showToast("Schedule saved successfully", "success");
	};

	return (
		<div className="date-range">
			<div className="date-range-heading">
				<h3>Date Range</h3>

				{clearBtn && (
					<Button
						variant="outlined"
						size="small"
						className="dr-clear-btn"
						disableElevation
						onClick={onClear}
					>
						<p>clear</p>
					</Button>
				)}
			</div>

			<div className="dr-container">
				<div className="dr-info">
					<p>
						You have the flexibility to set the date range during
						which the node will run. Choose the starting and ending
						dates to define the period within which the node's
						operations will be active. For the daily execution time,
						you have two options:
						<br />
						<span>1. Set a Specific Time:</span> If you prefer a
						specific time for the node to execute daily within the
						selected date range.
						<br />
						<span>2. Randomize Execution Time: </span>{" "}
						Alternatively, opt to have the node execute at a random
						time each day within the chosen date range.
					</p>
				</div>
				<div className="dr-wrapper">
					<div className="dr-components">
						<p>From:</p>

						<div className="time-input">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateTimePicker
									label="Date to start"
									value={dateStart}
									minDate={today}
									maxDate={dateEnd}
									onChange={(newValue) =>
										setDateStart(newValue)
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

						<p>To:</p>

						<div className="time-input">
							<LocalizationProvider dateAdapter={AdapterDayjs}>
								<DateTimePicker
									label="Date to end"
									value={dateEnd}
									minDate={dateStart ? dateStart : today}
									onChange={(newValue) =>
										setDateEnd(newValue)
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
					</div>

					<div className="dr-day">
						<div className="dr-time-component">
							<p>Time to run on each day:</p>

							<div className="time-input">
								<LocalizationProvider
									dateAdapter={AdapterDayjs}
								>
									<TimePicker
										disabled={
											dateStart === null ||
											dateEnd === null ||
											checked
										}
										value={time}
										onChange={(newValue) =>
											setTime(newValue)
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
													width: 200,
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
						</div>

						<p>Or</p>

						<div className="dr-pick-random">
							<p>Pick random time</p>

							<Switch
								disabled={
									dateStart === null ||
									dateEnd === null ||
									time
								}
								checked={checked}
								onChange={handleChange}
								inputProps={{ "aria-label": "controlled" }}
								size="small"
								className="cswitch"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="dr-bottom">
				<Button
					//if btn is false disable is true
					disabled={!saveBtn}
					variant="contained"
					startIcon={<SaveIcon className="dr-icon" />}
					size="small"
					className="dr-btn"
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

export default DateRange;
