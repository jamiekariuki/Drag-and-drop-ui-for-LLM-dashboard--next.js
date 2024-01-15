"use client";
import React, { useRef } from "react";
import "./social.tag.scss";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const SocialTag = () => {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});
	const spring = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 40,
	});

	const y = useTransform(spring, [0, 1], ["-33%", "-18%"]); //1
	const y1 = useTransform(spring, [0, 1], ["16%", "35%"]); //2

	const y2 = useTransform(spring, [0, 1], ["-20%", "3%"]); //3
	const y3 = useTransform(spring, [0, 1], ["30%", "0%"]); //4

	const y4 = useTransform(spring, [0, 1], ["-13%", "25%"]); //5 inc
	const y5 = useTransform(spring, [0, 1], ["-2%", "-34%"]); //6 dec

	const y6 = useTransform(spring, [0, 1], ["5%", "28%"]); //7
	const y7 = useTransform(spring, [0, 1], ["-20%", "-35%"]); //8

	const y8 = useTransform(spring, [0, 1], ["-31%", "-19%"]); //9
	const y9 = useTransform(spring, [0, 1], ["18%", "32%"]); //10

	return (
		<div className="social-tag">
			<h1>Dolor sit amet consectetur adipisicing</h1>

			<div className="text">
				<p>
					quaerat quia totam corrupti nemo eius, repellendus vitae
					velit necessitatibus dolorum consequatur quas, saepe tenetur
					consectetur vero magni non suscipit autem.
				</p>
			</div>

			<button>
				<p>Start with a template</p>
			</button>

			<div className="slider-container" ref={ref}>
				<div className="backdrop"></div>
				<div className="backdrop2"></div>
				<div className="backdrop3"></div>

				<motion.div style={{ y }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y1 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y2 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y3 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y4 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y5 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y6 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y7 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y8 }}>
					<TagIcons />
				</motion.div>
				<motion.div style={{ y: y9 }}>
					<TagIcons />
				</motion.div>
			</div>
		</div>
	);
};

export default SocialTag;

const list = [
	"https://i.postimg.cc/yYhSxxzZ/pngwing-com-1.png",
	"https://i.postimg.cc/j5XqffCm/pngwing-com-2.png",
	"https://i.postimg.cc/PJkmcXNj/pngwing-com-4.png",

	"https://i.postimg.cc/VkC9VgtP/spreadsheet-com.png",
	"https://i.postimg.cc/ZKX02cbZ/pngwing-com-7.png",

	"https://i.postimg.cc/KvYQYZhQ/pngwing-com-3.png",
	"https://i.postimg.cc/XYF9h9Lt/pngwing-com-1-fb.png",
	"https://i.postimg.cc/ht8rJjp7/icons8-google-calendar-480.png",
	"https://i.postimg.cc/B6fT33JS/pngwing-com-6.png",
	"https://i.postimg.cc/ZY9QrCF9/pngwing-com.png",
];

const randomSort = () => Math.random() - 0.5;
const randomizedArray = list.sort(randomSort);

const TagIcons = () => {
	return (
		<div className="tag-icons">
			{randomizedArray.map((item, index) => (
				<div className="icon-container" key={index}>
					<Image
						alt=" app icons"
						src={item}
						fill={true}
						className="icons"
						quality={100}
					/>
				</div>
			))}
		</div>
	);
};
