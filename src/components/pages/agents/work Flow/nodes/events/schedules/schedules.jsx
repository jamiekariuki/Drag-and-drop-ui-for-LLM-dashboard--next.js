import React from "react";
import "./schedules.scss";
import Nodes from "@/components/styled components/nodes/nodes";
import Tooltip from "@/components/styled components/tooltip/tooltip";
import { useCallback, useEffect, useState } from "react";
import { Handle, Position, useNodeId, useReactFlow } from "reactflow";
import ChildNodes from "@/components/styled components/nodes/child.nodes";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { renderTimeViewClock } from "@mui/x-date-pickers/timeViewRenderers";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import dayjs from "dayjs";

const icon = "https://i.postimg.cc/3xY2tmF2/pngwing-com-5.png";
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

	const tip = (
		<div>
			<p>This node will run everytime a specific time is reached.</p>
			<p>
				By default this node will run once on the time set. If you wish
				to run it on daily basis turn on "Run daily"
			</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Virtual Assistant (AI)</li>
				<li>ChatBot (AI)</li>
				<li>Research Assistant (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="e2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-time">
				<div className="ot-heading">
					<h6>On Time</h6>
					<Tooltip tip={tip} />
				</div>

				<div className="ot-input">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={["TimePicker"]}>
							<TimePicker
								value={time}
								onChange={(newValue) => setTime(newValue)}
								label="Time"
								viewRenderers={{
									hours: renderTimeViewClock,
									minutes: renderTimeViewClock,
									seconds: renderTimeViewClock,
								}}
								slotProps={{ textField: { size: "small" } }}
							/>
						</DemoContainer>
					</LocalizationProvider>
				</div>

				<div className="ot-daily">
					<p>Run daily</p>
					<Switch
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

	const tip = (
		<div>
			<p>
				This node will run everytime a specific time and day is reached.
			</p>
			<p>
				By default this node will run once on the time and day set. If
				you wish to run it every week turn on "Run weekly"
			</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Virtual Assistant (AI)</li>
				<li>ChatBot (AI)</li>
				<li>Research Assistant (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="e2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-day">
				<div className="od-heading">
					<h6>On Day</h6>
					<Tooltip tip={tip} />
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
						<DemoContainer components={["TimePicker"]}>
							<TimePicker
								value={time}
								onChange={(newValue) => setTime(newValue)}
								label="Time"
								viewRenderers={{
									hours: renderTimeViewClock,
									minutes: renderTimeViewClock,
									seconds: renderTimeViewClock,
								}}
								slotProps={{ textField: { size: "small" } }}
							/>
						</DemoContainer>
					</LocalizationProvider>
				</div>

				<div className="od-daily">
					<p>Run weekly</p>
					<Switch
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

	const tip = (
		<div>
			<p>This node will run everytime a specific date is reached.</p>
			<p>
				By default this node will run once on the date and time set. If
				you wish to run it every month on the set date, turn on "Run
				monthly"
			</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Virtual Assistant (AI)</li>
				<li>ChatBot (AI)</li>
				<li>Research Assistant (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="e2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="on-date">
				<div className="odate-heading">
					<h6>On Date</h6>
					<Tooltip tip={tip} />
				</div>

				<div className="odate-input">
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<DemoContainer components={["DateTimePicker"]}>
							<DateTimePicker
								label="Date"
								value={date}
								onChange={(newValue) => setDate(newValue)}
								slotProps={{ textField: { size: "small" } }}
							/>
						</DemoContainer>
					</LocalizationProvider>
				</div>

				<div className="odate-daily">
					<p>Run monthly</p>
					<Switch
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

	const tip = (
		<div>
			<p>
				This node is custom, it includes (date range, multiple schedules
				per period, random time selector, google calender events).
			</p>
			<p>using this node might lead to consuption of more credits</p>
			<h6>This node connects with:</h6>
			<ol>
				<li>Virtual Assistant (AI)</li>
				<li>ChatBot (AI)</li>
				<li>Research Assistant (AI)</li>
			</ol>
		</div>
	);
	return (
		<ChildNodes>
			<Handle
				type="source"
				position={Position.Right}
				id="e2"
				isConnectable={isConnectable}
				className="chandle"
			/>
			<div className="custom-time">
				<div className="custom-heading">
					<h6>Custom schedules</h6>
					<Tooltip tip={tip} />
				</div>

				<div className="custom-time-btn">
					<Button
						variant="outlined"
						size="small"
						className="custom-date-btn "
						disableElevation
					>
						<p>configure</p>
					</Button>
				</div>
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
