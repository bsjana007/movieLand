import React, { useContext, useEffect, useRef, useState } from "react";
import "./Trending.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function Trending() {
	const navigate = useNavigate();
	const { trendingIndianMovie, trendingIndianMovies } =
		useContext(movieContext);
	const bannerRef = useRef(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const [isHovered, setISHovered] = useState(false); // track hover to pause slider

	useEffect(() => {
		trendingIndianMovies();
		//eslint-disable-next-line
	}, []);

	// Auto-scroll functionality
	useEffect(() => {
		if (isHovered) return; //if hoverd then pause slider
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
				{trendingIndianMovie.map((movie) => (
					<div
						className="banner-card"
						key={movie.id}
						onClick={() => navigate(`/movie/${movie.id}`)}
					>
						<div className="banner-image">
							<img
								src={
									movie.backdrop_path
										? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
										: `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
								}
								alt={movie.title}
								loading="lazy"
							/>
							<span className="rating-badge">
								⭐ {movie.vote_average.toFixed(1)}
							</span>
							<div className="banner-overlay">
								<h2 className="banner-title">{movie.title}</h2>
							</div>
						</div>
					</div>
				))}
			</section>

			{/* DOTS */}
			<div className="banner-dots">
				{trendingIndianMovie.map((_, index) => (
					<span
						key={index}
						className={`dot ${index === activeIndex ? "active" : ""}`}
					></span>
				))}
			</div>
		</>
	);
}

export default Trending;
