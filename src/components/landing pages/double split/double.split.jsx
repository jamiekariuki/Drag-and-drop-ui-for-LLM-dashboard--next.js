import SplitLayout from "@/components/styled components/containers/split layout/split.layout";
import Image from "next/image";
import React from "react";
import "./double.split.scss";

const DoubleSPlit = ({ image, content, flexReverse, contain }) => {
	return (
		<div className="double-split">
			<SplitLayout flexReverse={flexReverse}>
				<div
					className="split-left"
					style={{ justifyContent: flexReverse && "flex-start" }}
				>
					<div className="double-split-image-container">
						<Image
							style={{ objectFit: contain && "contain" }}
							alt="product image"
							src={image}
							fill={true}
							className="double-split-image"
							quality={100}
						/>
					</div>
				</div>
				<div
					className="split-right"
					style={{ justifyContent: flexReverse && "flex-end" }}
				>
					<div className="double-split-text-container">
						{content}

						{/* <h1>
							Lorem, ipsum dolor consectetur{" "}
							<span> adipisicing elit sit amet .</span>
						</h1>
						<div>
							<button>
								<p>click me</p>
							</button>
						</div> */}
					</div>
				</div>
			</SplitLayout>
		</div>
	);
};

export default DoubleSPlit;
