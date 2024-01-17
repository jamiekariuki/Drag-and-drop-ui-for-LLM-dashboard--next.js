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
					backgroundColor: nav || "transparent",
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

					<div className="logo">
						<Image
							alt=" logo"
							src="https://i.postimg.cc/kX4DsT09/logo-original.png"
							fill={true}
							className="logo-img"
						/>
					</div>
				</div>
				<div className="links">
					<ul>
						<li>Features</li>
						<li>Use case</li>
						<li>Resources</li>
						<Link href="/pricing">
							<li>Pricing</li>
						</Link>
						<li>FAQ</li>
						<li>Blog</li>
					</ul>
				</div>
				<div className="login-btns">
					<Button
						size="small"
						className="login-btn "
						disableElevation
					>
						<p>log in</p>
					</Button>

					<Button
						variant="contained"
						size="small"
						className="sign-btn "
						disableElevation
					>
						<p>sign up</p>
					</Button>
				</div>
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
