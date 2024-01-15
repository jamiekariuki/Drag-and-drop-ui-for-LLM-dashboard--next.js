"use client";
import React, { useRef } from "react";
import "./hero.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end end"],
	});

	const scale = useTransform(scrollYProgress, [0, 1], ["1", "0.3"]);
	const scale2 = useTransform(scrollYProgress, [0.3, 1], ["0.8", "1"]);

	return (
		<div className="hero" ref={ref}>
			<motion.div className="header" style={{ scale }}>
				<h1>
					<span> AI-Powered </span> <br /> Workflow Automation
				</h1>

				<div className="text-container">
					<p>
						Elevate productivity effortlessly with our platform.
						Plug AI into your favorite apps, automate tasks easily
						using a simple drag-and-drop interface no coding needed.
					</p>
				</div>
				<div className="btn-info">
					<button>
						<p>Try For Free</p>
					</button>

					<h6>No credit card required</h6>
				</div>
			</motion.div>

			<motion.div className="product-container" style={{ scale: scale2 }}>
				<div className="image-container">
					<Image
						alt="our product image: a drag and drop interface"
						src="https://i.postimg.cc/7ZrTP7XZ/sqq.png"
						fill={true}
						className="product"
						quality={100}
					/>
				</div>
			</motion.div>
		</div>
	);
};

export default Hero;
