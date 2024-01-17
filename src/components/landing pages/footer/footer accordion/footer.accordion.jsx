"use client";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./footer.accordion.scss";
import Link from "next/link";
import Image from "next/image";

export const FooterAccordion = ({ footerData }) => {
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className="footer-accordion">
			{footerData.map((item) => (
				<Accordion
					key={item.title}
					expanded={expanded === `panel${item.title}`}
					onChange={handleChange(`panel${item.title}`)}
					className="accordion-wrapper"
				>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon className="expand-icon" />}
						aria-controls={`panel${item.title}bh-content`}
						id={`panel${item.title}bh-header`}
						className={`summary ${
							expanded === `panel${item.title}` ? "open" : ""
						}`}
					>
						<div className="accordion-title-wrapper">
							<h5 className="item-title">{item.title}</h5>
						</div>
					</AccordionSummary>
					<AccordionDetails className="accordionDetails">
						<ul>
							{item.list.map((listItem) => (
								<li key={listItem.title}>
									<Link href={listItem.url}>
										<div className="list-wrapper">
											<p>{listItem.name}</p>
										</div>
									</Link>
								</li>
							))}
						</ul>
					</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};
