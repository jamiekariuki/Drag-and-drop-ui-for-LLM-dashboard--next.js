import Pricing from "@/components/landing pages/pricing/pricing";
import Cta from "@/components/landing pages/CTA/cta";
import LandingPageContainer from "@/components/styled components/containers/landing page container/landing.page.container";
import React from "react";

const PricingPage = () => {
	return (
		<LandingPageContainer>
		 <Pricing /> 
			<Cta />
		</LandingPageContainer>
	);
};

export default PricingPage;
