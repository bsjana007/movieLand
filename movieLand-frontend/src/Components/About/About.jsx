import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

function About() {
	return (
		<div className="about-container">
			<div className="about-hero">
				<h1 className="about-title">About MovieLand</h1>
				<p className="about-subtitle">Your Personal Cinema Collection</p>
				<div className="about-divider"></div>
				<p className="about-description">
					MovieLand is your ultimate destination for exploring the vast
					world of movies and TV shows. Whether you are a fan of global
					blockbusters or regional masterpieces, we bring the cinema to
					your fingertips. Discover trending content, explore detailed
					information about your favorite actors and directors, and curate
					your own personalized watchlist.
				</p>
			</div>

			<div className="about-mission">
				<div className="mission-content">
					<h2 className="section-title">Our Mission</h2>
					<p>
						At MovieLand, our mission is to break down the barriers
						between different film industries. We believe that great
						stories transcend language, borders, and genres. By bringing
						Hollywood blockbusters, acclaimed Indian cinema, and
						sensational global TV shows into one seamless platform, we aim
						to deliver an unparalleled entertainment catalog to cinephiles
						everywhere.
					</p>
				</div>
			</div>

			<div className="about-features-section">
				<h2 className="section-title">What We Offer</h2>
				<div className="features-grid">
					<div className="feature-card">
						<i className="fa-solid fa-earth-americas feature-icon"></i>
						<h3>Global Collection</h3>
						<p>
							Access thousands of movies and TV shows from around the
							world, updated in real-time.
						</p>
					</div>
					<div className="feature-card">
						<i className="fa-solid fa-language feature-icon"></i>
						<h3>Regional Content</h3>
						<p>
							Dive deep into Indian cinema with dedicated sections for
							Hindi, Bengali, Tamil, Telugu, and more.
						</p>
					</div>
					<div className="feature-card">
						<i className="fa-regular fa-heart feature-icon"></i>
						<h3>Personalized Watchlist</h3>
						<p>
							Save your favorite content and never lose track of what you
							want to watch next.
						</p>
					</div>
					<div className="feature-card">
						<i className="fa-solid fa-magnifying-glass feature-icon"></i>
						<h3>Smart Search</h3>
						<p>
							Instantly find exactly what you're looking for with our
							powerful, real-time search functionality.
						</p>
					</div>
					<div className="feature-card">
						<i className="fa-solid fa-film feature-icon"></i>
						<h3>Detailed Insights</h3>
						<p>
							Explore comprehensive details including cast, crew,
							ratings, and similar recommendations.
						</p>
					</div>
					<div className="feature-card">
						<i className="fa-solid fa-desktop feature-icon"></i>
						<h3>Seamless Experience</h3>
						<p>
							Enjoy a responsive and intuitive layout designed for both
							desktop and mobile viewing.
						</p>
					</div>
				</div>
			</div>

			<div className="about-tech-section">
				<h2 className="section-title">Powered By</h2>
				<div className="tech-stack">
					<span className="tech-badge">React</span>
					<span className="tech-badge">Node.js</span>
					<span className="tech-badge">TMDB API</span>
					<span className="tech-badge">Express.js</span>
					<span className="tech-badge">MongoDB</span>
					<span className="tech-badge">Vercel</span>
					<span className="tech-badge">Render</span>
				</div>
			</div>

			<div className="about-author-section">
				<h2 className="section-title">Meet the Developer</h2>
				<div className="author-card">
					<div className="author-info">
						<h3>
							Built & Maintained by{" "}
							<span className="author-name">Bhabani Sankar Jana</span>
						</h3>
						<p>Passionate about creating seamless web experiences.</p>
					</div>
					<div className="author-socials">
						<a
							href="https://github.com/bsjana007"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
							title="GitHub"
						>
							<i className="fa-brands fa-github"></i>
						</a>
						<a
							href="https://linkedin.com/in/bhabanisankarjana"
							target="_blank"
							rel="noopener noreferrer"
							className="social-link"
							title="LinkedIn"
						>
							<i className="fa-brands fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>

			<div className="about-cta">
				<h2>Ready to Dive In?</h2>
				<p>Your next favorite story is just a search away.</p>
				<Link to="/" className="cta-button">
					Start Exploring
				</Link>
			</div>
		</div>
	);
}

export default About;
