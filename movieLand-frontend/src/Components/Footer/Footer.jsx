import React from "react";
import "./Footer.css";
import logo from "../../assets/movieLand.png";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="footer-container no-select">
			<div className="footer-top">
				<div className="footer-brand">
					<div className="footer-logo">
						<Link to="/">
							<img src={logo} alt="MovieLand Logo" />
						</Link>
					</div>
					<p className="footer-description">
						Your personal cinema collection. Discover, explore, and curate your favorite movies and TV shows from around the globe.
					</p>
					<div className="footer-socials">
						<a href="https://github.com/bsjana007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<i className="fa-brands fa-github"></i>
						</a>
						<a href="https://linkedin.com/in/bhabanisankarjana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
						<a href="https://twitter.com/bsjana_07" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
							<i className="fa-brands fa-twitter"></i>
						</a>
						<a href="https://instagram.com/bsjana_07" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
							<i className="fa-brands fa-instagram"></i>
						</a>
					</div>
				</div>

				<div className="footer-links-grid">
					<div className="footer-link-group">
						<h4 className="footer-title">Explore</h4>
						<ul>
							<li><Link className="footer-link" to="/">Trending</Link></li>
							<li><Link className="footer-link" to="/globalmovies">Global Movies</Link></li>
							<li><Link className="footer-link" to="/indianmovies">Indian Cinema</Link></li>
							<li><Link className="footer-link" to="/globaltv">TV Shows</Link></li>
						</ul>
					</div>

					<div className="footer-link-group">
						<h4 className="footer-title">Company</h4>
						<ul>
							<li><Link className="footer-link" to="/about">About Us</Link></li>
							<li><Link className="footer-link" to="/">Careers</Link></li>
							<li><Link className="footer-link" to="/privacy">Privacy Policy</Link></li>
							<li><Link className="footer-link" to="/terms">Terms of Service</Link></li>
						</ul>
					</div>

					<div className="footer-link-group">
						<h4 className="footer-title">Legal</h4>
						<ul>
							<li><Link className="footer-link" to="/">Cookie Policy</Link></li>
							<li><Link className="footer-link" to="/">Accessibility</Link></li>
							<li><Link className="footer-link" to="/">Contact Us</Link></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="footer-bottom">
				<div className="footer-bottom-divider"></div>
				<div className="footer-bottom-content">
					<p className="copyright-text">
						&copy; {new Date().getFullYear()} MovieLand. All rights reserved.
					</p>
					<p className="developer-tag">
						Built with <i className="fa-solid fa-heart" style={{color: '#e25555'}}></i> by Bhabani Sankar Jana
					</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
