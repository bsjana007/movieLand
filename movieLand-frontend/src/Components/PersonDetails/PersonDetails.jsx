import React, { useContext, useEffect, useState } from "react";
import "./PersonDetails.css";
import "../../components/MovieDetails/MovieDetails.css";
import { useParams, useNavigate } from "react-router-dom";
import movieContext from "../../context/movieContext";
import profileLogo from "../../assets/no-profile-pic.jpeg";
import noMovie from "../../assets/no-movie.png";
import Loading from "../Loader/Loading";

function PersonDetails() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [openAsCast, setOpenAsCast] = useState(true);
	const [openAsCrew, setOpenAsCrew] = useState(false);
	const [openAsCastTV, setOpenAsCastTV] = useState(true);
	const [openAsCrewTV, setOpenAsCrewTV] = useState(false);

	const context = useContext(movieContext);
	const {
		personDetails,
		fetchPersonDetails,
		totalCredits,
		fetchTotalCredits,
		personMovieCredits,
		fetchPersonMovieCredits,
		personTVCredits,
		fetchPersonTVCredits,
	} = context;

	useEffect(() => {
		fetchPersonDetails(id);
		fetchTotalCredits(id);
		fetchPersonMovieCredits(id);
		fetchPersonTVCredits(id);
		//eslint-disable-next-line
	}, [id]);

	const formatDate = (dateString) => {
		if (!dateString) return "";
		const parts = dateString.split("-");
		if (parts.length !== 3) return dateString;
		const [year, month, day] = parts;
		const date = new Date(year, month - 1, day);
		return date.toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	const toggleOpenAsCast = () => {
		setOpenAsCast((prev) => !prev);
	};
	const toggleOpenAsCrew = () => {
		setOpenAsCrew((prev) => !prev);
	};
	const toggleOpenAsCastTV = () => {
		setOpenAsCastTV((prev) => !prev);
	};
	const toggleOpenAsCrewTV = () => {
		setOpenAsCrewTV((prev) => !prev);
	};

	if (
		!personDetails ||
		!totalCredits ||
		!personMovieCredits ||
		!personTVCredits
	) {
		return (
			<div className="page-loader">
				<Loading />
			</div>
		);
	}

	return (
		<>
			<div className="outer-section">
				<div className="outside-wrapper">
					<div className="title-section">
						<div className="title-header">
							<div className="name-section">
								<h2 className="person-name">{personDetails.name}</h2>
							</div>
							{/* <div className="profession"> */}
							<span className="profession-span">
								{personDetails.known_for_department}
							</span>
							{/* </div> */}
						</div>
						<div className="episode-rating-section">
							<div className="imdb-rating">
								<p className="rating-label">MovieLand PRO</p>
								<div className="rating-content">
									<p className="content">
										{personDetails.known_for_department?.toUpperCase()}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="img-biography-section">
						<div className="img-section">
							<img
								src={
									personDetails.profile_path
										? `https://image.tmdb.org/t/p/original${personDetails.profile_path}`
										: profileLogo
								}
								alt={personDetails.name}
								className="person-img"
							/>
						</div>
						<div className="biography-section">
							{personDetails.biography ? (
								<p className="biography">{personDetails.biography}</p>
							) : (
								<div className="error-biography">
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
										<p className="text">No Biography Available</p>
									</div>
								</div>
							)}
						</div>
					</div>

					<div className="other-details">
						<div className="bar-overview-section">
							<div className="bar"></div>
							<div className="overview-section">Overview</div>
						</div>
						<div className="overview-details">
							<div className="details">
								<div className="born-details">
									<span className="bold-born">Born</span>
									<span className="date-val">
										{personDetails.birthday !== null
											? formatDate(personDetails.birthday)
											: "Not Available"}
									</span>
								</div>

								{personDetails.deathday && (
									<div className="born-details">
										<span className="bold-born">Died</span>
										<span className="date-val">
											{personDetails.deathday !== null
												? formatDate(personDetails.deathday)
												: "Not Available"}
										</span>
									</div>
								)}

								<div className="born-details">
									<span className="bold-born">Born in</span>
									<span className="date-val">
										{personDetails.place_of_birth !== null
											? personDetails.place_of_birth
											: "Not Available"}
									</span>
								</div>

								<div className="born-details">
									<span className="bold-born">Sex</span>
									<span className="date-val">
										{personDetails.gender
											? personDetails.gender === 1
												? "Female"
												: "Male"
											: "Not Available"}
									</span>
								</div>

								<div className="born-details">
									<span className="bold-born">Total Credits</span>
									<span className="date-val">
										{totalCredits ? totalCredits : "Not Available"}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="movies">
						<div className="bar-movie-section">
							<div className="bar"></div>
							<div className="overview-section">Movies</div>
						</div>
						<div className="global-section-container">
							<div
								className={`global-section-header ${openAsCast ? "open" : ""}`}
								onClick={toggleOpenAsCast}
							>
								<div className="global-section-title-wrap">
									<h2>As Cast</h2>
								</div>
								<i
									className={`fa-solid fa-chevron-down global-toggle-icon ${openAsCast ? "rotated" : ""}`}
								></i>
							</div>
							<div
								className={`global-section-content ${openAsCast ? "expanded" : ""}`}
							>
								{personMovieCredits &&
								personMovieCredits.cast &&
								personMovieCredits.cast.length !== 0 ? (
									<section className="recommended-wrapper">
										{personMovieCredits.cast.map((movie) => (
											<div
												className="movie-card"
												key={movie.id}
												onClick={() =>
													navigate(`/movie/${movie.id}`)
												}
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
														Character:{" "}
														{movie.character
															? movie.character
															: "Not Available"}
													</p>
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
											<p className="text">No Movies Available</p>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="crew-section">
							<div className="global-section-container">
								<div
									className={`global-section-header ${openAsCrew ? "open" : ""}`}
									onClick={toggleOpenAsCrew}
								>
									<div className="global-section-title-wrap">
										<h2>As Crew</h2>
									</div>
									<i
										className={`fa-solid fa-chevron-down global-toggle-icon ${openAsCrew ? "rotated" : ""}`}
									></i>
								</div>
								<div
									className={`global-section-content ${openAsCrew ? "expanded" : ""}`}
								>
									{personMovieCredits &&
									personMovieCredits.crew &&
									personMovieCredits.crew.length !== 0 ? (
										<section className="recommended-wrapper">
											{personMovieCredits.crew.map((movie) => (
												<div
													className="movie-card"
													key={movie.id}
													onClick={() =>
														navigate(`/movie/${movie.id}`)
													}
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
															Role: {movie.job}
														</p>
														<p className="release-date">
															Release:{" "}
															{movie.release_date ||
																"Not Available"}
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
												<p className="text">No Movies Available</p>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
					<div className="movies">
						<div className="bar-movie-section">
							<div className="bar"></div>
							<div className="overview-section">TV Shows</div>
						</div>
						<div className="global-section-container">
							<div
								className={`global-section-header ${openAsCastTV ? "open" : ""}`}
								onClick={toggleOpenAsCastTV}
							>
								<div className="global-section-title-wrap">
									<h2>As Cast</h2>
								</div>
								<i
									className={`fa-solid fa-chevron-down global-toggle-icon ${openAsCastTV ? "rotated" : ""}`}
								></i>
							</div>
							<div
								className={`global-section-content ${openAsCastTV ? "expanded" : ""}`}
							>
								{personTVCredits &&
								personTVCredits.cast &&
								personTVCredits.cast.length !== 0 ? (
									<section className="recommended-wrapper">
										{personTVCredits.cast.map((movie) => (
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
													<h4 className="movie-title">
														{movie.name}
													</h4>
													<p className="release-date">
														Character:{" "}
														{movie.character
															? movie.character
															: "Not Available"}
													</p>
													<p className="release-date">
														Release: {movie.first_air_date}
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
											<p className="text">No Movies Available</p>
										</div>
									</div>
								)}
							</div>
						</div>
						<div className="crew-section">
							<div className="global-section-container">
								<div
									className={`global-section-header ${openAsCrewTV ? "open" : ""}`}
									onClick={toggleOpenAsCrewTV}
								>
									<div className="global-section-title-wrap">
										<h2>As Crew</h2>
									</div>
									<i
										className={`fa-solid fa-chevron-down global-toggle-icon ${openAsCrewTV ? "rotated" : ""}`}
									></i>
								</div>
								<div
									className={`global-section-content ${openAsCrewTV ? "expanded" : ""}`}
								>
									{personTVCredits &&
									personTVCredits.crew &&
									personTVCredits.crew.length !== 0 ? (
										<section className="recommended-wrapper">
											{personTVCredits.crew.map((movie) => (
												<div
													className="movie-card"
													key={movie.id}
													onClick={() =>
														navigate(`/tv/${movie.id}`)
													}
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
															{movie.name}
														</h4>
														<p className="release-date">
															Role: {movie.job}
														</p>
														<p className="release-date">
															Release: {movie.first_air_date}
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
												<p className="text">No Movies Available</p>
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PersonDetails;
