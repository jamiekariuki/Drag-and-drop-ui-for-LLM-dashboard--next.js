import React from "react";
import "./page.scss";
//import Testimonies from "@/components/landing pages/home/testimonies/testimonies";
import TagFive from "@/components/landing pages/home/tag5/tag.five";
import Hero from "@/components/landing pages/home/hero/hero";
import SubHeading from "@/components/landing pages/home/sub heading 1/sub.heading";
import Tag from "@/components/landing pages/home/tag1/tag";
import SocialTag from "@/components/landing pages/home/social tag/social.tag";
import TagTwo from "@/components/landing pages/home/tag2/tag.two";
import TagThree from "@/components/landing pages/home/tag3/tag.three";
import TagFour from "../components/landing pages/home/tag4/tag.four";

const PageHome = () => {
	return (
		<div className="home">
			<Hero />
			<SubHeading />
			<Tag />
			<SocialTag />
			<TagTwo />

			<TagThree />
			<TagFour />

			<TagFive />
			{/* <Testimonies /> */}
		</div>
	);
};

export default PageHome;
