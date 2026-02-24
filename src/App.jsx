// import { useState } from "react";
import MovieState from "./context/MovieState";
import "./App.css";
import Home from "./Components/home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails/MovieDatails";
import Footer from "./Components/Footer/Footer";
import Watchlist from "./Components/Watchlist/Watchlist";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import IndianMovies from "./Components/Indian/IndianMovies";
import HindiMovies from "./Components/HindiMovies/HindiMovies";
import HomeIndian from "./Components/HomeIndian/HomeIndian";
import BengaliMovies from "./Components/BengaliMovies/BengaliMovies";
import TamilMovies from "./Components/TamilMovies/TamilMovies";
import TeleguMovies from "./Components/TeleguMovies/TeleguMovies";
import KanadaMovies from "./Components/KanadaMovies/KanadaMovies";
import MalayalamMovies from "./Components/MalayalamMovies/MalayalamMovies";
import ScrollToTop from "./Components/ScrollToTop";
import GlobalMovies from "./Components/Movies/MoviesGlobal";
import TvGlobal from "./Components/Movies/TvGlobal";
import TvDetails from "./Components/MovieDetails/TvDetails";
import SeasonDetails from "./Components/MovieDetails/SeasonDetails";
import EpisodeDetails from "./Components/MovieDetails/EpisodeDetails";
// import AuthSuccess from "./Components/Pages/AuthSuccess";

function App() {
	return (
		<>
			<MovieState>
				<Router>
					<ScrollToTop />
					<Navbar />
					{/* <Home /> */}
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route
							exact
							path="/globalmovies"
							element={<GlobalMovies />}
						/>
						<Route exact path="/globaltv" element={<TvGlobal />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/signup" element={<SignUp />} />
						{/* <Route exact path="/indian" element={<IndianMovies />} */}

						<Route exact path="/movie/:id" element={<MovieDetails />} />
						<Route exact path="/tv/:id" element={<TvDetails />} />
						<Route
							exact
							path="/tv/:id/season/:seasonNumber"
							element={<SeasonDetails />}
						/>
						<Route
							exact
							path="/tv/:id/season/:seasonNumber/episode/:episodeNumber"
							element={<EpisodeDetails />}
						/>
						<Route exact path="/watchlist" element={<Watchlist />} />
						<Route element={<IndianMovies />}>
							<Route
								exact
								path="/indianmovies"
								element={<HomeIndian />}
							/>
							<Route
								exact
								path="/indianmovies/hindimovies"
								element={<HindiMovies />}
							/>
							<Route
								exact
								path="/indianmovies/bengalimovies"
								element={<BengaliMovies />}
							/>
							<Route
								exact
								path="/indianmovies/tamilmovies"
								element={<TamilMovies />}
							/>
							<Route
								exact
								path="/indianmovies/telegumovies"
								element={<TeleguMovies />}
							/>
							<Route
								exact
								path="/indianmovies/kanadamovies"
								element={<KanadaMovies />}
							/>
							<Route
								exact
								path="/indianmovies/malayalammovies"
								element={<MalayalamMovies />}
							/>
						</Route>
					</Routes>
					<Footer />
				</Router>
			</MovieState>
		</>
	);
}

export default App;
