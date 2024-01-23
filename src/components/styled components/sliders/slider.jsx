"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import "./slider.scss";

export const CardSlider = ({ children }) => {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		fade: true,
	};

	return (
		<Slider {...settings} className="slider-wrapper">
			{children}
		</Slider>
	);
};
