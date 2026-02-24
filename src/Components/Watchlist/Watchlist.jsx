import React, { useContext, useEffect } from "react";
import "./Watchlist.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function Watchlist() {
	const navigate = useNavigate();
	const context = useContext(movieContext);
	const { watchlist, fetchWatchlist, removeFromWatchlist } = context;
	useEffect(() => {
		fetchWatchlist();
		//eslint-disable-next-line
	}, []);
	return (
		<>
			<div className="watchlist-outer">
				<h2>Your Watchlist</h2>
				<section className="watchlist-wrapper">
					{watchlist.map((movies) => (
						<div
							className="movie-card"
							key={movies.movieId}
							onClick={() =>
								navigate(
									movies.media_type === "tv"
										? `/tv/${movies.movieId}`
										: `/movie/${movies.movieId}`,
								)
							}
						>
							<div className="poster-wrapper">
								<img
									src={
										movies.poster_path
											? `https://image.tmdb.org/t/p/w500${movies.poster_path}`
											: "/no-image.png"
									}
									alt={movies.title}
									loading="lazy"
								/>
								<span className="rating-badge">
									⭐ {movies.vote_average}
								</span>
								<button
									className="trash-btn"
									onClick={(e) => {
										e.stopPropagation();
										// remove from watchlist here
										removeFromWatchlist(movies.movieId);
									}}
								>
									<i className="fa-solid fa-trash-can fa-xl"></i>
								</button>
								<div className="movie-content">
									<div className="title-section">
										<h4 className="movie-title">{movies.title}</h4>
										<p className="release-date">
											Release: {movies.release_date}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</section>
			</div>
		</>
	);
}

export default Watchlist;
