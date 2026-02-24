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

	useEffect(() => {
		trendingIndianMovies();
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
										? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
										: `https://image.tmdb.org/t/p/original${movie.poster_path}`
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
