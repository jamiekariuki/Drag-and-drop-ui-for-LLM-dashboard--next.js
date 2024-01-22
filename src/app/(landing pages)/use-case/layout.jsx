import React from "react";
import "./use.case.scss";
import Cta from "@/components/landing pages/CTA/cta";
import LandingPageContainer from "@/components/styled components/containers/landing page container/landing.page.container";

const UseCaseLayout = ({ children }) => {
	return (
		<LandingPageContainer>
			<div className="use-case">
				{children}
				<Cta />
			</div>
		</LandingPageContainer>
	);
};

export default UseCaseLayout;
