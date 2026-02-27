import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import process from "process";
dotenv.config();

// const JWT_SECRET = "bhabanisankar$";
const JWT_SECRET = process.env.JWT_SECRET;
// const DEV_USER_ID = "6978f6c9b8b022328f89d47e";

const auth = (req, res, next) => {
	const authHeader = req.headers.authorization;
	// console.log(authHeader);

	// if (!authHeader) {
	// 	req.userId = DEV_USER_ID;
	// 	return next();
	// }

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		return res.status(401).json({ message: "no auth token" });
	}
	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		// console.log(decoded);

		req.userId = decoded.user.id;
		// console.log(req.userId);

		next();
	} catch (error) {
		console.error("JWT ERROR:", error.message);

		res.status(401).json({
			error: "please authenticate using valid token",
		});
	}
};

export default auth;
