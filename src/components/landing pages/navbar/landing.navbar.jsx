"use client";
import React, { useEffect, useState } from "react";
import "./landing.navbar.scss";
import Image from "next/image";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { SlMenu } from "react-icons/sl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { footerLinks } from "../footer/footer.links";

const LandingNavbar = () => {
	const [nav, setNav] = useState();

	useEffect(() => {
		function changebg() {
			if (typeof window !== "undefined" && window.scrollY >= 410) {
				setNav(true);
			} else {
				setNav(false);
			}
		}

		if (typeof window !== "undefined") {
			window.addEventListener("scroll", changebg);
			return () => {
				window.removeEventListener("scroll", changebg);
			};
		}
	}, []);

	const [hidden, setHidden] = useState(false);
	const { scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();

		if (latest > previous && latest > 150) {
			setHidden(true);
		} else {
			setHidden(false);
		}
	});

	//side bar toogle
	const [sideBar, setSideBar] = useState(false);

	const handleSidebarToggle = () => {
		setSideBar(!sideBar);
	};

	useEffect(() => {
		document.body.style.overflow = sideBar ? "hidden" : "auto";
	}, [sideBar]);

	const pathname = usePathname();
	const pathParts = pathname.split("/");
	const firstPathname = pathParts[1];

	if (firstPathname !== "account") {
		return (
			<motion.nav
				className="landing-nav"
				style={{
					position: nav ? "fixed" : "absolute",
					//	backgroundColor: nav || "transparent",
				}}
				variants={{
					visible: { y: 0 },
					hidden: { y: "-100%" },
				}}
				animate={hidden ? "hidden" : "visible"}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<div className="left">
					<div
						className="side-bar-toggle"
						onClick={handleSidebarToggle}
					>
						<SlMenu className="open-icon" />
					</div>
					<Link href="/">
						<div className="logo">
							<Image
								alt=" logo"
								src="https://i.postimg.cc/kX4DsT09/logo-original.png"
								fill={true}
								className="logo-img"
							/>
						</div>{" "}
					</Link>
				</div>
				<div className="links">
					<ul>
						<li>Features</li>

						<div className="link-container">
							<li>Use case</li>
							<KeyboardArrowDownIcon className="nav-link-icon" />
							<div className="drop-down-container">
								<ul className="list-ul">
									{footerLinks[1].list.map((item, index) => (
										<li key={index}>
											<Link href={item.url}>
												<h6>{item.name}</h6>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>

						<div className="link-container">
							<li>Resources</li>
							<KeyboardArrowDownIcon className="nav-link-icon" />
							<div className="drop-down-container">
								<ul className="list-ul">
									{footerLinks[2].list.map((item, index) => (
										<li key={index}>
											<Link href={item.url}>
												<h6>{item.name}</h6>
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<Link href="/pricing">
							<li>Pricing</li>
						</Link>
						<li>FAQ</li>
					</ul>
				</div>
				<div className="login-btns">
					<Link href="/account/dashboard">
						<Button
							size="small"
							className="login-btn "
							disableElevation
						>
							<p>log in</p>
						</Button>
					</Link>
					<Link href="/account/dashboard">
						<Button
							variant="contained"
							size="small"
							className="sign-btn "
							disableElevation
						>
							<p>sign up</p>
						</Button>
					</Link>
				</div>

				{/*--------------------------- side bar-------------------- */}

				{sideBar && (
					<div className="backdrop" onClick={handleSidebarToggle} />
				)}
				<div
					className="side-bar"
					style={{
						transform: !sideBar
							? "translateX(-100%)"
							: "translateX(0)",
					}}
				>
					<div className="side-links">
						<div className="close">
							<IconButton
								aria-label="close side bar"
								size="small"
								onClick={handleSidebarToggle}
							>
								<KeyboardBackspaceIcon className="close-icon" />
							</IconButton>
						</div>
						<ul>
							<li onClick={handleSidebarToggle}>Features</li>
							<li onClick={handleSidebarToggle}>Use case</li>
							<li onClick={handleSidebarToggle}>Pricing</li>
							<li onClick={handleSidebarToggle}>Blog</li>
						</ul>
					</div>
				</div>
			</motion.nav>
		);
	} else {
		return null;
	}
};

export default LandingNavbar;
