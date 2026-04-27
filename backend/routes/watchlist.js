import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// get watchlist

router.get("/", auth, async (req, res) => {
	try {
		// const user = await User.findById(req.userId);

		const user = await User.findById(req.userId);
		if (!user) {
			return res.status(404).json([]);
		}

		// res.json(user?.watchlist || []);
		res.json(user.watchlist);
	} catch {
		res.status(500).json({ message: "Server Error" });
	}
});

// ADD to Watchlist

router.post("/add", auth, async (req, res) => {
	try {
		// console.log("REQ BODY:", req.body);
		// console.log("USER ID:", req.userId);
		const user = await User.findById(req.userId);

		if (!user) {
			console.error("User not found");
			return res.status(404).json({ message: "User not found" });
		}

		if (!Array.isArray(user.watchlist)) {
			user.watchlist = [];
		}
		const exists = user.watchlist.some((movie) => {
			return movie.movieId === req.body.movieId;
		});

		if (!exists) {
			user.watchlist.push(req.body);
			await user.save();
		}

		res.json(user.watchlist);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Failed to add to watchlist" });
	}
});

//remove from watchlist

router.delete("/:movieId", auth, async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		user.watchlist = user.watchlist.filter(
			(movie) => movie.movieId !== Number(req.params.movieId),
		);
		await user.save();
		res.json(user.watchlist);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "failed to remove from watchlist" });
	}
});

export default router;
