import React from "react";
//import Testimonies from "@/components/landing pages/home/testimonies/testimonies";
import TagFive from "@/components/landing pages/home/tag5/tag.five";
import Hero from "@/components/landing pages/home/hero/hero";
import SubHeading from "@/components/landing pages/home/sub heading 1/sub.heading";
import Tag from "@/components/landing pages/home/tag1/tag";
import SocialTag from "@/components/landing pages/home/social tag/social.tag";
import TagTwo from "@/components/landing pages/home/tag2/tag.two";
import TagThree from "@/components/landing pages/home/tag3/tag.three";
import TagFour from "../components/landing pages/home/tag4/tag.four";
import Cta from "@/components/landing pages/CTA/cta";
import DoubleSPlit from "@/components/landing pages/double split/double.split";

import LandingPageContainer from "@/components/styled components/containers/landing page container/landing.page.container";

const PageHome = () => {
	return (
		<LandingPageContainer>
			<Hero />
			<SubHeading />
			<DoubleSPlit
				image={
					"https://i.postimg.cc/rwpQzkZ3/medium-shot-people-working-office.jpg"
				}
				content={
					<>
						<h1>
							Lorem, ipsum dolor consectetur{" "}
							<span> adipisicing elit sit amet .</span>
						</h1>
						<div>
							<button>
								<p>click me</p>
							</button>
						</div>
					</>
				}
				flexReverse={true}
			/>
			<Tag />
			<DoubleSPlit
				image={"https://i.postimg.cc/bvnBXVHs/6198268.jpg"}
				content={
					<>
						<h1>
							Lorem, ipsum dolor consectetur{" "}
							<span> adipisicing elit sit amet .</span>
						</h1>
						<div>
							<button>
								<p>click me</p>
							</button>
						</div>
					</>
				}
				contain={true}
			/>
			<SocialTag />
			<TagTwo />
			<TagThree />
			<TagFour />
			<DoubleSPlit
				image={
					"https://i.postimg.cc/vTrb19TY/businessmen-hands-white-table-with-documents-drafts.jpg"
				}
				content={
					<>
						<h1>
							Lorem, ipsum dolor consectetur{" "}
							<span> adipisicing elit sit amet .</span>
						</h1>
						<div>
							<button>
								<p>click me</p>
							</button>
						</div>
					</>
				}
			/>
			<TagFive />
			<Cta />
		</LandingPageContainer>
	);
};

export default PageHome;
