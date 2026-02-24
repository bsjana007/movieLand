import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/movieLand.png";
import noMovie from "../../assets/no-movie.png";
import { Link, useNavigate } from "react-router-dom";
import movieContext from "../../context/movieContext";
// import logo from "../../assets/movie-light.png";

function Navbar() {
	const [moviesopen, setMoviesOpen] = useState(false);
	const [tvopen, setTvOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	// const [activeItem, setActiveItem] = useState(null);
	const { searchAll } = useContext(movieContext);
	const dropdownRef = useRef(null);
	const searchRef = useRef(null);
	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		navigate("/login");
	};

	//Debounce search
	useEffect(() => {
		const isActive = true;
		if (!query.trim()) {
			if (isActive) {
				//eslint-disable-next-line
				setResults([]);
				setSearchOpen(false);
			}

			return;
		}

		const timer = setTimeout(async () => {
			try {
				const data = await searchAll(query);
				if (isActive) {
					setResults(data.slice(0, 8));
					setSearchOpen(true);
				}
			} catch (error) {
				console.error(error);
			}
		}, 400);

		return () => clearTimeout(timer);
		//eslint-disable-next-line
	}, [query]);

	const handleSearchClick = (item) => {
		setQuery("");
		setSearchOpen(false);

		if (item.media_type === "movie") {
			navigate(`/movie/${item.id}`);
		} else if (item.media_type === "tv") {
			navigate(`/tv/${item.id}`);
		}
	};

	useEffect(() => {
		function handleClickOutside(e) {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setTvOpen(false);
				setMoviesOpen(false);
			}

			if (searchRef.current && !searchRef.current.contains(e.target)) {
				setSearchOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.addEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleMoviesClick = () => {
		setMoviesOpen(false);
	};
	const handleTVClick = () => {
		setTvOpen(false);
	};
	return (
		<>
			<nav className="navbar">
				<div className="nav-outer item-padding">
					<div className="nav-logo">
						<Link to="/">
							<img className="logo" src={logo} alt="movieLand" />
						</Link>
					</div>
					<div className="nav-links">
						<ul className="nav-item">
							<li className="nav-link item-padding">
								<Link to="/">Home</Link>
							</li>
							<li
								ref={dropdownRef}
								className={`nav-link item-padding dropdown-parent ${moviesopen ? "open" : ""}`}
								onClick={() => setMoviesOpen(!moviesopen)}
							>
								{/* Movies */}
								<span className="nav-link">Movies</span>
								<ul className="dropdown-menu">
									<li>
										<Link
											to="/globalmovies"
											onClick={handleMoviesClick}
										>
											Global
										</Link>
									</li>
									<div className="divider"></div>
									<li>
										<Link
											to="/indianmovies"
											onClick={handleMoviesClick}
										>
											Indian
										</Link>
									</li>
									{/* <li>
										<Link to="/movies/upcoming">Upcoming</Link>
									</li> */}
								</ul>
							</li>
							<li
								ref={dropdownRef}
								className={`nav-link item-padding dropdown-parent ${tvopen ? "open" : ""}`}
								onClick={() => setTvOpen(!open)}
							>
								{/* Movies */}
								<span className="nav-link">TV</span>
								<ul className="dropdown-menu">
									<li>
										<Link to="/globaltv" onClick={handleTVClick}>
											Global
										</Link>
									</li>
									<div className="divider"></div>
									<li>
										<Link to="/indian" onClick={handleTVClick}>
											Indian
										</Link>
									</li>
									{/* <li>
										<Link to="/movies/upcoming">Upcoming</Link>
									</li> */}
								</ul>
							</li>
							<li className="nav-link item-padding">
								<Link to="/about">About</Link>
							</li>
						</ul>
					</div>
					<div className="nav-search">
						<input
							type="search"
							placeholder="Search Movies Here"
							className="search item-padding"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onFocus={() => query && setSearchOpen(true)}
						/>
						{/* <button
							type="submit"
							className="search-button"
							aria-label="Name"
						>
							<i className="fa-solid fa-magnifying-glass item-padding"></i>
						</button> */}
						{/* search dropdown */}
						{searchOpen && (
							<div ref={searchRef} className="search-dropdown">
								{results.length === 0 && (
									<div className="search-empty">No Results</div>
								)}
								{results.map((item) => (
									<div
										className="search-item-row"
										key={`${item.media_type}-${item.id}`}
										onClick={() => handleSearchClick(item)}
									>
										{/* LEFT SIDE */}
										<div className="search-left">
											<span className="search-badge">
												{item.media_type.toUpperCase()}
											</span>
											<span className="search-title">
												{item.media_type === "movie"
													? item.title
													: item.name}
											</span>
										</div>

										{/* RIGHT SIDE (POSTER) */}
										<div className="search-right">
											<img
												src={
													item.poster_path || item.profile_path
														? `https://image.tmdb.org/t/p/w92${
																item.poster_path ||
																item.profile_path
															}`
														: noMovie
												}
												alt="poster"
											/>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
					<div className="nav-wish">
						<Link to="watchlist">
							<i className="fa-regular fa-heart fa-xl"></i>
						</Link>
					</div>
					{!localStorage.getItem("token") ? (
						<div className="nav-login">
							<Link className="login-btn item-padding" to={"/login"}>
								Login
							</Link>
							<Link className="signup-btn item-padding" to={"/signup"}>
								Signup
							</Link>
						</div>
					) : (
						<div className="nav-login" onClick={() => navigate("/login")}>
							<Link
								onClick={handleLogout}
								className="login-btn item-padding"
								to={"/login"}
							>
								Logout{" "}
								<i className="fa fa-sign-out" aria-hidden="true"></i>
							</Link>
						</div>
					)}
				</div>
			</nav>
		</>
	);
}

export default Navbar;
