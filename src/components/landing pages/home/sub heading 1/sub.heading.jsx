"use client";
import React, { useRef } from "react";
import "./sub.heading.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SubHeading = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const spring = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
	});

	const x = useTransform(spring, [0, 1], ["-50vw", "10vw"]);
	const x1 = useTransform(spring, [0, 1], ["50vw", "-10vw"]);

	return (
		<div className="sub-heading" ref={ref}>
			<motion.h1 style={{ x }}>Streamline Your Processes</motion.h1>
			<motion.h1 style={{ x: x1 }} className="h1-1">
				Code-Free Automation
			</motion.h1>
		</div>
	);
};

export default SubHeading;
