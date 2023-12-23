import React from "react";
import "./virtual.nav.scss";
import { useNodeAiContext } from "@/context/nodeAiContext";

const VirtualNav = ({ setNav, nav }) => {
	const { abilities } = useNodeAiContext();

	return (
		<div className="virtual-nav">
			<button onClick={() => setNav("General prompts")}>
				<p style={{ color: nav === "General prompts" && "#b12f9c" }}>
					General prompts
				</p>
			</button>

			{/*--------------------------------------------------------------------- */}

			<button
				disabled={!abilities.multiModal}
				onClick={() => setNav("Multimodal")}
			>
				<p style={{ color: nav === "Multimodal" && "#b12f9c" }}>
					Multimodal
				</p>
			</button>
		</div>
	);
};

export default VirtualNav;
