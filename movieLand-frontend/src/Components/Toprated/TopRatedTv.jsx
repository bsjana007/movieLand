import React, { useContext, useEffect } from "react";
import "./TopRated.css";
import movieContext from "../../context/movieContext";
import { useNavigate } from "react-router-dom";

function TopRated() {
	const navigate = useNavigate();
	const { topRatedTvShows, fetchTopRatedTvShows } = useContext(movieContext);

	useEffect(() => {
		fetchTopRatedTvShows();
		// eslint-disable-next-line
	}, []);

	return (
		<section className="movie-wrapper">
			{topRatedTvShows.map((tv) => (
				<div
					className="movie-card"
					key={tv.id}
					onClick={() => navigate(`/tv/${tv.id}`)}
				>
					<div className="poster-wrapper">
						<img
							src={
								tv.poster_path
									? `https://image.tmdb.org/t/p/w500${tv.poster_path}`
									: "/no-image.png"
							}
							alt={tv.nmae}
							loading="lazy"
						/>
						<span className="rating-badge">
							⭐ {tv.vote_average ? tv.vote_average.toFixed(1) : "N/A"}
						</span>
					</div>

					<div className="movie-content">
						<h4 className="movie-title">{tv.name}</h4>
						<p className="release-date">
							Release: {tv.first_air_date || "Unknown"}
						</p>
					</div>
				</div>
			))}
		</section>
	);
}

export default TopRated;
