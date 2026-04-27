import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		//moves to top at refresh
		if ("scrollRestoration" in window.history) {
			window.history.scrollRestoration = "manual";
		}

		//moves to top when pathname changes
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "instant", // or "smooth"
		});
	}, [pathname]);
	return null;
}

export default ScrollToTop;
