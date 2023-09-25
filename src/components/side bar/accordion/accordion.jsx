import React, { useState } from "react";
import "./accordion.scss";
import Navigations from "../navigation/navigations";

const Accordion = ({ accorionLinks, sideBar }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(index === activeIndex ? null : index);
	};

	const isAccordion = true;

	return (
		<div className="accordion">
			{accorionLinks.map((item, index) => (
				<div key={index} className="accordion-item">
					<button
						className={`accordion-header ${
							activeIndex === index ? "active" : ""
						}`}
						onClick={() => toggleAccordion(index)}
					>
						<Navigations
							icon={item.icon}
							text={item.text}
							link={item.link}
							sideBar={sideBar}
							activeIndex={activeIndex}
							isAccordion={isAccordion}
						/>
					</button>
					{!sideBar && (
						<div
							className={`accordion-content ${
								activeIndex === index ? "open" : ""
							}`}
						>
							{item.list.map((listItem) => (
								<div key={listItem.title}>
									<h5>{listItem.title}</h5>
								</div>
							))}
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
