import React from "react";
import "./tag.two.scss";
import Image from "next/image";

const TagTwo = () => {
	return (
		<div className="tag-two">
			<div className="tag-two-container">
				<div className="image-container">
					<div className="tag-two-backdrop">
						<h6>01</h6>
						<h1> Facilis illum</h1>
					</div>
					<Image
						alt=" marketing image"
						src="https://i.postimg.cc/65YRcCdw/service.jpg"
						fill={true}
						className="image"
					/>
				</div>
				<div className="text-container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aut nisi ex odio consequuntur? Facilis illum, eveniet
						cupiditate sint cum pariatur deleniti itaque totam
					</p>
				</div>
			</div>
			<div className="tag-two-container">
				<div className="image-container">
					<div className="tag-two-backdrop">
						<h6>02</h6>
						<h1> Facilis illum</h1>
					</div>
					<Image
						alt=" marketing image"
						src="https://i.postimg.cc/YqfL9YXY/escrow.jpg"
						fill={true}
						className="image"
					/>
				</div>
				<div className="text-container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aut nisi ex odio consequuntur? Facilis illum, eveniet
						cupiditate sint cum pariatur deleniti itaque totam
						doloribus sunt est, illo dolorem, omnis tempore. Aut
					</p>
				</div>
			</div>
			<div className="tag-two-container">
				<div className="image-container">
					<div className="tag-two-backdrop">
						<h6>03</h6>
						<h1> Facilis illum</h1>
					</div>
					<Image
						alt=" marketing image"
						src="https://i.postimg.cc/X7TXqX1B/500-Motivational-Quotes-That-Will-Drive-You-To-Achieve-Anything.jpg"
						fill={true}
						className="image"
					/>
				</div>
				<div className="text-container">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Aut nisi ex odio consequuntur? Facilis illum, eveniet
						cupiditate sint cum pariatur deleniti itaque totam
					</p>
				</div>
			</div>
		</div>
	);
};

export default TagTwo;
