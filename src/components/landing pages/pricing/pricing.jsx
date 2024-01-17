import React from "react";
import "./pricing.scss";
import { pricingData } from "./pricing.data";
import PricingCard from "./pricing card/pricing.card";

const Pricing = () => {
	return (
		<div className="pricing">
			<div className="pricing-heading">
				<h1>Perspiciatis ducimus earum consectetur</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Odit alias nesciunt facere, nobis, porro in quam itaque
					officiis incidunt, ab dolorem eligendi harum nihil debitis.
					Perspiciatis ducimus earum consectetur accusantium!
				</p>
			</div>
			<div className="pricing-container">
				{pricingData.map((item, index) => (
					<PricingCard key={index} item={item} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
