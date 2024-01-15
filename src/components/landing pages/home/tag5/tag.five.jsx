import React from "react";
import "./tag.five.scss";
import Image from "next/image";

const TagFive = () => {
	return (
		<div className="tag-5">
			<div className="tag-5-wrapper">
				<div className="tag-5-container">
					<div className="tag-5-backdrop">
						<div className="tag-5-text">
							<h1>Lorem ipsum dolor sit,</h1>
							<p>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Harum blanditiis accusantium
								nisi odio minus error tempore voluptates eos
								adipisci corporis vitae cumque fuga omnis quam
								ut aperiam, sit autem eum.
							</p>

							<button>
								<p>click me button</p>
							</button>
						</div>
					</div>
					<Image
						alt=" dashboard image"
						src="https://i.postimg.cc/9MS86zt7/edit3d.jpg"
						fill={true}
						className="tag-5-image"
					/>
				</div>
				<div className="tag-5-title">
					<h1>
						<span> Assumenda animi,</span> <br /> aliquid, magnam
						modi!
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Fuga totam nesciunt, voluptates molestiae vero
						nobis dolor porro harum optio facere molestias
						voluptatum?
					</p>
				</div>
			</div>
		</div>
	);
};

export default TagFive;
