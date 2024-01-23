import { Inputs2 } from "@/components/styled components/inputs/inputs";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
	return (
		<div className="auth">
			<div className="auth-title">
				<h3>Creat an account</h3>
				<h1>Sign up</h1>
			</div>

			<div className="auth-form-container">
				<div className="auth-form">
					<h6>Email</h6>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"text"}
						label={"Email"}
						id={"auth-email"}
						value={""}
						softBg={true}
						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>
				</div>
				<div className="auth-form">
					<h6>Password</h6>
					<Inputs2
						/* error={
									formData.title.replace(/\s/g, "").length >=
									maxTitleLength
								} */
						type={"password"}
						label={"Password"}
						id={"auth-pass"}
						value={""}
						softBg={true}
						/* changeValue={(e) => {
									handleChange("title", e);
								}} */
					/>

					{/* <p className="forgot-pass">Forgot your password?</p> */}
				</div>
			</div>

			<div className="or-container">
				<p>OR</p>
			</div>

			<button className="google-btn">
				<FcGoogle className="google-icon" />
				<p> Sign up with Google</p>
			</button>

			<div className="redirect-container">
				<p>
					Already have an account?{" "}
					<Link href={"/login"}>
						<span> Login</span>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default Signup;
