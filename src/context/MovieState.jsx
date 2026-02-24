import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import MovieContext from "./movieContext";

function MovieState(props) {
	// const { id } = useParams();
	// const accountId = 22640956;
	const host = "https://api.themoviedb.org/3";
	const options = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: import.meta.env.VITE_TMDB_BEARER,
		},
	};

	const backendHost = "http://localhost:5000";
	// const token = localStorage.getItem("token");

	const moviesInitial = [];
	const [popularMovie, setPopularMovies] = useState(moviesInitial);
	const [topRatedMovie, setTopRatedMovies] = useState(moviesInitial);
	const [upcomingMovie, setUpcomingMovies] = useState(moviesInitial);
	const [trendingMovie, setTrendingMovie] = useState(moviesInitial);
	const [trendingIndianMovie, setTrendingIndianMovie] =
		useState(moviesInitial);
	const [popularIndianMovie, setPopularIndianMovie] = useState(moviesInitial);
	const [topRatedIndianMovie, setTopRatedIndianMovie] =
		useState(moviesInitial);
	const [upcomingIndianMovie, setUpcomingIndianMovie] =
		useState(moviesInitial);
	const [hindiMovies, setHindiMovies] = useState(moviesInitial);
	const [bengaliMovies, setBengaliMovies] = useState(moviesInitial);
	const [tamilMovies, setTamilMovies] = useState(moviesInitial);
	const [teleguMovies, setTeleguMovies] = useState(moviesInitial);
	const [kanadaMovies, setKanadaMovies] = useState(moviesInitial);
	const [malayalamMovies, setMalayalamMovies] = useState(moviesInitial);
	const [movieDetails, setMovieDetails] = useState(null);
	const [loadingDetails, setLoadingDetails] = useState(false);
	const [movieImages, setMovieImages] = useState([]);
	const [movieReviews, setMovieReviews] = useState([]);
	const [similarMovies, setSimilarMovies] = useState([]);
	const [movieCast, setMovieCast] = useState([]);
	const [movieCrew, setMovieCrew] = useState([]);
	const [recommended, setRecommended] = useState([]);
	const [movieVideos, setMovieVideos] = useState([]);
	const [providers, setProviders] = useState([]);
	const [watchlist, setWatchlist] = useState([]);
	const [watchlistTv, setWatchlistTv] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);
	const [trendingTvShows, setTrendingTvShows] = useState(moviesInitial);
	const [popularTvShows, setPopularTvShows] = useState(moviesInitial);
	const [topRatedTvShows, setTopRatedTvShows] = useState(moviesInitial);
	const [latestTvShows, setLatestTvShows] = useState(moviesInitial);
	const [tvDetails, setTvDetails] = useState(null);
	const [tvVideos, setTvVideos] = useState(moviesInitial);
	const [tvImages, setTvImages] = useState(moviesInitial);
	const [tvReviews, setTvReviews] = useState(moviesInitial);
	const [similarTvShows, setSimilarTvShows] = useState([]);
	const [recommendedTvShows, setRecommendedTvShows] = useState(moviesInitial);
	const [tvCast, setTvCast] = useState([]);
	const [tvCrew, setTvCrew] = useState([]);
	const [tvProviders, setTvProviders] = useState([]);
	const [seasonDetails, setSeasonDetails] = useState(null);
	const [episodeDetails, setEpisodeDetails] = useState(null);
	const [seasonVideos, setSeasonVideos] = useState(moviesInitial);
	const [episodeVideos, setEpisodeVideos] = useState(moviesInitial);

	const getAuthHeaders = () => {
		const token = localStorage.getItem("token");
		if (!token) {
			console.warn("no token found");
			return {};
		}
		// console.log(token);

		return {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		};
	};

	const popularMovies = async () => {
		const response = await fetch(`${host}/movie/popular`, options);
		const data = await response.json();
		setPopularMovies(data.results);
		// console.log(data.results);
	};

	const topRatedMovies = async () => {
		const response = await fetch(`${host}/movie/top_rated`, options);
		const data = await response.json();
		setTopRatedMovies(data.results);
	};

	const upcomingMovies = async () => {
		const response = await fetch(`${host}/movie/upcoming`, options);
		const data = await response.json();
		setUpcomingMovies(data.results);
		// console.log(data.results);
	};

	const trendingMovies = async () => {
		const response = await fetch(`${host}/trending/movie/week`, options);
		const data = await response.json();
		setTrendingMovie(data.results);
		// console.log(data.results);
	};

	const trendingIndianMovies = async () => {
		const response = await fetch(
			`${host}/trending/movie/week?region=IN`,
			options,
		);
		const data = await response.json();
		setTrendingIndianMovie(data.results);
	};
	const popularIndianMovies = async () => {
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&sort_by=popularity.desc&vote_count.gte=100`,
			options,
		);
		const data = await response.json();
		setPopularIndianMovie(data.results);
	};
	const topRatedIndianMovies = async () => {
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&sort_by=vote_average.desc&vote_count.gte=200`,
			options,
		);
		const data = await response.json();
		setTopRatedIndianMovie(data.results);
	};
	const upcomingIndianMovies = async () => {
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&sort_by=release_date.desc&release_date.gte=2024-01-01`,
			options,
		);
		const data = await response.json();
		setUpcomingIndianMovie(data.results);
	};

	const fetchHindiMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=hi&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setHindiMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		// console.log("Fetching page:", page);

		setPage((prev) => prev + 1);
		setLoading(false);
	};
	const fetchBengaliMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=bn&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setBengaliMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		setPage((prev) => prev + 1);
		setLoading(false);
	};
	const fetchTamilMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=ta&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setTamilMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		setPage((prev) => prev + 1);
		setLoading(false);
	};
	const fetchTeleguMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=te&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setTeleguMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		setPage((prev) => prev + 1);
		setLoading(false);
	};
	const fetchKanadaMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=kn&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setKanadaMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		setPage((prev) => prev + 1);
		setLoading(false);
	};
	const fetchMalayalamMovies = async () => {
		if (loading) return; // Prevent multiple simultaneous fetches
		if (page > totalPages) return;
		setLoading(true);
		const response = await fetch(
			`${host}/discover/movie?with_origin_country=IN&with_original_language=ml&sort_by=popularity.desc&page=${page}`,
			options,
		);
		const data = await response.json();
		setMalayalamMovies((prev) => [...prev, ...data.results]);
		setTotalPages(data.total_pages);
		setPage((prev) => prev + 1);
		setLoading(false);
	};

	const fetchMovieDetails = async (id) => {
		setLoadingDetails(true);
		setMovieDetails(null);
		try {
			const response = await fetch(`${host}/movie/${id}`, options);
			const data = await response.json();
			setMovieDetails(data);
		} catch (error) {
			console.error("Error Fetching Movie Details:", error);
		} finally {
			setLoadingDetails(false);
		}
		// console.log(data);
	};

	const fetchMovieImages = async (id) => {
		const response = await fetch(`${host}/movie/${id}/images`, options);
		const data = await response.json();
		// console.log(data);
		setMovieImages(data.backdrops || []);
	};

	const fetchReviews = async (id) => {
		const response = await fetch(`${host}/movie/${id}/reviews`, options);
		const data = await response.json();
		// console.log(data.results);
		setMovieReviews(data.results);
	};

	const fetchSimilarMovies = async (id) => {
		const response = await fetch(`${host}/movie/${id}/similar`, options);
		const data = await response.json();
		setSimilarMovies(data.results);
		// console.log(data.results);
	};

	const fetchMovieCredits = async (id) => {
		const response = await fetch(`${host}/movie/${id}/credits`, options);
		const data = await response.json();
		setMovieCast(data.cast || []);
		// console.log(data);
		setMovieCrew(data.crew || []);
	};

	const fetchRecommended = async (id) => {
		const response = await fetch(
			`${host}/movie/${id}/recommendations`,
			options,
		);
		const data = await response.json();
		setRecommended(data.results);
	};

	const fetchMovieVideos = async (id) => {
		const response = await fetch(`${host}/movie/${id}/videos`, options);
		const data = await response.json();
		// console.log(data.results);
		setMovieVideos(data.results || []);
		return data.results || [];
	};

	const fetchProviders = async (id) => {
		const response = await fetch(
			`${host}/movie/${id}/watch/providers`,
			options,
		);
		const data = await response.json();
		// console.log(data.results?.IN?.flatrate);

		setProviders(data.results?.IN?.flatrate || []);
	};

	const fetchWatchlist = async () => {
		try {
			// console.log("send", getAuthHeaders());
			const response = await fetch(`${backendHost}/api/watchlist`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			// console.log(localStorage.getItem("token"));

			const data = await response.json();
			// console.log(data);

			setWatchlist(Array.isArray(data) ? data : []);
			// console.log(getAuthHeaders());
		} catch {
			setWatchlist([]);
		}
	};

	const addToWatchlist = async (movie) => {
		console.log("adding movie", movie);

		const response = await fetch(`${backendHost}/api/watchlist/add`, {
			method: "POST",
			headers: getAuthHeaders(),
			body: JSON.stringify({
				movieId: movie.id,
				title: movie.title || movie.name,
				poster_path: movie.poster_path,
				vote_average: movie.vote_average,
				release_date: movie.release_date || movie.first_air_date,
				media_type: "movie",
			}),
		});
		const data = await response.json();
		setWatchlist(data);
		console.log(data);
	};
	const addToWatchlistTv = async (movie) => {
		console.log("adding movie", movie);

		const response = await fetch(`${backendHost}/api/watchlist/add`, {
			method: "POST",
			headers: getAuthHeaders(),
			body: JSON.stringify({
				movieId: movie.id,
				title: movie.title || movie.name,
				poster_path: movie.poster_path,
				vote_average: movie.vote_average,
				release_date: movie.release_date || movie.first_air_date,
				media_type: "tv",
			}),
		});
		const data = await response.json();
		setWatchlistTv(data);
		console.log(data);
	};

	const removeFromWatchlist = async (movieId) => {
		const response = await fetch(`${backendHost}/api/watchlist/${movieId}`, {
			method: "DELETE",
			headers: getAuthHeaders(),
		});
		const data = await response.json();
		setWatchlist(data);
	};

	const removeFromWatchlistTv = async ({ movieId, media_type }) => {
		console.log("removing movie", movieId);

		const response = await fetch(`${backendHost}/api/watchlist/${movieId}`, {
			method: "DELETE",
			headers: getAuthHeaders(),
			body: JSON.stringify({
				movieId,
				media_type,
			}),
		});
		const data = await response.json();
		setWatchlistTv(data);
		console.log(data);
	};

	const searchAll = async (query) => {
		if (!query.trim()) return [];
		const response = await fetch(
			`${host}/search/multi?query=${encodeURIComponent(query)}`,
			options,
		);
		const data = await response.json();
		// console.log(data.results);

		return data.results || [];
	};

	const fetchTrendingTvShows = async () => {
		const response = await fetch(`${host}/trending/tv/week`, options);
		const data = await response.json();
		console.log(data.results);
		setTrendingTvShows(data.results);
	};

	const fetchPopularTvShows = async () => {
		const response = await fetch(`${host}/tv/popular`, options);
		const data = await response.json();
		setPopularTvShows(data.results);
	};

	const fetchTopRatedTvShows = async () => {
		const response = await fetch(`${host}/tv/top_rated`, options);
		const data = await response.json();
		setTopRatedTvShows(data.results);
	};

	const fetchLatestTvShows = async () => {
		const response = await fetch(`${host}/tv/airing_today`, options);
		const data = await response.json();
		setLatestTvShows(data.results);
	};

	const fetchTvDetails = async (id) => {
		setLoadingDetails(true);
		setTvDetails(null);
		try {
			const response = await fetch(`${host}/tv/${id}`, options);
			const data = await response.json();
			// console.log(data);
			setTvDetails(data);
		} catch (error) {
			console.error("Error Fetching Tv Details:", error);
		} finally {
			setLoadingDetails(false);
		}
		// console.log(data);
	};

	const fetchTvVideos = async (id) => {
		const response = await fetch(`${host}/tv/${id}/videos`, options);
		const data = await response.json();
		// console.log(data.results);
		setTvVideos(data.results || []);
		return data.results || [];
	};

	const fetchTvImages = async (id) => {
		const response = await fetch(`${host}/tv/${id}/images`, options);
		const data = await response.json();
		// console.log(data);
		setTvImages(data.backdrops || []);
	};

	const fetchTvReviews = async (id) => {
		const response = await fetch(`${host}/tv/${id}/reviews`, options);
		const data = await response.json();
		// console.log(data.results);
		setTvReviews(data.results);
	};

	const fetchSimilarTvShows = async (id) => {
		const response = await fetch(`${host}/tv/${id}/similar`, options);
		const data = await response.json();
		setSimilarTvShows(data.results);
		// console.log(data.results);
	};
	const fetchRecommendedTvShows = async (id) => {
		const response = await fetch(`${host}/tv/${id}/recommendations`, options);
		const data = await response.json();
		setRecommendedTvShows(data.results);
	};

	const fetchTvCredits = async (id) => {
		const response = await fetch(`${host}/tv/${id}/credits`, options);
		const data = await response.json();
		setTvCast(data.cast || []);
		// console.log(data);
		setTvCrew(data.crew || []);
	};

	const fetchTvProviders = async (id) => {
		const response = await fetch(`${host}/tv/${id}/watch/providers`, options);
		const data = await response.json();
		// console.log(data.results?.IN?.flatrate);

		setTvProviders(data.results?.IN?.flatrate || []);
	};

	const fetchSeasonDetails = async (id, seasonNumber) => {
		setLoadingDetails(true);
		try {
			const response = await fetch(
				`${host}/tv/${id}/season/${seasonNumber}`,
				options,
			);
			const data = await response.json();
			setSeasonDetails(data);
			// console.log(data);
		} catch (error) {
			console.error("Error Fetching Tv Details:", error);
		} finally {
			setLoadingDetails(false);
		}
	};

	const fetchEpisodeDetails = async (id, seasonNumber, episodeNumber) => {
		setLoadingDetails(true);
		try {
			const response = await fetch(
				`${host}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}`,
				options,
			);
			const data = await response.json();
			setEpisodeDetails(data);
			console.log(data);
		} catch (error) {
			console.error("Error Fetching Tv Details:", error);
		} finally {
			setLoadingDetails(false);
		}
	};

	const fetchSeasonVideos = async (id, seasonNumber) => {
		const response = await fetch(
			`${host}/tv/${id}/season/${seasonNumber}/videos`,
			options,
		);
		const data = await response.json();
		setSeasonVideos(data.results || []);
		return data.results || [];
	};
	const fetchEpisodeVideos = async (id, seasonNumber, episodeNumber) => {
		const response = await fetch(
			`${host}/tv/${id}/season/${seasonNumber}/episode/${episodeNumber}/videos`,
			options,
		);
		const data = await response.json();
		setEpisodeVideos(data.results || []);
		return data.results || [];
	};

	return (
		<MovieContext.Provider
			value={{
				page,
				totalPages,
				loading,
				loadingDetails,
				popularMovie,
				topRatedMovie,
				upcomingMovie,
				trendingMovie,
				trendingIndianMovie,
				popularIndianMovie,
				topRatedIndianMovie,
				upcomingIndianMovie,
				hindiMovies,
				bengaliMovies,
				tamilMovies,
				teleguMovies,
				kanadaMovies,
				malayalamMovies,
				movieDetails,
				movieImages,
				movieReviews,
				similarMovies,
				movieCast,
				movieCrew,
				recommended,
				movieVideos,
				providers,
				watchlist,
				watchlistTv,
				trendingTvShows,
				popularTvShows,
				topRatedTvShows,
				latestTvShows,
				tvDetails,
				tvVideos,
				tvImages,
				tvReviews,
				similarTvShows,
				recommendedTvShows,
				tvCrew,
				tvCast,
				tvProviders,
				seasonDetails,
				episodeDetails,
				seasonVideos,
				episodeVideos,
				popularMovies,
				topRatedMovies,
				upcomingMovies,
				trendingMovies,
				fetchMovieDetails,
				fetchMovieImages,
				fetchReviews,
				fetchSimilarMovies,
				fetchMovieCredits,
				fetchRecommended,
				addToWatchlist,
				fetchMovieVideos,
				fetchProviders,
				fetchWatchlist,
				removeFromWatchlist,
				trendingIndianMovies,
				popularIndianMovies,
				topRatedIndianMovies,
				upcomingIndianMovies,
				fetchHindiMovies,
				fetchBengaliMovies,
				fetchTamilMovies,
				fetchTeleguMovies,
				fetchKanadaMovies,
				fetchMalayalamMovies,
				searchAll,
				fetchTrendingTvShows,
				fetchPopularTvShows,
				fetchTopRatedTvShows,
				fetchLatestTvShows,
				fetchTvDetails,
				fetchTvVideos,
				fetchTvImages,
				fetchTvReviews,
				fetchSimilarTvShows,
				fetchRecommendedTvShows,
				fetchTvCredits,
				fetchTvProviders,
				addToWatchlistTv,
				removeFromWatchlistTv,
				fetchSeasonDetails,
				fetchEpisodeDetails,
				fetchSeasonVideos,
				fetchEpisodeVideos,
			}}
		>
			{props.children}
		</MovieContext.Provider>
	);
}

export default MovieState;
