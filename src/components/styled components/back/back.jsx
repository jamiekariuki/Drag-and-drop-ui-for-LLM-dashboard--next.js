"use client";
import React from "react";
import "./back.scss";
import { useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

const Back = ({ text, home }) => {
	const router = useRouter();

	return (
		<div className="back" onClick={() => router.back()}>
			<IconButton aria-label="go back" size="small">
				<KeyboardBackspaceIcon className="ut-back-icon" />
			</IconButton>

			<p>{text}</p>

			<div className="other-redirect">
				{home && (
					<Link href={"/"}>
						<p>/home</p>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Back;
