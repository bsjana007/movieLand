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
								<h2>Genres</h2>
							</div>
							<div className="genres-list">
								{movieDetails.genres?.map((genre) => (
									<div className="card-flex" key={genre.id}>
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
						<h2>Cast</h2>
					</div>

					<div className="movie-credits-wrapper">
						{movieCast.map((actor) => (
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
				</div>
				{/* crew */}
				<div className="crew-section">
					<div className="center">
						<div className="bar"></div>
						<h2>Crew</h2>
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
				</div>
				{/* PHOTOS SECTION */}
				<div className="photos-section">
					<div className="photos-header">
						<div className="center">
							<div className="bar"></div>
							<h2>Photos</h2>
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
							disabled={reviewIndex + 2 >= movieReviews.length}
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
										<h4 className="movie-title">{movie.title}</h4>
										<p className="release-date">
											Release: {movie.release_date}
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
										<h4 className="movie-title">{movie.title}</h4>
										<p className="release-date">
											Release: {movie.release_date}
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

export default MovieDetails;
