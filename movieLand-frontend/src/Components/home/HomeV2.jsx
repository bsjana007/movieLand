import React, { useState } from "react";
import "./HomeV2.css";
import Popular from "../Popular/Popular";
// import TopRated from "../Toprated/TopRated";
// import Upcoming from "../Upcoming/Upcoming";
import Trending from "../Trending/Trending";
import TrendingTv from "../Trending/TrendingTvHome";
import PopularTvHome from "../Popular/PopularTvHome";
import { useNavigate } from "react-router-dom";

function HomeV2() {
	const navigate = useNavigate();
	const [trendingOpen, setTrendingOpen] = useState(true);
	const [openPopular, setOpenPopular] = useState(true);
	const [trendingTvgOpen, setTrendingTvOpen] = useState(true);
	const [popularTvgOpen, setPopularTvgOpen] = useState(true);

	const popularToggle = () => setOpenPopular((prev) => !prev);
	const trendingOpenToggle = () => setTrendingOpen((prev) => !prev);
	const trendingTvOpenToggle = () => setTrendingTvOpen((prev) => !prev);
	const popularTvOpenToggle = () => setPopularTvgOpen((prev) => !prev);

	return (
		<div className="home-v2-wrap">
			{/* Hero Section */}
			<div className="hero-section">
				<div className="hero-overlay"></div>
				<div className="hero-content">
					<h1 className="hero-title">Welcome to <span className="highlight">MovieLand</span></h1>
					<p className="hero-subtitle">Discover your next favorite story. Explore thousands of movies and TV shows from around the globe in a premium cinematic experience.</p>
					<div className="hero-actions">
						<button className="hero-btn primary-btn" onClick={() => navigate("/globalmovies")}>
							Explore Movies
						</button>
						<button className="hero-btn secondary-btn" onClick={() => navigate("/globaltv")}>
							Explore TV Shows
						</button>
					</div>
				</div>
			</div>

			{/* Content Sections */}
			<div className="content-sections">
				
				{/* Trending Movies */}
				<div className="section-container">
					<div className={`section-header ${trendingOpen ? "active" : ""}`} onClick={trendingOpenToggle}>
						<div className="section-title-wrap">
							<span className="section-icon">🔥</span>
							<h2>Trending Movies of the Week</h2>
						</div>
						<i className={`fa-solid fa-chevron-down toggle-icon ${trendingOpen ? "rotated" : ""}`}></i>
					</div>
					<div className={`section-content ${trendingOpen ? "expanded" : ""}`}>
						<Trending />
					</div>
				</div>

				{/* Trending TV */}
				<div className="section-container">
					<div className={`section-header ${trendingTvgOpen ? "active" : ""}`} onClick={trendingTvOpenToggle}>
						<div className="section-title-wrap">
							<span className="section-icon">📺</span>
							<h2>Trending TV Shows</h2>
						</div>
						<i className={`fa-solid fa-chevron-down toggle-icon ${trendingTvgOpen ? "rotated" : ""}`}></i>
					</div>
					<div className={`section-content ${trendingTvgOpen ? "expanded" : ""}`}>
						<TrendingTv />
					</div>
				</div>

				{/* Popular Movies */}
				<div className="section-container">
					<div className={`section-header ${openPopular ? "active" : ""}`} onClick={popularToggle}>
						<div className="section-title-wrap">
							<span className="section-icon">⭐</span>
							<h2>Popular Movies</h2>
						</div>
						<i className={`fa-solid fa-chevron-down toggle-icon ${openPopular ? "rotated" : ""}`}></i>
					</div>
					<div className={`section-content ${openPopular ? "expanded" : ""}`}>
						<Popular />
					</div>
				</div>

				{/* Popular TV Shows */}
				<div className="section-container">
					<div className={`section-header ${popularTvgOpen ? "active" : ""}`} onClick={popularTvOpenToggle}>
						<div className="section-title-wrap">
							<span className="section-icon">🎬</span>
							<h2>Popular TV Shows</h2>
						</div>
						<i className={`fa-solid fa-chevron-down toggle-icon ${popularTvgOpen ? "rotated" : ""}`}></i>
					</div>
					<div className={`section-content ${popularTvgOpen ? "expanded" : ""}`}>
						<PopularTvHome />
					</div>
				</div>

			</div>
		</div>
	);
}

export default HomeV2;
