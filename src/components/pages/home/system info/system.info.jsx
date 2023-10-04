import React from "react";
import "./system.info.scss";

const SystemInfo = () => {
	const systemData = {
		os: "Linux, Ubuntu 20.04 LTS",
		processor: "3GHz Intel Xeon CPUs (2 vCPU)",
		ram: "16GB DDR4",
		disk: "64GB NVMe SSD",
		bandwidth: "1 TB monthly",
	};
	return (
		<div className="system-info">
			<div className="sytem-info-title">
				<h4>Sytem info</h4>
			</div>

			<div className="system-info-container">
				<div className="info-wrapper">
					<h6>OS:</h6>
					<p>{systemData.os}</p>
				</div>
				<div className="info-wrapper">
					<h6>Processor:</h6>
					<p>{systemData.processor}</p>
				</div>
				<div className="info-wrapper">
					<h6>RAM:</h6>
					<p>{systemData.ram}</p>
				</div>
				<div className="info-wrapper">
					<h6>Disk:</h6>
					<p>{systemData.disk}</p>
				</div>
				<div className="info-wrapper">
					<h6>Bandwith:</h6>
					<p>{systemData.bandwidth}</p>
				</div>
			</div>
		</div>
	);
};

export default SystemInfo;
