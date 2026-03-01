import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
// import movieContext from "../../context/movieContext";

function Login() {
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const navigate = useNavigate();
	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch(`http://localhost:5000/api/auth/login`, {
			method: "POST",
			headers: {
				"content-Type": "application/json",
			},
			body: JSON.stringify({
				email: credentials.email,
				password: credentials.password,
			}),
		});
		const data = await response.json();
		if (data.token) {
			localStorage.setItem("token", data.token);
			navigate("/");
			return true;
		} else {
			return false;
		}
	};

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	return (
		<>
			<div className="login-outer">
				<div className="login-wrapper">
					<h1 className="title-header">MovieLand</h1>
					<span className="header-span">
						Your Personal Cinema Collection
					</span>
					<div className="login-content">
						<h2>Welcome Back</h2>
						<span className="header-span">
							Login to access interesting movies
						</span>
						<form
							className="login-form"
							action=""
							onSubmit={handleSubmit}
						>
							<div className="form-element">
								<label htmlFor="email" className="login-label">
									Email Address
								</label>
								<div className="input-wrapper">
									<i
										className="icon-margin fa-regular fa-envelope fa-xl"
										style={{ color: "#a1a1a1" }}
									></i>
									<input
										value={credentials.email}
										onChange={onChange}
										placeholder="your.email@example.com"
										required
										type="email"
										id="email"
										className="login-input"
										name="email"
										autoComplete="off"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<label htmlFor="password" className="login-label">
									Password
								</label>
								<div className="input-wrapper">
									<i
										className=" icon-margin fa-solid fa-lock fa-xl"
										style={{ color: "#a1a1a1" }}
									></i>
									<input
										value={credentials.password}
										onChange={onChange}
										placeholder="Enter Your Password"
										required
										type="password"
										id="password"
										className="login-input"
										name="password"
									/>
								</div>
								<div className="input-border"></div>
							</div>
							<div className="form-element">
								<Link className="forget-link" to="forget-password">
									Forget Password?
								</Link>
							</div>
							<button className="login-page-btn">
								Login <i className="fa-solid fa-arrow-right"></i>
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
									Didn't have an account?
									<Link className="forget-link" to="/signup">
										{" "}
										Sign Up
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

export default Login;
