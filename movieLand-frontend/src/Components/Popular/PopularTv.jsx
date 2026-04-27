import React, { useContext, useEffect } from "react";
import "./Popular.css";
import { useNavigate } from "react-router-dom";
import movieContext from "../../context/movieContext";

function PopularTv() {
	const navigate = useNavigate();
	const context = useContext(movieContext);
	const { popularTvShows, fetchPopularTvShows } = context;
	useEffect(() => {
		fetchPopularTvShows();
		//eslint-disable-next-line
	}, []);

	return (
		<>
			<section className="movie-wrapper">
				{popularTvShows.map((tv) => (
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
								alt={tv.name}
								loading="lazy"
							/>
							<span className="rating-badge">
								⭐ {tv.vote_average.toFixed(1)}
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
		</>
	);
}

export default PopularTv;
