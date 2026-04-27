import React from "react";
import "./IndianMovies.css";

import LanguageBar from "../LanguageBar/LanguageBar";
import { Outlet } from "react-router-dom";
// import movieContext from "../../context/movieContext";

function Home() {
	return (
		<>
			<div className="home-wrap">
				<div className="home-title">
					<h1 className="title">MovieLand</h1>
				</div>
				<div className="language-bar-outer">
					<LanguageBar />
				</div>
				<Outlet />
			</div>
		</>
	);
}

export default Home;
