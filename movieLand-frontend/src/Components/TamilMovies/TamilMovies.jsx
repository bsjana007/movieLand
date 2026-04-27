import React, { useContext, useRef } from "react";
import "./TamilMovies.css";
import { useNavigate } from "react-router-dom";
import movieContext from "../../context/movieContext";

function TamilMovies() {
	const navigate = useNavigate();
	const { tamilMovies, fetchTamilMovies, page, totalPages, loading } =
		useContext(movieContext);

	const hasFetched = useRef(false);
	React.useEffect(() => {
		if (hasFetched.current) return;
		hasFetched.current = true;
		fetchTamilMovies();
		//eslint-disable-next-line
	}, []);
	return (
		<>
			<section className="movie-wrapper-indian">
				{tamilMovies.map((movie) => (
					<div
						className="movie-card"
						key={movie.id}
						onClick={() => navigate(`/movie/${movie.id}`)}
					>
						<div className="poster-wrapper">
							<img
								src={
									movie.poster_path
										? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
										: "/no-image.png"
								}
								alt={movie.title}
								loading="lazy"
							/>
							<span className="rating-badge">
								⭐{" "}
								{movie.vote_average
									? movie.vote_average.toFixed(1)
									: "N/A"}
							</span>
						</div>

						<div className="movie-content">
							<h4 className="movie-title">{movie.title}</h4>
							<p className="release-date">
								Release: {movie.release_date || "Unknown"}
							</p>
						</div>
					</div>
				))}

				{/* 🔥 SEE MORE CARD */}
				{!loading && page < totalPages && (
					<div
						className="movie-card see-more-card"
						onClick={() => fetchTamilMovies()}
					>
						<div className="see-more-inner">
							<span className="see-more-plus">＋</span>
							<p>See More</p>
						</div>
					</div>
				)}

				{/* 🔥 SKELETON CARDS (shown while loading) */}
				{loading &&
					Array.from({ length: 8 }).map((_, index) => (
						<div
							className="movie-card skeleton"
							key={`skeleton-${index}`}
						>
							<div className="poster-wrapper skeleton-box" />
							<div className="movie-content">
								<div className="skeleton-text title" />
								<div className="skeleton-text date" />
							</div>
						</div>
					))}
			</section>
		</>
	);
}

export default TamilMovies;
