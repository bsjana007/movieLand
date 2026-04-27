import React, { useState } from "react";
import "./MoviesGlobalV2.css";
import Popular from "../Popular/Popular";
import TopRated from "../Toprated/TopRated";
import Upcoming from "../Upcoming/Upcoming";
import Trending from "../Trending/Trending";

function MoviesGlobalV2() {
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	const [topRatedOpen, settopRatedOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);

	const popularToggle = () => setOpenPopular((prev) => !prev);
	const topRatedToggle = () => settopRatedOpen((prev) => !prev);
	const upcomingToggle = () => setUpcomingOpen((prev) => !prev);
	const trendingOpenToggle = () => setTrendingOpen((prev) => !prev);

	return (
		<div className="global-v2-wrap">
			{/* Hero Section */}
			<div className="global-hero-section">
				<div className="global-hero-overlay"></div>
				<div className="global-hero-content">
					<h1 className="global-hero-title">
						Global <span className="highlight">Movies</span>
					</h1>
					<p className="global-hero-subtitle">
						Dive into the world's most talked-about films. From
						blockbuster hits to critically acclaimed masterpieces.
					</p>
				</div>
			</div>

			{/* Content Sections */}
			<div className="global-content-sections">
				{/* Trending Movies */}
				<div className="global-section-container">
					<div
						className={`global-section-header ${trendingOpen ? "active" : ""}`}
						onClick={trendingOpenToggle}
					>
						<div className="global-section-title-wrap">
							<span className="global-section-icon">🔥</span>
							<h2>Trending Movies of the Week</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down global-toggle-icon ${trendingOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`global-section-content ${trendingOpen ? "expanded" : ""}`}
					>
						<Trending />
					</div>
				</div>

				{/* Popular Movies */}
				<div className="global-section-container">
					<div
						className={`global-section-header ${openPopular ? "active" : ""}`}
						onClick={popularToggle}
					>
						<div className="global-section-title-wrap">
							<span className="global-section-icon">⭐</span>
							<h2>Popular Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down global-toggle-icon ${openPopular ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`global-section-content ${openPopular ? "expanded" : ""}`}
					>
						<Popular />
					</div>
				</div>

				{/* Top Rated Movies */}
				<div className="global-section-container">
					<div
						className={`global-section-header ${topRatedOpen ? "active" : ""}`}
						onClick={topRatedToggle}
					>
						<div className="global-section-title-wrap">
							<span className="global-section-icon">🏆</span>
							<h2>Top Rated Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down global-toggle-icon ${topRatedOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`global-section-content ${topRatedOpen ? "expanded" : ""}`}
					>
						<TopRated />
					</div>
				</div>

				{/* Upcoming Movies */}
				<div className="global-section-container">
					<div
						className={`global-section-header ${upcomingOpen ? "active" : ""}`}
						onClick={upcomingToggle}
					>
						<div className="global-section-title-wrap">
							<span className="global-section-icon">📅</span>
							<h2>Upcoming Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down global-toggle-icon ${upcomingOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`global-section-content ${upcomingOpen ? "expanded" : ""}`}
					>
						<Upcoming />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MoviesGlobalV2;
