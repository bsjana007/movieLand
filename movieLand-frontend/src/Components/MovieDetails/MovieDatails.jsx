import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import noMovie from "../../assets/no-movie.png";
import profileLogo from "../../assets/no-profile-pic.jpeg";
import movieContext from "../../context/movieContext";
import Loading from "../Loader/Loading";

function MovieDetails() {
	const navigate = useNavigate();
	const [reviewIndex, setReviewIndex] = useState(0);
	const [activeReview, setActiveReview] = useState(null);

	const getAvatarUrl = (avatarPath) => {
		if (!avatarPath) return null;
		if (avatarPath.startsWith("/http") || avatarPath.startsWith("http")) {
			return avatarPath.startsWith("/")
				? avatarPath.substring(1)
				: avatarPath;
		}
		return `https://image.tmdb.org/t/p/w150_and_h150_face${avatarPath}`;
	};
	const [openSimilar, setOpenSimilar] = useState(true);
	const [openRecommended, setOpenRecommended] = useState(true);
	// const [isWatchlisted, setiIWatchlisted] = useState(false);
	const [isTrailerOpen, setIsTrailerOpen] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const { id } = useParams();
	const context = useContext(movieContext);
	const {
		movieDetails,
		loadingDetails,
		fetchMovieDetails,
		movieImages,
		fetchMovieImages,
		movieReviews,
		fetchReviews,
		similarMovies,
		fetchSimilarMovies,
		movieCast,
		movieCrew,
		fetchMovieCredits,
		recommended,
		fetchRecommended,
		watchlist,
		addToWatchlist,
		removeFromWatchlist,
		fetchWatchlist,
		//eslint-disable-next-line
		movieVideos,
		fetchMovieVideos,
		providers,
		fetchProviders,
	} = context;

	useEffect(() => {
		if (!id) return;

		const loadTrailer = async () => {
			const videos = await fetchMovieVideos(id);
			const selected =
				videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
				videos.find((V) => V.site === "YouTube");
			setTrailer(selected || null);
		};

		fetchMovieDetails(id);
		fetchMovieImages(id);
		fetchReviews(id);
		fetchSimilarMovies(id);
		fetchMovieCredits(id);
		fetchRecommended(id);
		fetchMovieVideos(id);
		loadTrailer();
		fetchProviders(id);
		fetchWatchlist();
		//eslint-disable-next-line
	}, [id]);

	useEffect(() => {
		if (activeReview) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [activeReview]);

	const isWatchlisted =
		movieDetails &&
		Array.isArray(watchlist) &&
		watchlist.some((movie) => movie.movieId === movieDetails.id);

	const toggleSimilarOpen = () => {
		setOpenSimilar((prev) => !prev);
	};

	const toggleRecommended = () => {
		setOpenRecommended((prev) => !prev);
	};

	const handleWatchlistClick = async () => {
		if (isWatchlisted) {
			removeFromWatchlist(movieDetails.id);
		} else {
			addToWatchlist(movieDetails);
		}
	};

	// const video =
	// 	movieVideos.find(
	// 		(v) =>
	// 			v.site === "YouTube" && v.name?.toLowerCase().includes("trailer"),
	// 	) || movieVideos.find((v) => v.site === "YouTube");

	if (!movieDetails || loadingDetails)
		return (
			<div className="page-loader">
				<Loading />
			</div>
		);

	return (
		<>
			<div className="movie-details">
				<div className="movie-banner">
					<img
						src={
							movieDetails.poster_path
								? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
								: "/no-image.png"
						}
						alt={movieDetails.title}
						className="poster"
					/>
					<div className="container">
						<div className="details-content">
							<h1>{movieDetails.title}</h1>
							<p>{movieDetails.overview}</p>

							<p>
								<strong>Rating:</strong> ⭐ {movieDetails.vote_average}
							</p>
							<p>
								<strong>Release Date:</strong>{" "}
								{movieDetails.release_date}
							</p>
							<p>
								<strong>Runtime:</strong> {movieDetails.runtime} min
							</p>
						</div>
						<div className="watch-outer">
							<div
								className={`watch-wrapper ${isWatchlisted ? `watch-wrapper-remove` : `watch-wrapper-add`}`}
							>
								<button
									className={`watchlist-btn ${isWatchlisted ? "remove" : "add"}`}
									onClick={handleWatchlistClick}
								>
									<span className="icon">
										<i
											className={`fa-solid ${isWatchlisted ? "fa-trash" : "fa-plus"} fa-xl`}
										></i>
									</span>
									<span className="btn-text">
										{!isWatchlisted
											? "Add to Watchlist"
											: "Remove from WatchList"}
									</span>
								</button>
							</div>
							<div className="watch-now-wrapper">
								<button
									className="watchnow-btn"
									onClick={() => setIsTrailerOpen(true)}
									disabled={!trailer}
								>
									<i className="fa-solid fa-play fa-xl"></i>
									<div className="btn-text">Watch Trailer</div>
								</button>
							</div>
						</div>
						<div className="providers-wrapper">
							{providers.map((provider) => (
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
					<div className="aside-wrapper">
						<div className="genres-section">
							<div className="center">
								<div className="bar"></div>
								<div className="bar-text">Genres</div>
							</div>
							<div className="genres-list">
								{movieDetails.genres?.map((genre) => (
									<div
										className="card-flex"
										key={genre.id}
										onClick={() => navigate(`/genres/${genre.id}`)}
									>
										<div className="genre-card">
											<p>{genre.name}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
				{/* cast */}
				<div className="cast-section">
					<div className="center">
						<div className="bar"></div>
						<div className="bar-text">Cast</div>
					</div>

					<div className="movie-credits-wrapper">
						{movieCast.map((actor) => (
							<div
								className="movie-credits"
								key={actor.id}
								onClick={() => navigate(`/person/${actor.id}`)}
							>
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
				</div>
				{/* crew */}
				<div className="crew-section">
					<div className="center">
						<div className="bar"></div>
						<div className="bar-text">Crew</div>
					</div>
					<div className="movie-credits-wrapper">
						{movieCrew
							.filter(
								(member) =>
									member.job === "Director" ||
									member.job === "Writter" ||
									member.job === "Producer",
							)
							.map((member) => (
								<div
									className="movie-credits"
									key={member.id}
									onClick={() => navigate(`/person/${member.id}`)}
								>
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
				</div>
				{/* PHOTOS SECTION */}
				<div className="photos-section">
					<div className="photos-header">
						<div className="center">
							<div className="bar"></div>
							<div className="bar-text">Photos</div>
							<span>{movieImages.length}</span>
						</div>
					</div>

					<div className="photos-grid">
						{movieImages.slice(0, 8).map((img, index) => (
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

					{movieReviews && movieReviews.length > 0 ? (
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
								{movieReviews
									.slice(reviewIndex, reviewIndex + 2)
									.map((review) => {
										const content = review.content || "";
										const title = content.split(".")[0];
										const avatarUrl = getAvatarUrl(
											review.author_details?.avatar_path,
										);

										return (
											<div className="review-card" key={review.id}>
												<div className="review-header">
													<div className="review-author-info">
														{avatarUrl ? (
															<img
																src={avatarUrl}
																alt={review.author}
																className="review-avatar"
															/>
														) : (
															<div className="review-avatar-fallback">
																{review.author
																	?.charAt(0)
																	.toUpperCase() || "?"}
															</div>
														)}
														<div className="review-author-details">
															<span className="review-author-name">
																{review.author}
															</span>
															{review.author_details?.rating && (
																<span className="review-rating-badge">
																	⭐{" "}
																	{
																		review.author_details
																			.rating
																	}
																	/10
																</span>
															)}
														</div>
													</div>
												</div>

												<h3>{title}</h3>

												<p className="review-text">
													{content.length > 180
														? content.slice(0, 180) + "..."
														: content}
												</p>
												{content.length > 180 && (
													<button
														className="read-more-btn"
														onClick={() =>
															setActiveReview(review)
														}
													>
														Read More
													</button>
												)}
											</div>
										);
									})}
							</div>

							{/* NEXT BUTTON */}
							<button
								className="review-nav right"
								onClick={() => setReviewIndex((prev) => prev + 2)}
								disabled={reviewIndex + 2 >= movieReviews.length}
							>
								›
							</button>
						</div>
					) : (
						<div className="no-reviews-state">
							<i className="fa-regular fa-comments"></i>
							<p>
								No reviews available yet. Be the first to share your
								thoughts!
							</p>
						</div>
					)}
				</div>

				<div className="global-content-sections">
					{/* similar movies */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${openSimilar ? "open" : ""}`}
							onClick={toggleSimilarOpen}
						>
							<div className="global-section-title-wrap">
								<h2>Similar to your choice</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${openSimilar ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${openSimilar ? "expanded" : ""}`}
						>
							{similarMovies && similarMovies.length !== 0 ? (
								<section className="similar-wrapper">
									{similarMovies.map((movie) => (
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
												<h4 className="movie-title">
													{movie.title}
												</h4>
												<p className="release-date">
													Release: {movie.release_date}
												</p>
											</div>
										</div>
									))}
								</section>
							) : (
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
										<p className="text">
											No Similar Movies Available
										</p>
									</div>
								</div>
							)}
						</div>
					</div>

					{/* rocommended movies */}
					<div className="global-section-container">
						<div
							className={`global-section-header ${openRecommended ? "open" : ""}`}
							onClick={toggleRecommended}
						>
							<div className="global-section-title-wrap">
								<h2>Recommended Movies</h2>
							</div>
							<i
								className={`fa-solid fa-chevron-down global-toggle-icon ${openRecommended ? "rotated" : ""}`}
							></i>
						</div>
						<div
							className={`global-section-content ${openRecommended ? "expanded" : ""}`}
						>
							{recommended && recommended.length !== 0 ? (
								<section className="recommended-wrapper">
									{recommended.map((movie) => (
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
												<h4 className="movie-title">
													{movie.title}
												</h4>
												<p className="release-date">
													Release: {movie.release_date}
												</p>
											</div>
										</div>
									))}
								</section>
							) : (
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
										<p className="text">
											No Recommended Movies Available
										</p>
									</div>
								</div>
							)}
						</div>
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

			{activeReview && (
				<div
					className="review-modal-overlay"
					onClick={() => setActiveReview(null)}
					data-lenis-prevent
				>
					<div
						className="review-modal-content"
						onClick={(e) => e.stopPropagation()}
						data-lenis-prevent
					>
						<button
							className="review-modal-close"
							onClick={() => setActiveReview(null)}
						>
							✕
						</button>

						<div className="review-modal-header">
							{getAvatarUrl(activeReview.author_details?.avatar_path) ? (
								<img
									src={getAvatarUrl(
										activeReview.author_details.avatar_path,
									)}
									alt={activeReview.author}
									className="review-modal-avatar"
								/>
							) : (
								<div className="review-modal-avatar-fallback">
									{activeReview.author?.charAt(0).toUpperCase() || "?"}
								</div>
							)}
							<div className="review-modal-author-info">
								<h2>{activeReview.author}</h2>
								{activeReview.author_details?.rating && (
									<span className="review-modal-rating">
										⭐ {activeReview.author_details.rating}/10
									</span>
								)}
							</div>
						</div>

						<div className="review-modal-body" data-lenis-prevent>
							<p>{activeReview.content}</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default MovieDetails;
