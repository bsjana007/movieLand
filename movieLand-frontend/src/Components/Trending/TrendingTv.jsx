import React, { useContext, useEffect, useRef, useState } from "react";
import "./Trending.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function TrendingTv() {
	const navigate = useNavigate();
	const { trendingTvShows, fetchTrendingTvShows } = useContext(movieContext);
	const bannerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setISHovered] = useState(false);

	useEffect(() => {
		fetchTrendingTvShows();
		//eslint-disable-next-line
	}, []);

	// Auto-scroll functionality
	useEffect(() => {
		if (isHovered) return; //if hovered then pause slider
		const interval = setInterval(() => {
			if (bannerRef.current) {
				const { scrollLeft, scrollWidth, clientWidth } = bannerRef.current;
				const isEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

				if (isEnd) {
					bannerRef.current.scrollTo({ left: 0 });
				} else {
					bannerRef.current.scrollBy({ left: clientWidth });
				}
			}
		}, 4000);

		return () => clearInterval(interval);
	}, [isHovered]);

	// Detect scroll & update dot
	const handleScroll = () => {
		const container = bannerRef.current;
		if (!container) return;

		const scrollLeft = container.scrollLeft;
		const width = container.offsetWidth;
		const index = Math.round(scrollLeft / width);

		setActiveIndex((prevIndex) => {
			if (prevIndex !== index) {
				return index;
			}
			return prevIndex;
		});
	};

	return (
		<>
			<section
				className="banner-wrapper"
				ref={bannerRef}
				onScroll={handleScroll}
				onMouseEnter={() => setISHovered(true)}
				onMouseLeave={() => setISHovered(false)}
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
										? `https://image.tmdb.org/t/p/w1280${tv.backdrop_path}`
										: `https://image.tmdb.org/t/p/w1280${tv.poster_path}`
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
