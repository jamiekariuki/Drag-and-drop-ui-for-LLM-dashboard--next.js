import React from "react";
import "./leads.more.info.scss";
import Image from "next/image";

const LeadsMoreInfo = () => {
	return (
		<div className="leads-more-info">
			<div className="leads-more-info-profile">
				<div className="lead-profile-wrapper">
					<div className="lead-profile-container">
						<Image
							className="lead-profile-pic"
							src="https://i.postimg.cc/gjWfjXGc/Arkansas-Editorial-with-Javon-M-Wallace.jpg"
							alt="avatar"
							fill={true}
						/>
					</div>
				</div>

				<div className="leads-profile-info">hey</div>
			</div>
		</div>
	);
};

export default LeadsMoreInfo;
