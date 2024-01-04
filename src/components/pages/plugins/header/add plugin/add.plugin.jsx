import React from "react";
import "./add.plugin.scss";
import Modal from "@/components/styled components/modals/modal";
import Image from "next/image";
import { allPlatfromPlugins } from "../all.plugins";

const AddPlugin = ({ open, onClose, handleAddPlugin }) => {
	const pluginsPlatfromsSorted = allPlatfromPlugins
		.slice()
		.sort((a, b) => a.title.localeCompare(b.title));

	return (
		<Modal open={open} onClose={onClose} title={"Add plugins"}>
			<div className="add-plugin">
				<div className="add-plugin-container">
					<div className="add-plugin-wrapper">
						{pluginsPlatfromsSorted.map((item, index) => (
							<div
								className="add-plugin-box"
								key={index}
								onClick={() => {
									handleAddPlugin(item);
									onClose();
								}}
							>
								<div className="add-plugin-top">
									<div className="card-icon">
										<Image
											alt="platform icon"
											src={item.icon}
											fill={true}
											className="platfrom-avatar"
											quality={20}
										/>
									</div>
									<h3>{item.title}</h3>
								</div>
								<div className="add-plugin-bottom">
									<p>
										{item.desc
											.split(" ")
											.slice(0, 12)
											.join(" ")}
										{item.desc.split(" ").length > 12 &&
											" ..."}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default AddPlugin;
