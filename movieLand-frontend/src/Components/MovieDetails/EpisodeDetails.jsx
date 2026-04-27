import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import "./EpisodeDetails.css";
import profileLogo from "../../assets/no-profile-pic.jpeg";
import noMovie from "../../assets/no-movie.png";
import movieContext from "../../context/movieContext";
import Loading from "../Loader/Loading";

function EpisodeDetails() {
	const navigate = useNavigate();
	const [reviewIndex, setReviewIndex] = useState(0);
	const [openSimilar, setOpenSimilar] = useState(true);
	const [openRecommended, setOpenRecommended] = useState(true);
	// const [isWatchlisted, setiIWatchlisted] = useState(false);
	const [isTrailerOpen, setIsTrailerOpen] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const { id, seasonNumber, episodeNumber } = useParams();
	const context = useContext(movieContext);
	const {
		seasonDetails,
		fetchSeasonDetails,
		tvDetails,
		fetchTvDetails,
		episodeDetails,
		loadingDetails,
		fetchEpisodeDetails,
		tvImages,
		fetchTvImages,
		tvReviews,
		fetchTvReviews,
		similarTvShows,
		fetchSimilarTvShows,
		tvCast,
		tvCrew,
		fetchTvCredits,
		recommendedTvShows,
		fetchRecommendedTvShows,
		// watchlistTv,
		// addToWatchlistTv,
		// removeFromWatchlistTv,
		fetchWatchlist,

		tvVideos,
		fetchTvVideos,
		tvProviders,
		fetchTvProviders,
		seasonVideos,
		fetchSeasonVideos,
		episodeVideos,
		fetchEpisodeVideos,
	} = context;

	useEffect(() => {
		if (!id) return;

		// const loadTrailer = async () => {
		// 	const videos = await fetchTvVideos(id);
		// 	const selected =
		// 		videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
		// 		videos.find((v) => v.site === "YouTube" && v.type === "Teaser") ||
		// 		videos.find(
		// 			(v) => v.site === "YouTube" && v.type === "Opening Credits",
		// 		) ||
		// 		videos.find((v) => v.site === "YouTube");

		// 	setTrailer(selected || null);
		// };

		const loadTrailer = async () => {
			try {
				// 1️⃣ Try Episode Videos
				const episodeVideos = await fetchEpisodeVideos(
					id,
					seasonNumber,
					episodeNumber,
				);

				const filterTrailer = (videos) =>
					videos.find(
						(v) => v.site === "YouTube" && v.type === "Trailer",
					) ||
					videos.find(
						(v) => v.site === "YouTube" && v.type === "Teaser",
					) ||
					videos.find(
						(v) => v.site === "YouTube" && v.type === "Opening Credits",
					) ||
					videos.find((v) => v.site === "YouTube");

				let selected = filterTrailer(episodeVideos);

				// 2️⃣ If no episode trailer → Try Season
				if (!selected) {
					const seasonVideos = await fetchSeasonVideos(id, seasonNumber);
					selected = filterTrailer(seasonVideos);
				}

				// 3️⃣ If no season trailer → Try Show
				if (!selected) {
					const showVideos = await fetchTvVideos(id);
					selected = filterTrailer(showVideos);
				}

				setTrailer(selected || null);
			} catch (error) {
				console.error("Error loading trailer:", error);
				setTrailer(null);
			}
		};

		loadTrailer();

		fetchSeasonDetails(id, seasonNumber);
		fetchEpisodeDetails(id, seasonNumber, episodeNumber);
		fetchTvDetails(id);
		fetchTvImages(id);
		fetchTvReviews(id);
		fetchSimilarTvShows(id);
		fetchTvCredits(id);
		fetchRecommendedTvShows(id);
		fetchTvVideos(id);
		// loadTrailer();
		fetchTvProviders(id);
		fetchWatchlist();
		//eslint-disable-next-line
	}, [id, seasonNumber, episodeNumber]);

	// const isWatchlisted =
	// 	seasonDetils &&
	// 	Array.isArray(watchlistTv) &&
	// 	watchlistTv.some(
	// 		(movie) =>
	// 			movie.movieId === seasonDetils.id && movie.media_type == "tv",
	// 	);

	const toggleSimilarOpen = () => {
		setOpenSimilar((prev) => !prev);
	};

	const toggleRecommended = () => {
		setOpenRecommended((prev) => !prev);
	};

	const handleBack = async () => {
		navigate(`/tv/${id}/season/${seasonNumber}`);
	};
	const handleBackShow = async () => {
		navigate(`/tv/${id}`);
	};

	if (
		!episodeDetails ||
		!tvDetails ||
		!seasonDetails ||
		!tvVideos ||
		!seasonVideos ||
		!episodeVideos ||
		loadingDetails
	)
		return (
			<div className="page-loader">
				<Loading />
			</div>
		);

	return (
		<>
			<div className="movie-details">
				<div className="movie-banner">
					<section className="episode-wrapper">
						<div className="episode-path">
							<div className="episode-title-rating-wrapper">
								<div className="episode-title-section">
									<span className="show-name">
										<p
											className="tv-title"
											onClick={() => handleBackShow()}
										>
											{tvDetails.name}
										</p>
										{/* <i className="fa-solid fa-circle fa-2xs"></i> */}
										<i className="fa-solid fa-angle-right fa-sm"></i>
										<p
											className="season-number"
											onClick={() => handleBack()}
										>
											S{seasonNumber}
										</p>
										<i className="fa-solid fa-angle-right fa-sm"></i>
										<p className="episode-number">E{episodeNumber}</p>
									</span>
									<p className="episode-title">
										{episodeDetails.name}
									</p>
									<div className="episode-details">
										<p>Episode Aired : {episodeDetails.air_date}</p>
										<div className="dot"></div>
										<p>
											<i className="fa-solid fa-star fa-sm"></i>{" "}
											{episodeDetails.vote_average}
										</p>
										<div className="dot"></div>
										<p>
											<i className="fa-solid fa-alarm-clock fa-sm"></i>{" "}
											{episodeDetails.runtime} min
										</p>
									</div>
								</div>
								<div className="episode-rating-section">
									<div className="imdb-rating">
										<p className="rating-label">MovieLand RATING</p>

										<div className="rating-content">
											<div className="star">
												<span className="star">⭐</span>
											</div>
											<div className="rating-section">
												<span className="rating-value">
													{episodeDetails.vote_average.toFixed(1)}
													<span className="out-of">/10</span>
												</span>
												<p className="rating-count">
													{episodeDetails.vote_count}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="episode-banner">
								<div className="episode-img">
									<img
										src={
											seasonDetails.poster_path
												? `https://image.tmdb.org/t/p/w500${seasonDetails.poster_path}`
												: noMovie
										}
										alt={seasonDetails.name}
										className="poster"
									/>
								</div>
								<div className="episode-video">
									{trailer?.key ? (
										<div className="video">
											{<iframe
												src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
												title="Trailer"
												allow="encrypted-media; picture-in-picture"
												allowFullScreen
											/> ? (
												<iframe
													src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1`}
													title="Trailer"
													allow="encrypted-media; picture-in-picture"
													allowFullScreen
												/>
											) : (
												"Loaing Trailer..."
											)}
										</div>
									) : (
										<p className="no-trailer">Video not available</p>
									)}
								</div>
							</div>
							<div className="overview-section">
								<div className="overview-genre-section">
									<div className="genres-section">
										<div className="center">
											<div className="bar"></div>
											<h2>Genres</h2>
										</div>
										<div className="genres-list">
											{tvDetails.genres?.map((genre) => (
												// <div className="card-flex" >
												<div className="genre-card" key={genre.id}>
													<p>{genre.name}</p>
												</div>
												// </div>
											))}
										</div>
									</div>
									<div className="divider"></div>
									<div className="episode-overview">
										<div className="center">
											<div className="bar"></div>
											<h2>Overview</h2>
										</div>
										<div className="overview">
											<p>{episodeDetails.overview}</p>
										</div>
									</div>
								</div>
								<div className="streaming-section">
									<div className="steaming">
										<span className="streaming-text">STREAMING</span>
										<div className="providers-wrapper">
											{tvProviders.map((provider) => (
												<div
													className="provider-card"
													key={provider.provider_id}
												>
													<img
														src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
														alt={provider.provider_name}
														className="provider_logo"
													/>
													<span className="provider-name">
														{provider.provider_name.slice(0, 19)}
													</span>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/* cast */}
				<div className="cast-section">
					<div className="center">
						<div className="bar"></div>
						<h2>Cast</h2>
					</div>
					{tvCast && tvCast.length > 0 ? (
						<div className="movie-credits-wrapper">
							{tvCast.map((actor) => (
								<div className="movie-credits" key={actor.id}>
									<img
										src={
											actor.profile_path
												? `https://image.tmdb.org/t/p/original${actor.profile_path}`
												: profileLogo
										}
										alt={actor.name}
										className="actor-poster"
									/>
									<p className="actor-name">{actor.name}</p>
									<p className="character-name">{actor.character}</p>
								</div>
							))}
						</div>
					) : (
						<p className="no-cast">No cast information available.</p>
					)}
				</div>
				{/* crew */}
				<div className="crew-section">
					<div className="center">
						<div className="bar"></div>
						<h2>Crew</h2>
					</div>
					{tvCrew && tvCrew.length > 0 ? (
						<div className="movie-credits-wrapper">
							{tvCrew
								.filter(
									(member) =>
										member.job === "Director" ||
										member.job === "Writter" ||
										member.job === "Producer" ||
										member.known_for_department === "Writing" ||
										member.known_for_department === "Editing",
								)
								.map((member) => (
									<div className="movie-credits" key={member.id}>
										<img
											src={
												member.profile_path
													? `https://image.tmdb.org/t/p/original${member.profile_path}`
													: profileLogo
											}
											alt={member.name}
											className="actor-poster"
										/>
										<p className="crew-name">{member.name}</p>
										<p className="crew-job">{member.job}</p>
									</div>
								))}
						</div>
					) : (
						<p className="no-cast">No crew information available.</p>
					)}
				</div>
				{/* PHOTOS SECTION */}
				<div className="photos-section">
					<div className="photos-header">
						<div className="center">
							<div className="bar"></div>
							<h2>Photos</h2>
							<span>{tvImages.length}</span>
						</div>
					</div>

					<div className="photos-grid">
						{tvImages.slice(0, 12).map((img, index) => (
							<img
								key={index}
								src={`https://image.tmdb.org/t/p/w780${img.file_path}`}
								alt="movie scene"
							/>
						))}
					</div>
				</div>
				{/* reviews */}
				<div className="featured-reviews">
					<div className="center">
						<div className="bar"></div>
						<h2 className="review-heading">Featured reviews</h2>
					</div>

					<div className="review-wrapper">
						{/* PREVIOUS BUTTON */}
						<button
							className="review-nav left"
							onClick={() => setReviewIndex((prev) => prev - 2)}
							disabled={reviewIndex === 0}
						>
							‹
						</button>

						{/* REVIEW CARDS */}
						<div className="review-cards">
							{tvReviews
								.slice(reviewIndex, reviewIndex + 2)
								.map((review) => {
									const content = review.content || "";
									const title = content.split(".")[0];

									return (
										<div className="review-card" key={review.id}>
											<div className="review-rating">
												⭐ {review.author_details?.rating ?? "–"}
												<span className="review-author">
													{review.author}
												</span>
											</div>

											<h3>{title}</h3>

											<p>
												{content.length > 160
													? content.slice(0, 160) + "..."
													: content}
											</p>
										</div>
									);
								})}
						</div>

						{/* NEXT BUTTON */}
						<button
							className="review-nav right"
							onClick={() => setReviewIndex((prev) => prev + 2)}
							disabled={reviewIndex + 2 >= tvReviews.length}
						>
							›
						</button>
					</div>
				</div>
				{/* similar movies */}
				<div className="similar-movie-outer">
					<button
						className={`toggle-btn ${openSimilar ? "open" : ""}`}
						onClick={toggleSimilarOpen}
					>
						<i
							className={`arrow fa-solid fa-angle-up ${
								openSimilar ? "open" : ""
							}`}
						></i>
						<span>Similar to your choice</span>
					</button>
					{/* <h2>Similar to your choice</h2> */}

					<div className={`dropdown ${openSimilar ? "open" : ""}`}>
						<section className="similar-wrapper">
							{similarTvShows.map((movie) => (
								<div
									className="movie-card"
									key={movie.id}
									onClick={() => navigate(`/tv/${movie.id}`)}
								>
									<div className="poster-wrapper">
										<img
											src={
												movie.poster_path
													? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
													: noMovie
											}
											alt={movie.name}
											loading="lazy"
										/>
										<span className="rating-badge">
											⭐ {movie.vote_average.toFixed(1)}
										</span>
									</div>
									<div className="movie-content">
										<h4 className="movie-title">{movie.name}</h4>
										<p className="release-date">
											Release: {movie.first_air_date}
										</p>
									</div>
								</div>
							))}
						</section>
					</div>
				</div>
				{/* rocommended movies */}
				<div className="recommended-movie-outer">
					<button
						className={`toggle-btn ${openRecommended ? "open" : ""}`}
						onClick={toggleRecommended}
					>
						<i
							className={`arrow fa-solid fa-angle-up ${
								openSimilar ? "open" : ""
							}`}
						></i>
						<span>Recommended Movies</span>
					</button>
					<div className={`dropdown ${openRecommended ? "open" : ""}`}>
						<section className="recommended-wrapper">
							{recommendedTvShows.map((movie) => (
								<div
									className="movie-card"
									key={movie.id}
									onClick={() => navigate(`/tv/${movie.id}`)}
								>
									<div className="poster-wrapper">
										<img
											src={
												movie.poster_path
													? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
													: noMovie
											}
											alt={movie.title}
											loading="lazy"
										/>
										<span className="rating-badge">
											⭐ {movie.vote_average.toFixed(1)}
										</span>
									</div>
									<div className="movie-content">
										<h4 className="movie-title">{movie.name}</h4>
										<p className="release-date">
											Release: {movie.first_air_date}
										</p>
									</div>
								</div>
							))}
						</section>
					</div>
				</div>
			</div>
			{isTrailerOpen && trailer && (
				<div
					className="video-modal"
					onClick={() => setIsTrailerOpen(false)}
				>
					<div
						className="video-content"
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="close-btn"
							onClick={() => setIsTrailerOpen(false)}
						>
							✕
						</button>

						<iframe
							src={`https://www.youtube.com/embed/${trailer.key}`}
							title="Movie Trailer"
							allow="encrypted-media; picture-in-picture"
							allowFullScreen
						/>
					</div>
				</div>
			)}
		</>
	);
}

export default EpisodeDetails;
