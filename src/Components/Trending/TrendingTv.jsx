import React, { useContext, useEffect, useRef, useState } from "react";
import "./Trending.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function TrendingTv() {
	const navigate = useNavigate();
	const { trendingTvShows, fetchTrendingTvShows } = useContext(movieContext);
	const bannerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		fetchTrendingTvShows();
		//eslint-disable-next-line
	}, []);

	// Detect scroll & update dot
	const handleScroll = () => {
		const container = bannerRef.current;
		const scrollLeft = container.scrollLeft;
		const width = container.offsetWidth;

		const index = Math.round(scrollLeft / width);

		setActiveIndex(index);
	};

	return (
		<>
			<section
				className="banner-wrapper"
				ref={bannerRef}
				onScroll={handleScroll}
			>
				{trendingTvShows.map((tv) => (
					<div
						className="banner-card"
						key={tv.id}
						onClick={() => navigate(`/tv/${tv.id}`)}
					>
						<div className="banner-image">
							<img
								src={
									tv.backdrop_path
										? `https://image.tmdb.org/t/p/original${tv.backdrop_path}`
										: `https://image.tmdb.org/t/p/original${tv.poster_path}`
								}
								alt={tv.title}
								loading="lazy"
							/>
							<span className="rating-badge">
								⭐ {tv.vote_average.toFixed(1)}
							</span>
							<div className="banner-overlay">
								<h2 className="banner-title">{tv.name}</h2>
							</div>
						</div>
					</div>
				))}
			</section>

			{/* DOTS */}
			<div className="banner-dots">
				{trendingTvShows.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === activeIndex ? "active" : ""}`}
					></span>
				))}
			</div>
		</>
	);
}

export default TrendingTv;
