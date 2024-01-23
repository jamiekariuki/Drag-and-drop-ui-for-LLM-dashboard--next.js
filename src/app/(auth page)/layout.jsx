import React from "react";
import "./auth.page.scss";
import AuthSlider from "@/components/auth pages/auth slider/auth.slider";
import Back from "@/components/styled components/back/back";

const AuthLayout = ({ children }) => {
	return (
		<div className="auth-page">
			<div className="auth-left">
				<AuthSlider />
			</div>
			<div className="auth-right">
				<div className="redirect-back">
					<Back home={true} />
				</div>

				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
