"use client";
import React, { useEffect, useState } from "react";
import "./plugins.scss";
import PluginHeader from "./header/plugin.header";
import PluginsCard from "./cards/plugin.cards";
import PluginsForm from "./plugins form/plugins.form";
import usePlugin from "@/hooks/AI hooks/use.plugin";

const Plugins = () => {
	const {
		allPlugins,
		handleAddPlugin,
		handlePluginChange,
		handleDeletePlugin,
		select,
		setSelect,
	} = usePlugin();

	//mobile modal
	const [open, setOpen] = useState(false);
	const onClose = () => {
		setOpen(false);
	};

	return (
		<div className="plugins">
			<PluginHeader handleAddPlugin={handleAddPlugin} />

			<div className="plugin-container">
				<div
					className={
						open ? "plugin-left plugin-left-mobile" : "plugin-left"
					}
				>
					<div className="left-container">
						{allPlugins.map((item, index) => (
							<div
								className="plugins-list"
								key={index}
								onClick={() => {
									setSelect(index);
									setOpen(true);
								}}
							>
								<PluginsCard item={item} />
							</div>
						))}
					</div>
				</div>
				<div
					className={
						!open
							? "plugin-right plugin-right-mobile"
							: "plugin-right"
					}
				>
					{allPlugins.length > 0 ? (
						<PluginsForm
							onClose2={onClose}
							plugin={allPlugins[select]}
							index={select}
							handleDeletePlugin={handleDeletePlugin}
						/>
					) : (
						<div className="empty">
							<h2>Add plugins to get started</h2>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Plugins;
