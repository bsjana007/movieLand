import React, { useState } from "react";
import "./HomeIndianV2.css";
import PopularIndian from "../Popular/PopularIndian";
import TopRatedIndian from "../Toprated/TopRatedIndian";
import UpcomingIndian from "../Upcoming/UpcomingIndian";
import TrendingIndian from "../Trending/TrendingIndian";

function HomeIndianV2() {
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	const [topRatedOpen, settopRatedOpen] = useState(false);
	const [upcomingOpen, setUpcomingOpen] = useState(false);

	const trendingOpenToggle = () => setTrendingOpen((prev) => !prev);
	const popularOpenToggle = () => setOpenPopular((prev) => !prev);
	const topRatedOpenToggle = () => settopRatedOpen((prev) => !prev);
	const upcomingOpenToggle = () => setUpcomingOpen((prev) => !prev);

	return (
		<div className="indian-v2-container">
			{/* Hero Section */}
			<div className="indian-hero-section">
				<div className="indian-hero-overlay"></div>
				<div className="indian-hero-content">
					<h1 className="indian-hero-title">
						Indian <span className="highlight">Cinema</span>
					</h1>
					<p className="indian-hero-subtitle">
						Explore the magic of Bollywood, Tollywood, Kollywood, and beyond. Experience the vibrant storytelling of India.
					</p>
				</div>
			</div>

			{/* Content Sections */}
			<div className="indian-content-sections">
				{/* Trending Movies */}
				<div className="indian-section-container">
					<div
						className={`indian-section-header ${trendingOpen ? "active" : ""}`}
						onClick={trendingOpenToggle}
					>
						<div className="indian-section-title-wrap">
							<span className="indian-section-icon">🔥</span>
							<h2>Trending Movies in India</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down indian-toggle-icon ${trendingOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`indian-section-content ${trendingOpen ? "expanded" : ""}`}
					>
						<TrendingIndian />
					</div>
				</div>

				{/* Popular Movies */}
				<div className="indian-section-container">
					<div
						className={`indian-section-header ${openPopular ? "active" : ""}`}
						onClick={popularOpenToggle}
					>
						<div className="indian-section-title-wrap">
							<span className="indian-section-icon">⭐</span>
							<h2>Popular Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down indian-toggle-icon ${openPopular ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`indian-section-content ${openPopular ? "expanded" : ""}`}
					>
						<PopularIndian />
					</div>
				</div>

				{/* Top Rated Movies */}
				<div className="indian-section-container">
					<div
						className={`indian-section-header ${topRatedOpen ? "active" : ""}`}
						onClick={topRatedOpenToggle}
					>
						<div className="indian-section-title-wrap">
							<span className="indian-section-icon">🏆</span>
							<h2>Top Rated Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down indian-toggle-icon ${topRatedOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`indian-section-content ${topRatedOpen ? "expanded" : ""}`}
					>
						<TopRatedIndian />
					</div>
				</div>

				{/* Upcoming Movies */}
				<div className="indian-section-container">
					<div
						className={`indian-section-header ${upcomingOpen ? "active" : ""}`}
						onClick={upcomingOpenToggle}
					>
						<div className="indian-section-title-wrap">
							<span className="indian-section-icon">📅</span>
							<h2>Upcoming Movies</h2>
						</div>
						<i
							className={`fa-solid fa-chevron-down indian-toggle-icon ${upcomingOpen ? "rotated" : ""}`}
						></i>
					</div>
					<div
						className={`indian-section-content ${upcomingOpen ? "expanded" : ""}`}
					>
						<UpcomingIndian />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeIndianV2;
