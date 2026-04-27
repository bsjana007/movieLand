import React, { useState } from "react";
import "./Home.css";
import Popular from "../Popular/Popular";
import TopRated from "../Toprated/TopRated";
import Upcoming from "../Upcoming/Upcoming";
import Trending from "../Trending/Trending";
import TrendingTv from "../Trending/TrendingTvHome";
import PopularTvHome from "../Popular/PopularTvHome";
import { useNavigate } from "react-router-dom";
// import movieContext from "../../context/movieContext";

function Home() {
	const navigate = useNavigate();
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	// const [topRatedOpen, settopRatedOpen] = useState(false);
	// const [upcomingOpen, setUpcomingOpen] = useState(false);
	const [trendingTvgOpen, setTrendingTvOpen] = useState(true);
	const [popularTvgOpen, setPopularTvgOpen] = useState(true);
	const popularToggle = () => {
		setOpenPopular((prev) => !prev);
	};
	// const topRatedToggle = () => {
	// 	settopRatedOpen((prev) => !prev);
	// };

	// const upcomingToggle = () => {
	// 	setUpcomingOpen((prev) => !prev);
	// };

	const trendingOpenToggle = () => {
		setTrendingOpen((prev) => !prev);
	};
	const trendingTvOpenToggle = () => {
		setTrendingTvOpen((prev) => !prev);
	};
	const popularTvOpenToggle = () => {
		setPopularTvgOpen((prev) => !prev);
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
					<Trending />
				</div>
				<div className="home-hr">
					<hr />
				</div>
				<button
					className={`toggle-btn ${trendingTvgOpen ? "open" : ""}`}
					onClick={trendingTvOpenToggle}
				>
					<i
						className={`arrow fa-solid fa-angle-up ${
							trendingTvgOpen ? "open" : ""
						}`}
					></i>
					<span>Trending TV Shows</span>
				</button>
				<div className={`dropdown ${trendingTvgOpen ? "open" : ""}`}>
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
					<span>Popular Movies</span>
				</button>
				<div className={`dropdown ${openPopular ? "open" : ""}`}>
					<Popular />
				</div>
				<div className="home-hr">
					<hr />
				</div>
				<button
					className={`toggle-btn ${popularTvgOpen ? "open" : ""}`}
					onClick={popularTvOpenToggle}
				>
					<i
						className={`arrow fa-solid fa-angle-up ${
							popularTvgOpen ? "open" : ""
						}`}
					></i>
					<span>Popular Tv Shows</span>
				</button>
				<div className={`dropdown ${popularTvgOpen ? "open" : ""}`}>
					<PopularTvHome />
				</div>
				<div className="home-hr">
					<hr />
				</div>
				{/* <button
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
					<TopRated />
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
					<Upcoming />
				</div> */}
				<div className="explore-wrapper">
					<div
						className="explore-options"
						onClick={() => navigate("/globalmovies")}
					>
						Expole More Movies
					</div>
					<div
						className="explore-options"
						onClick={() => navigate("/globaltv")}
					>
						Expole More TV Shows
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
