import React from "react";
import "./upcoming.events.scss";

const UpcomingEvents = () => {
	const eventsData = [
		{
			event: "Appointment",
			partner: "Deril insurance",
			date: "4 nov 2023 at 9:50am",
		},
		{
			event: "Delivery",
			partner: "DHL",
			date: "5 nov 2023 at 4:20pm",
		},
		{
			event: "Client pick-up",
			partner: "Rose Mary",
			date: "6 nov 2023 at 11:00am",
		},
		{
			event: "Meeting",
			partner: "Cooljs store",
			date: "8 nov 2023 at 1:30pm",
		},
		{
			event: "Client pick-up",
			partner: "johnny Aaron",
			date: "8 nov 2023 at 6:00pm",
		},
		{
			event: "Appointment",
			partner: "Funds sacco",
			date: "10 nov 2023 at 10:50am",
		},
		{
			event: "Client pick-up",
			partner: "Daisy karen",
			date: "10 nov 2023 at 12:30pm",
		},
		{
			event: "Meeting",
			partner: "NIC manager",
			date: "11 nov 2023 at 7:30am",
		},
	];

	return (
		<div className="upcoming-events">
			<div className="event-title">
				<h4>Upcoming events</h4>
			</div>

			<div className="events-container">
				{eventsData.map((event, index) => (
					<div key={index} className="events-wrapper">
						<div className="event-title-wrapper">
							<h6>{event.event}</h6>
						</div>

						<div className="event-partner-date">
							<div className="event-partner">
								<p>{event.partner}</p>
							</div>
							<div className="event-date">
								<p>{event.date}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="event-footer">
				<p>See all</p>
			</div>
		</div>
	);
};

export default UpcomingEvents;
