"use client";
import React, { useEffect, useRef, useState } from "react";
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
}) => {
	const [message, setMessage] = useState("");
	const inputRef = useRef();

	const handleInputChange = (e) => {
		setMessage(e.target.value);
		adjustInputHeight();
	};

	const adjustInputHeight = () => {
		const input = inputRef.current;
		if (input) {
			input.style.height = "100px";
			input.style.height = input.scrollHeight + "px";
		}
	};

	useEffect(() => {
		adjustInputHeight();
	}, [message]);

	if (type === "text" || type === "email" || type === "password") {
		return (
			<div className="inputs">
				<input
					id={id}
					disabled={disabled}
					/* {...register(id, { required })} */
					placeholder=" "
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

	if (type === "text area") {
		return (
			<div className="inputs-ta">
				<textarea
					ref={inputRef}
					placeholder={label}
					id={id}
					disabled={disabled}
					/* {...register(id, { required })} */
					type={type}
					onChange={handleInputChange}
				/>
			</div>
		);
	}
};

export default Inputs;
