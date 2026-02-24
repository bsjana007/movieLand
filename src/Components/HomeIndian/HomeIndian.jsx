import React, { useState } from "react";
import "./HomeIndian.css";
import PopularIndian from "../Popular/PopularIndian";
import TopRatedIndian from "../Toprated/TopRatedIndian";
import UpcomingIndian from "../Upcoming/UpcomingIndian";
import TrendingIndian from "../Trending/TrendingIndian";
// import LanguageBar from "../LanguageBar/LanguageBar";

function HomeIndian() {
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	const [topRatedOpen, settopRatedOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);
	const popularToggle = () => {
		setOpenPopular((prev) => !prev);
	};
	const topRatedToggle = () => {
		settopRatedOpen((prev) => !prev);
	};

	const upcomingToggle = () => {
		setUpcomingOpen((prev) => !prev);
	};

	const trendingOpenToggle = () => {
		setTrendingOpen((prev) => !prev);
	};

	return (
		<>
			<button
				className={`toggle-btn ${trendingOpen ? "open" : ""}`}
				onClick={trendingOpenToggle}
			>
				<i
					className={`arrow fa-solid fa-angle-up ${
						trendingOpen ? "open" : ""
					}`}
				></i>
				<span>🔥 Trending Movies In India</span>
			</button>
			<div className={`dropdown ${trendingOpen ? "open" : ""}`}>
				<TrendingIndian />
			</div>
			<div className="home-hr">
				<hr />
			</div>
			<button
				className={`toggle-btn ${openPopular ? "open" : ""}`}
				onClick={popularToggle}
			>
				<i
					className={`arrow fa-solid fa-angle-up ${
						openPopular ? "open" : ""
					}`}
				></i>
				<span>Popular</span>
			</button>
			<div className={`dropdown ${openPopular ? "open" : ""}`}>
				<PopularIndian />
			</div>
			<div className="home-hr">
				<hr />
			</div>
			<button
				className={`toggle-btn ${topRatedOpen ? "open" : ""}`}
				onClick={topRatedToggle}
			>
				<i
					className={`arrow fa-solid fa-angle-up ${
						topRatedOpen ? "open" : ""
					}`}
				></i>
				<span>Top Rated</span>
			</button>
			<div className={`dropdown ${topRatedOpen ? "open" : ""}`}>
				<TopRatedIndian />
			</div>
			<div className="home-hr">
				<hr />
			</div>
			<button
				className={`toggle-btn ${upcomingOpen ? "open" : ""}`}
				onClick={upcomingToggle}
			>
				<i
					className={`arrow fa-solid fa-angle-up ${
						upcomingOpen ? "open" : ""
					}`}
				></i>
				<span>Upcoming</span>
			</button>
			<div className={`dropdown ${upcomingOpen ? "open" : ""}`}>
				<UpcomingIndian />
			</div>
		</>
	);
}

export default HomeIndian;
