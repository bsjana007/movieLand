import React, { useContext, useEffect } from "react";
import "./Watchlist.css";
// import sadIcon from "../../assets/sad.svg";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";
import noMovie from "../../assets/no-movie.png";

function Watchlist() {
	const navigate = useNavigate();
	const context = useContext(movieContext);
	const { watchlist, fetchWatchlist, removeFromWatchlist } = context;
	const token = localStorage.getItem("token");
	useEffect(() => {
		fetchWatchlist();
		//eslint-disable-next-line
	}, []);
	return (
		<>
			<div className="watchlist-outer">
				<h2>Your Watchlist</h2>
				{!token ? (
					<div className="error">
						<div className="error-emoji">
							<svg
								viewBox="0 0 48 48"
								className="sad-icon"
								style={{ fill: "currentColor" }}
							>
								<path d="M24,1A23,23,0,1,0,47,24,23,23,0,0,0,24,1Zm0,44A21,21,0,1,1,45,24,21,21,0,0,1,24,45Zm8.8-12.6a1,1,0,0,1-.2,1.4,1,1,0,0,1-.6.2,1,1,0,0,1-.8-.4A9.42,9.42,0,0,0,24,30a9.44,9.44,0,0,0-7.2,3.6,1,1,0,0,1-1.6-1.2A11.34,11.34,0,0,1,24,28,11.31,11.31,0,0,1,32.8,32.4ZM15,19a2,2,0,1,1,2,2A2,2,0,0,1,15,19Zm18,0a2,2,0,1,1-2-2A2,2,0,0,1,33,19Z" />
							</svg>
						</div>
						<div className="error-text">
							<p className="text">OPPS! Login to access watchlist</p>
						</div>
					</div>
				) : (
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
												: noMovie
										}
										alt={movies.title}
										loading="lazy"
									/>
									<span className="rating-badge">
										⭐ {movies.vote_average.toFixed(1)}
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
										<div className="title-section-watchlist">
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
				)}
			</div>
		</>
	);
}

export default Watchlist;
