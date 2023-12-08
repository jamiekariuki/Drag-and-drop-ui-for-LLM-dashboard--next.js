"use client";
import { useEffect, useRef, useState } from "react";
import "./inputs.scss";

const Inputs = ({
	id,
	label,
	type,
	disabled,
	formatPrice,
	register,
	required,
	error,
	inputHeight,
	value,
}) => {
	const [defaultValue, setDefaultValue] = useState(value ? value : "");

	//----- text type field
	const [message, setMessage] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => {
		setMessage(e.target.value);
		adjustInputHeight();
	};

	const adjustInputHeight = () => {
		const input = inputRef.current;
		if (input) {
			input.style.height = inputHeight ? inputHeight : "100px";
			input.style.height = input.scrollHeight + "px";
		}
	};

	useEffect(() => {
		adjustInputHeight();
	}, [message]);

	///----
	if (type === "text" || type === "email" || type === "password") {
		return (
			<div className="inputs">
				<input
					id={id}
					disabled={disabled}
					/* {...register(id, { required })} */
					value={defaultValue}
					placeholder=" "
					onChange={(e) => {
						setDefaultValue(e.target.value);
					}}
					type={type}
					className="input-field"
					style={{
						borderColor: error && "rgba(255, 0, 0, 0.45)",
					}}
				/>
				<label>
					<p
						style={{
							color: error && "rgba(255, 0, 0, 0.7)",
						}}
					>
						{label}
					</p>
				</label>
				{error && <p className="input-error">your error is this</p>}
			</div>
		);
	}

	////--

	if (type === "text area") {
		return (
			<div className="inputs-ta">
				<textarea
					ref={inputRef}
					placeholder={label}
					id={id}
					disabled={disabled}
					/* {...register(id, { required })} */
					style={{ height: inputHeight ? inputHeight : "100px" }}
					type={type}
					onChange={handleInputChange}
				/>
			</div>
		);
	}
};

const Inputs2 = ({
	changeValue,
	value,
	id,
	disabled,
	error,
	type,
	label,
	node,
}) => {
	return (
		<div className="inputs" style={{ height: node && "27px" }}>
			<input
				id={id}
				disabled={disabled}
				value={value}
				placeholder=" "
				onChange={(e) => {
					changeValue(e.target.value);
				}}
				type={type}
				className="input-field"
				style={{
					borderColor: error && "rgba(255, 0, 0, 0.45)",
					fontSize: node && "12px",
				}}
			/>
			<label className={disabled && "label-disabled"}>
				<p
					style={{
						color: error && "rgba(255, 0, 0, 0.7)",
						fontSize: node && "12px",
					}}
				>
					{label}
				</p>
			</label>
		</div>
	);
};

const TextArea2 = ({
	id,
	label,
	disabled,
	inputHeight,
	value,
	changeValue,
	node,
}) => {
	return (
		<div className="inputs-ta">
			<textarea
				placeholder={label}
				id={id}
				value={value}
				disabled={disabled}
				style={{ height: inputHeight ? inputHeight : "100px" }}
				onChange={(e) => {
					changeValue(e.target.value);
				}}
				type="text area"
				className={node && "node-ta"}
			/>
		</div>
	);
};

export { Inputs, Inputs2, TextArea2 };
