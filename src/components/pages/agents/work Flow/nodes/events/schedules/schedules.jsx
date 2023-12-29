import React from "react";
import "./schedules.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import CustomScheduleModal from "./custom schedule/custom.schedule.modal";
import {
	EventsSheduleAdvance,
	EventsSheduleOnDate,
	EventsSheduleOnDay,
	EventsSheduleOnTime,
} from "../events.tooltip";
import dayjs from "dayjs";

const icon = "https://i.postimg.cc/50CPkzWv/icons8-google-calendar-480.png";
const Schedules = () => {
	const nodeId = useNodeId();
	//delete node
	const { deleteElements } = useReactFlow();
	const deleteNode = () => {
		const nodesToDelete = [{ id: nodeId }, { parent: nodeId }];
		const edgesToDelete = [{ source: nodeId }, { target: nodeId }];
		deleteElements({
			nodes: nodesToDelete,
			edges: edgesToDelete,
		});
	};

	return (
		<Nodes title="Schedules" type="Event" onDelete={deleteNode} icon={icon}>
			<div className="schedules"></div>
		</Nodes>
	);
};

//children-----------

const OnTimeSchedules = ({ id, data, isConnectable }) => {
	const [time, setTime] = useState(data.time ? data.time : null);
	//on time
	const [checked, setChecked] = useState(
		data.runDaily ? data.runDaily : false
	);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	//update nodes
	const { setNodes } = useReactFlow();
	useEffect(() => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === id) {
					node.data = {
						...node.data,
						time: time,
						runDaily: checked,
					};
				}

				return node;
			})
		);
	}, [time, checked, setNodes]);

	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="ontime"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-time">
				<div className="ot-heading">
					<h6>On Time</h6>
					<Tooltip tip={EventsSheduleOnTime} />
				</div>

				<div className="ot-input">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TimePicker
							value={dayjs(time)}
							onChange={(newValue) => setTime(newValue)}
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

				<div className="ot-daily">
					<p>Run daily</p>
					<Switch
						disabled={time === null}
						checked={checked}
						onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
						className="cswitch"
					/>
				</div>
			</div>
		</ChildNodes>
	);
};

//On Day----------------------------------------------------------
const OnDaySchedules = ({ id, data, isConnectable }) => {
	const [time, setTime] = useState(data.time ? data.time : null);
	//ontime
	const [checked, setChecked] = useState(
		data.runWeekly ? data.runWeekly : false
	);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	//days
	const [selectedDay, setSelectedDay] = useState(data.day ? data.day : null);
	const handleDayClick = (index) => {
		setSelectedDay(index);
	};
	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	//update nodes
	const { setNodes } = useReactFlow();
	useEffect(() => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === id) {
					node.data = {
						...node.data,
						day: selectedDay,
						time: time,
						runWeekly: checked,
					};
				}

				return node;
			})
		);
	}, [time, selectedDay, checked, setNodes]);

	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="onday"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-day">
				<div className="od-heading">
					<h6>On Day</h6>
					<Tooltip tip={EventsSheduleOnDay} />
				</div>

				<div className="od-day">
					{days.map((day, index) => (
						<button
							key={day}
							onClick={() => handleDayClick(index)}
							style={{
								backgroundColor:
									selectedDay === index && "#b12f9c",
							}}
						>
							<p
								style={{
									color: selectedDay === index && "white",
								}}
							>
								{day}
							</p>
						</button>
					))}
				</div>

				<div className="od-input">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TimePicker
							value={dayjs(time)}
							onChange={(newValue) => setTime(newValue)}
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

				<div className="od-daily">
					<p>Run weekly</p>
					<Switch
						disabled={time === null}
						checked={checked}
						onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
						className="cswitch"
					/>
				</div>
			</div>
		</ChildNodes>
	);
};

//on Date------------------------------------------------------
const OnDateSchedules = ({ id, data, isConnectable }) => {
	const [date, setDate] = useState(data.date ? data.date : null);
	//on time
	const [checked, setChecked] = useState(
		data.runMonthly ? data.runMonthly : false
	);
	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	//update nodes
	const { setNodes } = useReactFlow();
	useEffect(() => {
		setNodes((nds) =>
			nds.map((node) => {
				if (node.id === id) {
					node.data = {
						...node.data,
						date: date,
						runMonthly: checked,
					};
				}

				return node;
			})
		);
	}, [date, checked, setNodes]);

	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="ondate"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-date">
				<div className="odate-heading">
					<h6>On Date</h6>
					<Tooltip tip={EventsSheduleOnDate} />
				</div>

				<div className="odate-input">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DateTimePicker
							label="Date"
							value={dayjs(date)}
							onChange={(newValue) => setDate(newValue)}
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

				<div className="odate-daily">
					<p>Run monthly</p>
					<Switch
						disabled={date === null}
						checked={checked}
						onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
						size="small"
						className="cswitch"
					/>
				</div>
			</div>
		</ChildNodes>
	);
};

//custom dates
const CustomSchedules = ({ id, data, isConnectable }) => {
	//update nodes
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="advance"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="custom-time">
				<div className="custom-heading">
					<h6>Advance schedules</h6>
					<Tooltip tip={EventsSheduleAdvance} />
				</div>

				<div className="custom-time-btn">
					<Button
						variant="outlined"
						size="small"
						className="custom-date-btn "
						disableElevation
						onClick={() => {
							setOpen(true);
						}}
					>
						<p>configure</p>
					</Button>
				</div>
				<CustomScheduleModal
					open={open}
					onClose={onClose}
					data={data}
				/>
			</div>
		</ChildNodes>
	);
};

export {
	Schedules,
	OnTimeSchedules,
	OnDaySchedules,
	OnDateSchedules,
	CustomSchedules,
};
