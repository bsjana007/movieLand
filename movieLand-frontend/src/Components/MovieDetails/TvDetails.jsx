import React, { useEffect, useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./MovieDetails.css";
import profileLogo from "../../assets/no-profile-pic.jpeg";
import noMovie from "../../assets/no-movie.png";
import movieContext from "../../context/movieContext";
import Loading from "../Loader/Loading";

function TvDetails() {
	const navigate = useNavigate();
	const [reviewIndex, setReviewIndex] = useState(0);
	const [openSimilar, setOpenSimilar] = useState(true);
	const [openRecommended, setOpenRecommended] = useState(true);
	// const [isWatchlisted, setiIWatchlisted] = useState(false);
	const [isTrailerOpen, setIsTrailerOpen] = useState(false);
	const [trailer, setTrailer] = useState(null);
	const { id } = useParams();
	const context = useContext(movieContext);
	const {
		tvDetails,
		loadingDetails,
		fetchTvDetails,
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
		watchlistTv,
		addToWatchlistTv,
		removeFromWatchlistTv,
		fetchWatchlist,
		//eslint-disable-next-line
		tvVideos,
		fetchTvVideos,
		tvProviders,
		fetchTvProviders,
	} = context;

	useEffect(() => {
		if (!id) return;

		const loadTrailer = async () => {
			const videos = await fetchTvVideos(id);
			const selected =
				videos.find((v) => v.site === "YouTube" && v.type === "Trailer") ||
				videos.find((V) => V.site === "YouTube");
			setTrailer(selected || null);
		};

		fetchTvDetails(id);
		fetchTvImages(id);
		fetchTvReviews(id);
		fetchSimilarTvShows(id);
		fetchTvCredits(id);
		fetchRecommendedTvShows(id);
		fetchTvVideos(id);
		loadTrailer();
		fetchTvProviders(id);
		fetchWatchlist();
		//eslint-disable-next-line
	}, [id]);

	const isWatchlisted =
		tvDetails &&
		Array.isArray(watchlistTv) &&
		watchlistTv.some(
			(movie) => movie.movieId === tvDetails.id && movie.media_type == "tv",
		);

	const toggleSimilarOpen = () => {
		setOpenSimilar((prev) => !prev);
	};

	const toggleRecommended = () => {
		setOpenRecommended((prev) => !prev);
	};

	const handleWatchlistClick = async () => {
		if (isWatchlisted) {
			removeFromWatchlistTv({ movieId: tvDetails.id, media_type: "tv" });
		} else {
			addToWatchlistTv(tvDetails);
		}
	};

	if (!tvDetails || loadingDetails)
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
							tvDetails.poster_path
								? `https://image.tmdb.org/t/p/w500${tvDetails.poster_path}`
								: noMovie
						}
						alt={tvDetails.name}
						className="poster"
					/>
					<div className="container">
						<div className="details-content">
							<h1>{tvDetails.name}</h1>
							<p>{tvDetails.overview}</p>

							<p>
								<strong>Rating:</strong> ⭐{" "}
								{tvDetails.vote_average.toFixed(1)}
							</p>
							<p>
								<strong>Release Date:</strong>{" "}
								{tvDetails.first_air_date}
							</p>
							<p>
								<strong>Total Seasons:</strong>{" "}
								{tvDetails.number_of_seasons}
							</p>
						</div>
						<div className="watch-outer">
							<div className="watch-wrapper">
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
					<div className="aside-wrapper">
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
						<div className="seasons-section">
							<div className="center">
								<div className="bar"></div>
								<h2>Seasons</h2>
							</div>
							<div className="seasons-list">
								{tvDetails.seasons?.map((season) => (
									// <div className="card-flex" >
									<div
										className="season-card"
										key={season.id}
										onClick={() =>
											navigate(
												`/tv/${tvDetails.id}/season/${season.season_number}`,
											)
										}
									>
										{/* <p>{season.name}</p> */}
										<p>{season.name?.replace(/Season\s/i, "S")}</p>
									</div>
									// </div>
								))}
							</div>
						</div>
					</div>
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

export default TvDetails;
