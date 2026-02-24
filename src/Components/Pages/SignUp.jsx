import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
	const [credentials, setCredentials] = useState({
		name: "",
		email: "",
		password: "",
		cpassword: "",
	});

	const passwordMatch = credentials.password === credentials.cpassword;
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		const { name, email, password } = credentials;
		e.preventDefault();
		const response = await fetch(`http://localhost:5000/api/auth/signup`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ name, email, password }),
		});
		const data = await response.json();
		console.log(data);
		if (data.token) {
			localStorage.setItem("token", data.token);
			navigate("/");
			return true;
		} else {
			return false;
		}
	};

	const onChange = async (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="signup-outer">
				<div className="signup-wrapper">
					<h1 className="title-header">Movieland</h1>
					<span className="header-span">Start Your Cinema Journey</span>
					<div className="signup-content" onSubmit={handleSubmit}>
						<h2>Create Account</h2>
						<span className="header-span">
							Join thousands of movie enthusiasts
						</span>
						<form action="" className="signup-form">
							<div className="form-element">
								<label htmlFor="full-name" className="signup-label">
									Full Name
								</label>
								<div className="input-wrapper">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-user"
										style={{
											position: "absolute",
											left: "7px",
											color: "rgba(255, 255, 255, 0.5)",
											pointerEvents: "none",
										}}
									>
										<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
										<circle cx="12" cy="7" r="4"></circle>
									</svg>
									<input
										onChange={onChange}
										placeholder="John Perry"
										required
										type="text"
										id="full-name"
										className="signup-input-special"
										name="name"
										autocomplete="off"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<label htmlFor="email" className="signup-label">
									Email Address
								</label>
								<div className="input-wrapper">
									<i
										className="icon-margin fa-regular fa-envelope fa-xl"
										style={{ color: "#a1a1a1" }}
									></i>
									<input
										onChange={onChange}
										placeholder="your.email@example.com"
										required
										type="email"
										id="email"
										className="signup-input"
										name="email"
										autocomplete="off"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<label htmlFor="password" className="signup-label">
									Password
								</label>
								<div className="input-wrapper">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-lock"
										style={{
											position: "absolute",
											left: "7px",
											color: "rgba(255, 255, 255, 0.5)",
											pointerEvents: "none",
										}}
									>
										<rect
											width="18"
											height="11"
											x="3"
											y="11"
											rx="2"
											ry="2"
										></rect>
										<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
									</svg>
									<input
										onChange={onChange}
										value={credentials.password}
										placeholder="Create a strong password"
										required
										type="password"
										id="password"
										className="signup-input-special"
										minLength={8}
										name="password"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<label
									htmlFor="confirm-password"
									className="signup-label"
								>
									Confirm Password
								</label>
								<div className="input-wrapper">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="lucide lucide-lock"
										style={{
											position: "absolute",
											left: "7px",
											color: "rgba(255, 255, 255, 0.5)",
											pointerEvents: "none",
										}}
									>
										<rect
											width="18"
											height="11"
											x="3"
											y="11"
											rx="2"
											ry="2"
										></rect>
										<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
									</svg>
									<input
										onChange={onChange}
										value={credentials.cpassword}
										placeholder="Confirm Your Password"
										required
										type="password"
										id="confirm-password"
										className="signup-input-special"
										minLength={8}
										name="cpassword"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<label htmlFor="checkbox" className="checkbox-label">
									<input
										onChange={onChange}
										id="checkbox"
										type="checkbox"
										className="custom-checkbox"
									/>
									<span className="checkbox-span">
										I agree to the{" "}
										<Link to="/" className="checkbox-span-link">
											Terms of Service
										</Link>{" "}
										and{" "}
										<Link to="/" className="checkbox-span-link">
											Privacy Policy
										</Link>{" "}
									</span>
								</label>
							</div>
							{credentials.cpassword && !passwordMatch && (
								<p className="text-danger">Passwords do not match</p>
							)}
							<button className="signup-page-btn">
								Create Account{" "}
								<i className="fa-solid fa-arrow-right"></i>
							</button>
							<div className="form-element-span">
								<span className="span-border"></span>
								<span className="span-text">or continue with</span>
								<span className="span-border"></span>
							</div>
							<div className="form-element-continue">
								<div className="continue-with">
									<i className="fa-brands fa-google"></i>
									<p>Google</p>
								</div>
								<div className="continue-with">
									<i className="fa-brands fa-github"></i>
									<p>Github</p>
								</div>
							</div>
							<div className="form-element-continue">
								<p className="element-text">
									Already have an account?
									<Link className="forget-link" to="/login">
										{" "}
										Login
									</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
