"use client";
import React, { useEffect, useState } from "react";
import "./footer.scss";
import { ImFacebook2 } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { FooterAccordion } from "./footer accordion/footer.accordion";
import { usePathname } from "next/navigation";
import { footerLinks } from "./footer.links";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		updateYear();
		return () => {
			document.removeEventListener("scroll", updateYear);
		};
	}, []);

	const updateYear = () => {
		const newYear = new Date().getFullYear();
		setCurrentYear(newYear);
	};

	const pathname = usePathname();
	const pathParts = pathname.split("/");
	const firstPathname = pathParts[1];

	if (
		!(
			firstPathname === "account" ||
			firstPathname === "login" ||
			firstPathname === "sign-up"
		)
	) {
		return (
			<div className="footer">
				<div className="footer-links">
					<div className="footer-app">
						<div className="app-wrapper">
							<div className="info-logo">
								<div className="info-logo-wrapper">
									<Image
										src="https://i.postimg.cc/kX4DsT09/logo-original.png"
										fill={true}
										alt="playstore logo"
										className="store"
									/>
								</div>

								<h6>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Tempora, itaque voluptates
									ipsam, ipsum dicta totam recusandae
									veritatis dolorem possimus debitis
									aspernatur. Molestiae, nemo consequuntur
									nihil reprehenderit officiis totam enim
									alias?
								</h6>
							</div>

							<div className="social-links-wrapper">
								<h6>Social</h6>
								<div className="social-links">
									<ImFacebook2 className="social-icon" />
									<GrTwitter className="social-icon" />
									<FaInstagram className="social-icon" />
									<BsYoutube className="social-icon" />
									<AiFillLinkedin className="social-icon" />
									<FaTiktok className="social-icon" />
								</div>
							</div>
						</div>
					</div>

					{footerLinks.map((item, index) => (
						<div
							key={index}
							className={`list-wrapper-${item.title} list-wrapper`}
						>
							<h5>{item.title}</h5>
							<ul>
								{item.list.map((subItem, subIndex) => (
									<li key={subIndex}>
										<Link href={subItem.url}>
											<h6>{subItem.name}</h6>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="footer-mobile">
						<FooterAccordion footerData={footerLinks} />
					</div>
				</div>

				<div className="copyright-container">
					<p>&copy; {currentYear} nexusfront. All rights reserved.</p>
				</div>
			</div>
		);
	}
};

export default Footer;
