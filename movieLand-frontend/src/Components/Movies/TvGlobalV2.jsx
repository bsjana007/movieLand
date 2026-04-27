import React, { useState } from "react";
import "./MoviesGlobalV2.css";
import TrendingTv from "../Trending/TrendingTv";
import PopularTv from "../Popular/PopularTv";
import TopRatedTv from "../Toprated/TopRatedTv";
import AiringTodayTv from "../Upcoming/AiringTodayTv";

function TvGlobalV2() {
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	const [topRatedOpen, settopRatedOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);

	const trendingOpenToggle = () => setTrendingOpen((prev) => !prev);
	const popularOpenToggle = () => setOpenPopular((prev) => !prev);
	const topRatedOpenToggle = () => settopRatedOpen((prev) => !prev);
	const upcomingOpenToggle = () => setUpcomingOpen((prev) => !prev);

	return (
		<>
			<div className="global-v2-wrap">
				{/* hero-section */}
				<div className="global-hero-section">
					<div className="global-hero-overlay"></div>
					<div className="global-hero-content">
						<h1 className="global-hero-title">
							Global <span className="highlight">TV Shows</span>
						</h1>
						<p className="global-hero-subtitle">
							Discover the shows everyone is talking about. From gripping
							limited series to unforgettable episodic adventures.
						</p>
					</div>
				</div>

				{/* content-section */}
				<div className="global-content-sections">
					{/* trending-movies  */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${trendingOpen ? "active" : ""}`}
							onClick={trendingOpenToggle}
						>
							<div className="global-section-title-wrap">
								<span className="global-section-icon">🔥</span>
								<h2>Trending TV Shows of the Week</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${trendingOpen ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${trendingOpen ? "expanded" : ""}`}
						>
							<TrendingTv />
						</div>
					</div>

					{/* popular-movies  */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${openPopular ? "active" : ""}`}
							onClick={popularOpenToggle}
						>
							<div className="global-section-title-wrap">
								<span className="global-section-icon">⭐</span>
								<h2>Popular TV Shows</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${openPopular ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${openPopular ? "expanded" : ""}`}
						>
							<PopularTv />
						</div>
					</div>

					{/* top-rated-movies  */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${topRatedOpen ? "active" : ""}`}
							onClick={topRatedOpenToggle}
						>
							<div className="global-section-title-wrap">
								<span className="global-section-icon">🏆</span>
								<h2>Top Rated TV Shows</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${topRatedOpen ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${topRatedOpen ? "expanded" : ""}`}
						>
							<TopRatedTv />
						</div>
					</div>

					{/* airing-today-movies  */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${upcomingOpen ? "active" : ""}`}
							onClick={upcomingOpenToggle}
						>
							<div className="global-section-title-wrap">
								<span className="global-section-icon">📅</span>
								<h2>Airing Today</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${upcomingOpen ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${upcomingOpen ? "expanded" : ""}`}
						>
							<AiringTodayTv />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TvGlobalV2;
