import React from "react";
import "./tag.scss";
import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const Tag = () => {
	return (
		<div className="tag">
			<div className="left">
				<div className="left-container">
					<h6>Lorem ipsum dolor sit amet consectetur</h6>

					<h3>aliquid voluptates esse facere incidunt</h3>

					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Dolorem labore, mollitia illum harum minima
						voluptates ipsa reiciendis saepe dicta? Necessitatibus
						mollitia reiciendis praesentium aliquid voluptates esse
						facere incidunt perferendis perspiciatis. <br />
						voluptates ipsa reiciendis saepe dicta? Necessitatibus
						mollitia reiciendis praesentium aliquid voluptates esse
						facere incidunt perferendis perspiciatis.
					</p>

					<button>
						<p>Try out now</p>
						<EastIcon className="upgrade-icon" />
					</button>
				</div>
			</div>
			<div className="right">
				<div className="backdrop"></div>
				<Image
					alt=" a drag and drop interface"
					src="https://i.postimg.cc/PxPt6DJn/sqqhhhh.png"
					fill={true}
					className="screenshot"
					quality={100}
				/>
			</div>
		</div>
	);
};

export default Tag;
