import React from "react";
import "./Footer.css";
import logo from "../../assets/movieLand.png";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<>
			<footer className="no-select">
				<div className="footer-panel">
					<div className="footer-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="footer-links">
						<ul>
							<p className="footer-text">Category</p>
							<li>
								<Link className="footer-link" to="/">
									Trending
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Popular
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Top Rated
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Upcoming
								</Link>
							</li>
						</ul>
						<ul>
							<p className="footer-text">Company</p>
							<li>
								<Link className="footer-link" to="/">
									About Us
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Carrers
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link className="footer-link" to="/">
									Terms & Conditions
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
