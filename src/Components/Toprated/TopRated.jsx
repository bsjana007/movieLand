import React, { useContext, useEffect } from "react";
import "./TopRated.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function TopRated() {
	const navigate = useNavigate();
	const { topRatedMovie, topRatedMovies } = useContext(movieContext);

	useEffect(() => {
		topRatedMovies();
		// eslint-disable-next-line
	}, []);

	return (
		<section className="movie-wrapper">
			{topRatedMovie.map((movie) => (
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
		</section>
	);
}

export default TopRated;
