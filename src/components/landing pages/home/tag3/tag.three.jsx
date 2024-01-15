"use client";

import React, { useRef } from "react";
import "./tag.three.scss";
import Image from "next/image";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const TagThree = () => {
	const list = [
		"laboriosam nostrum porro harum dolorem odio recusanda",
		"laboriosam nostrum porro harum dolorem odio recusanda",
		"laboriosam nostrum porro harum dolorem odio recusanda",
	];

	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "start start"],
	});
	const spring = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 50,
	});

	const x = useTransform(spring, [0, 1], ["-70%", "-10%"]);

	return (
		<div className="tag-three" ref={ref}>
			<div className="tag-3-left">
				<motion.div className="tag-3-image-container" style={{ x }}>
					<Image
						alt=" dashboard image"
						src="https://i.postimg.cc/43qGQgZy/screencapture-llmapp-dashboard-vercel-app-dashboard-2024-01-05-13-26-13.png"
						fill={true}
						className="tag-3-image"
					/>
				</motion.div>
			</div>
			<div className="tag-3-right">
				<div className="tag-3-text">
					<h1>
						Lorem ipsum dolor sit <br />
						<span>
							qui, rerum eligendi dolore reprehenderit
						</span>{" "}
					</h1>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Eos cumque ipsum voluptate dolorem perferendis? A
						laboriosam nostrum porro harum dolorem odio recusandae,
						qui, rerum eligendi dolore reprehenderit, voluptatum cum
						odit? Eos cumque ipsum voluptate dolorem perferendis? A
					</p>

					<ul>
						{list.map((item, index) => (
							<div className="li-container" key={index}>
								<ArrowCircleRightIcon className="li-icon" />
								<li>{item}</li>
							</div>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TagThree;
