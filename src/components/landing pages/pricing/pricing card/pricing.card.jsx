import React from "react";
import "./pricing.card.scss";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const PricingCard = ({ item }) => {
	return (
		<div className="pricing-card">
			<div className="price-card-header">
				<h3 className="price-title">{item.title}</h3>
				<p>{item.subTitle}</p>

				<div className="price-total">
					<h6
						style={{
							color: item.title !== "Pro" && "transparent",
						}}
					>
						{item.priceInfo}{" "}
					</h6>

					<div className="bill-container">
						{item.title !== "Enterprise" ? (
							<>
								<h6>$</h6>
								<h3>{item.price}</h3>
								<div className="price-period">
									<p>{item.pricePeriod}</p>
								</div>
							</>
						) : (
							<h3 className="enteprise">Custom</h3>
						)}
					</div>
				</div>
			</div>

			<div className="features-btn-container">
				<button>
					<p>{item.buttonText}</p>
				</button>
			</div>

			<div className="price-features">
				<div className="price-features-wrapper">
					{item.features.map((data, index) => (
						<div className="features-container" key={index}>
							{data.valid ? (
								<CheckIcon className="features-icon" />
							) : (
								<CloseIcon className="features-icon close-icon" />
							)}
							<h6>{data.info}</h6>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
