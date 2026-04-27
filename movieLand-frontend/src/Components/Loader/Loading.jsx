// import React from "react";
// import "./Loading.css";
// import loader from "./loader.gif";

// const Loading = () => {
// 	return (
// 		<div className="loader-container">
// 			<img src={loader} alt="loading" />
// 		</div>
// 	);
// };

// export default Loading;

import React from "react";
import "./Loader.css";

const Loading = () => {
	return (
		<div className="loader-overlay">
			<div className="spinner"></div>
			{/* <p>Loading...</p> */}
		</div>
	);
};

export default Loading;
