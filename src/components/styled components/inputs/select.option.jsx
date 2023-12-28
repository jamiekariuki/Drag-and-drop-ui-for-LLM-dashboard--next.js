"use client";
import "./inputs.scss";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";

const SelectOption = ({ list, value, changeValue, node, label, disabled }) => {
	return (
		<div className="inputs" style={{ height: node && "27px" }}>
			<select
				disabled={disabled}
				id="mySelect"
				value={value}
				onChange={(e) => {
					changeValue(e.target.value);
				}}
				className="input-field"
				style={{
					fontSize: node && "11px",
				}}
			>
				<option value="" disabled hidden>
					{label}
				</option>
				{list.map((item, index) => (
					<option key={index} value={item}>
						{item}
					</option>
				))}
			</select>
			<div className="select-icon-container">
				<UnfoldMoreIcon className="select-icon" />
			</div>
		</div>
	);
};

export default SelectOption;
