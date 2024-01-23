import React from "react";
import "./auth.slider.scss";
import Image from "next/image";
import { CardSlider } from "@/components/styled components/sliders/slider";
import { sliderData } from "./slider";

const AuthSlider = () => {
	return (
		<div className="auth-slider">
			<CardSlider>
				{sliderData.map((item, index) => (
					<div key={index} className="card-container">
						<div className="title-container">
							<h1>{item.title}</h1>
							<p>{item.subTitle}</p>
						</div>

						<div className="card-image-container">
							<Image
								src={item.image}
								alt="illustrator photo"
								fill={true}
								className="card-image"
							/>
						</div>
					</div>
				))}
			</CardSlider>
		</div>
	);
};

export default AuthSlider;
