import React, { useState } from "react";
import "./MoviesGlobal.css";
import PopularTv from "../Popular/PopularTv";
import TopRatedTv from "../Toprated/TopRatedTv";
import AiringTodayTv from "../Upcoming/AiringTodayTv";
import TrendingTv from "../Trending/TrendingTv";
// import movieContext from "../../context/movieContext";

function TvGlobal() {
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
			<div className="home-wrap">
				<div className="home-title">
					<h1 className="title">MovieLand</h1>
				</div>
				<button
					className={`toggle-btn ${trendingOpen ? "open" : ""}`}
					onClick={trendingOpenToggle}
				>
					<i
						className={`arrow fa-solid fa-angle-up ${
							trendingOpen ? "open" : ""
						}`}
					></i>
					<span>🔥 Trending Movies of the Week</span>
				</button>
				<div className={`dropdown ${trendingOpen ? "open" : ""}`}>
					<TrendingTv />
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
					<PopularTv />
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
					<TopRatedTv />
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
					<span>Airing Today</span>
				</button>
				<div className={`dropdown ${upcomingOpen ? "open" : ""}`}>
					<AiringTodayTv />
				</div>
			</div>
		</>
	);
}

export default TvGlobal;
