"use client";
import React from "react";
import "./server.location.scss";
import {
	ComposableMap,
	Marker,
	Geographies,
	Geography,
} from "react-simple-maps";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const ServerLocation = () => {
	const deployedLocation =
		"San Francisco , California 37.3875° N, 122.0575° W";

	const markers = [
		{
			markerOffset: -15,
			name: "San Francisco",
			coordinates: [-122.0575, 37.3875],
		},
	];

	return (
		<div className="server-location">
			<div className="server-location-title">
				<h4>Server location</h4>
			</div>

			<div className="map-container">
				<ComposableMap data-tip="" className="map-wrapper">
					<Geographies geography={geoUrl} fill="#c353b0">
						{({ geographies }) =>
							geographies.map((geo) => (
								<Geography key={geo.rsmKey} geography={geo} />
							))
						}
					</Geographies>
					{markers.map(({ name, coordinates, markerOffset }) => (
						<Marker key={name} coordinates={coordinates}>
							<circle
								r={7}
								fill="#F00"
								stroke="#fff"
								strokeWidth={2}
							/>
							<text
								textAnchor="middle"
								y={markerOffset}
								style={{
									fontFamily: "system-ui",
									fill: "#5D5A6D",
								}}
							>
								{name}
							</text>
						</Marker>
					))}
				</ComposableMap>
			</div>

			<div className="map-key">
				<h4>
					Your current VPS is deployed at:
					<br /> <span>{deployedLocation}</span>
				</h4>
			</div>
		</div>
	);
};

export default ServerLocation;
