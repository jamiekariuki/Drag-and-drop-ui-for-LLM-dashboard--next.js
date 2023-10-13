import React from "react";
import "./todays.event.scss";

const TodaysEvents = () => {
	const eventsData = [
		{
			event: "Client pick-up",
			partner: "Ian martin",
			date: "9:00am",
		},
		{
			event: "Meeting",
			partner: "Board managment",
			date: "11:30am",
		},
		{
			event: "Client pick-up",
			partner: "judith june",
			date: "1:00pm",
		},
		{
			event: "Appointment",
			partner: "Serv secretary",
			date: "2:50pm",
		},
		{
			event: "Delivery",
			partner: "DHL",
			date: "4:20pm",
		},

		{
			event: "Client pick-up",
			partner: "Aron paul",
			date: "4:30pm",
		},
		{
			event: "Appointment",
			partner: "Serv secretary",
			date: "2:50pm",
		},
		{
			event: "Delivery",
			partner: "DHL",
			date: "4:20pm",
		},

		{
			event: "Client pick-up",
			partner: "Aron paul",
			date: "4:30pm",
		},
	];

	return (
		<div className="todays-upcoming-events">
			<div className="todays-event-title">
				<h4>Todays events</h4>
			</div>

			<div className="todays-events-container">
				{eventsData.map((event, index) => (
					<div key={index} className="todays-events-wrapper">
						<div className="event-title-wrapper">
							<h6>{event.event}</h6>
						</div>

						<div className="todays-event-partner-date">
							<div className="todays-event-partner">
								<p>{event.partner}</p>
							</div>
							<div className="todays-event-date">
								<p>{event.date}</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="todays-event-footer">
				<p>See all</p>
			</div>
		</div>
	);
};

export default TodaysEvents;
