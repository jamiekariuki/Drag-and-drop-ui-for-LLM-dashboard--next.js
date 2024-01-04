import Image from "next/image";
import React from "react";

const PluginsCard = ({ item }) => {
	return (
		<>
			<div className="card-top">
				<div className="card-icon">
					<Image
						alt="platform icon"
						src={item.icon}
						fill={true}
						className="platfrom-avatar"
						quality={20}
					/>
				</div>

				<h6>{item.title}</h6>
			</div>
			<p>{item.account}</p>
		</>
	);
};

export default PluginsCard;
