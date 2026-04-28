import React from "react";
import "./LanguageBar.css";
import { Link, useNavigate } from "react-router-dom";

function LanguageBar() {
	const navigate = useNavigate();
	return (
		<>
			<div className="language-bar-wrapper">
				<div className="languages">
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies")}
					>
						<Link className="language-links" to={"/indianmovies"}>
							All
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/hindimovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/hindimovies"}
						>
							Hindi
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/bengalimovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/bengalimovies"}
						>
							Bengali
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/tamilmovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/tamilmovies"}
						>
							Tamil
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/telegumovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/telegumovies"}
						>
							Telegu
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/kanadamovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/kanadamovies"}
						>
							Kanada
						</Link>
					</div>
					<div
						className="language-links-btn"
						onClick={() => navigate("/indianmovies/malayalammovies")}
					>
						<Link
							className="language-links"
							to={"/indianmovies/malayalammovies"}
						>
							Malayalam
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default LanguageBar;
