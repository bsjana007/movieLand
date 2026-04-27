import React, { useContext, useEffect } from "react";
import "./Popular.css";
import { useNavigate } from "react-router-dom";
import movieContext from "../../context/movieContext";

function Popular() {
	const navigate = useNavigate();
	const context = useContext(movieContext);
	const { popularIndianMovie, popularIndianMovies } = context;
	useEffect(() => {
		popularIndianMovies();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<section className="movie-wrapper">
				{popularIndianMovie.map((movie) => (
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
								⭐ {movie.vote_average.toFixed(1)}
							</span>
						</div>

						<div className="movie-content">
							<h4 className="movie-title">{movie.title}</h4>
							<p className="release-date">
								Release: {movie.release_date}
							</p>
						</div>
					</div>
				))}
			</section>
		</>
	);
}

export default Popular;
