import React from "react";
import "./cta.scss";

const Cta = () => {
	return (
		<div className="cta">
			<h1>
				Lorem ipsum dolor <span>consectetur</span>{" "}
			</h1>

			<p>
				Voluptatum recusandae illum necessitatibus placeat repudiandae,
				excepturi, neque consequuntur harum alias, nam omnis cupiditate?
			</p>

			<div className="cta-btns">
				<button>
					<p>click me1</p>
				</button>
				<button className="cta-btn">
					<p>click me2</p>
				</button>
			</div>
		</div>
	);
};

export default Cta;
