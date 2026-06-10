import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./GenreMovies.css";
import noMovie from "../../assets/no-movie.png";
import movieContext from "../../context/movieContext";

function GenreMovies() {
	const { genreId } = useParams();
	const navigate = useNavigate();

	const {
		movieGenres,
		genreMovies,
		genrePage,
		genreTotalPages,
		loadingGenres,
		loadingGenreMovies,
		fetchMovieGenres,
		fetchMoviesByGenre,
	} = useContext(movieContext);

	const [activeGenreId, setActiveGenreId] = useState(null);

	// 1. Fetch Genres List on Mount if not already loaded
	useEffect(() => {
		const loadGenres = async () => {
			const fetched = await fetchMovieGenres();
			if (fetched.length > 0 && !genreId) {
				navigate(`/genres/${fetched[0].id}`, { replace: true });
			}
		};

		if (movieGenres.length === 0) {
			loadGenres();
		} else if (!genreId && movieGenres.length > 0) {
			navigate(`/genres/${movieGenres[0].id}`, { replace: true });
		}
		//eslint-disable-next-line
	}, [genreId]);

	// 2. Synchronize activeGenreId when URL param changes
	useEffect(() => {
		if (genreId) {
			//eslint-disable-next-line
			setActiveGenreId(parseInt(genreId));
		}
	}, [genreId]);

	// 3. Fetch movies when activeGenreId changes
	useEffect(() => {
		if (activeGenreId) {
			fetchMoviesByGenre(activeGenreId, 1, false);
		}
		//eslint-disable-next-line
	}, [activeGenreId]);

	const handleGenreClick = (id) => {
		navigate(`/genres/${id}`);
	};

	const handleSeeMore = () => {
		if (genrePage < genreTotalPages && !loadingGenreMovies) {
			fetchMoviesByGenre(activeGenreId, genrePage + 1, true);
		}
	};

	const activeGenreName =
		movieGenres.find((g) => g.id === activeGenreId)?.name || "Movies";

	return (
		<div className="genre-movies-page">
			{/* Hero Section */}
			<div className="genre-hero-section">
				<div className="genre-hero-overlay"></div>
				<div className="genre-hero-content">
					<h1 className="genre-hero-title">
						Browse by <span className="highlight">{activeGenreName}</span>
					</h1>
					<p className="genre-hero-subtitle">
						Explore movies grouped by TMDB categories. Discover your next
						favorite thriller, comedy, romance, and more.
					</p>
				</div>
			</div>

			{/* Genre Selector */}
			<div className="genre-selector-header">
				<div className="center">
					<div className="bar"></div>
					<div className="bar-text">Select Genre</div>
				</div>

				{loadingGenres ? (
					<div className="genre-list-scroll">
						{Array.from({ length: 10 }).map((_, index) => (
							<div
								className="genre-pill skeleton"
								style={{ width: "100px", height: "38px" }}
								key={index}
							/>
						))}
					</div>
				) : (
					<div className="genre-list-scroll" data-lenis-prevent>
						{movieGenres.map((g) => (
							<button
								key={g.id}
								className={`genre-pill ${g.id === activeGenreId ? "active" : ""}`}
								onClick={() => handleGenreClick(g.id)}
							>
								{g.name}
							</button>
						))}
					</div>
				)}
			</div>

			{/* Movie Grid */}
			<div className="genre-movie-grid">
				{/* Loaded Movies */}
				{genreMovies.map((movie) => (
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

				{/* See More Card */}
				{!loadingGenreMovies &&
					genrePage < genreTotalPages &&
					genreMovies.length > 0 && (
						<div
							className="movie-card see-more-card"
							onClick={handleSeeMore}
						>
							<div className="see-more-inner">
								<span className="see-more-plus">＋</span>
								<p>See More</p>
							</div>
						</div>
					)}

				{/* Loading Skeletons */}
				{loadingGenreMovies &&
					Array.from({ length: 8 }).map((_, index) => (
						<div
							className="movie-card skeleton"
							key={`skeleton-${index}`}
						>
							<div className="poster-wrapper skeleton-box" />
							<div className="movie-content">
								<div className="skeleton-text title" />
								<div className="skeleton-text date" />
							</div>
						</div>
					))}
			</div>

			{!loadingGenreMovies && genreMovies.length === 0 && activeGenreId && (
				<div className="no-reviews-state" style={{ marginTop: "40px" }}>
					<i
						className="fa-solid fa-circle-exclamation"
						style={{ fontSize: "2.5rem" }}
					></i>
					<p>No movies found for this genre.</p>
				</div>
			)}
		</div>
	);
}

export default GenreMovies;
