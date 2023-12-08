import React, { useState } from "react";
import "./nav.components.scss";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { nodesData } from "./nodesData";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useReactFlow } from "reactflow";
import Toast from "@/components/styled components/toast/toast";

const NavComponents = () => {
	const [expanded, setExpanded] = useState(false);
	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	//----get all nodes
	const { getNodes } = useReactFlow();

	//----
	const onDragStart = (event, nodesToDrag) => {
		const currentNodes = getNodes();

		const allData = {
			dragedNodes: nodesToDrag,
			allNodes: currentNodes,
		};

		const serializedData = JSON.stringify(allData);
		event.dataTransfer.setData("application/reactflow", serializedData);
		event.dataTransfer.effectAllowed = "move";

		/* const serializedNodes = JSON.stringify(nodesToDrag);
		event.dataTransfer.setData("application/reactflow", serializedNodes);
		event.dataTransfer.effectAllowed = "move"; */
	};

	return (
		<div className="nav-components">
			<div className="nav-component-container">
				<div className="nc-header">
					<h3>Agent 47</h3>

					<div className="nc-search">
						<div className="nc-search-container">
							<div className="group">
								<svg
									className="icon"
									aria-hidden="true"
									viewBox="0 0 24 24"
								>
									<g>
										<path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
									</g>
								</svg>
								<input
									placeholder="Search..."
									type="search"
									className="input"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="side-bar-accordion">
					{nodesData.map((item) => (
						<Accordion
							key={item.title}
							expanded={expanded === `panel${item.title}`}
							onChange={handleChange(`panel${item.title}`)}
							className="accordion-wrapper"
						>
							<AccordionSummary
								expandIcon={
									<ExpandMoreIcon className="expand-icon" />
								}
								aria-controls={`panel${item.title}bh-content`}
								id={`panel${item.title}bh-header`}
								className={`summary ${
									expanded === `panel${item.title}`
										? "open"
										: ""
								}`}
							>
								<div className="accordion-title-wrapper">
									<item.icon className="accordion-icons" />
									<h4 className="item-title">{item.title}</h4>
								</div>
							</AccordionSummary>
							<AccordionDetails className="accordionDetails">
								<ul>
									{item.list.map((listItem) => (
										<li key={listItem.title}>
											<div
												className="list-wrapper"
												onDragStart={(event) =>
													onDragStart(
														event,
														listItem.nodes
													)
												}
												draggable
											>
												<RxDragHandleDots2 className="drag-handle" />
												<div>
													<p>{listItem.title}</p>
												</div>
											</div>
										</li>
									))}
								</ul>
							</AccordionDetails>
						</Accordion>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavComponents;
