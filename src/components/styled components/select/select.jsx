"use client";
import React, { useState } from "react";
import "./select.scss";

const SelectDropDown = () => {
	const [selected, setSelected] = useState(""); // State to track the selected option

	// Function to handle changes in the select element
	const handleSelectChange = (event) => {
		setSelected(event.target.value);
	};

	return (
		<div className="select-container">
			<p>Period</p>
			<select
				className="select-menu"
				value={selected}
				onChange={handleSelectChange}
			>
				<option value="orange">
					<p>hourly</p>
				</option>
				<option value="apple">
					<p>daily</p>
				</option>
				<option value="banana">
					<p>weekly</p>
				</option>
				<option value="cherry">
					<p>monthly</p>
				</option>
			</select>
		</div>
	);
};

export default SelectDropDown;
