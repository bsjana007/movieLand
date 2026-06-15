import express from "express";
import User from "../models/User.js";
import auth from "../middleware/auth.js";

const router = express.Router();

// GET watched list
router.get("/", auth, async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		if (!user) {
			return res.status(404).json([]);
		}
		res.json(user.watched || []);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
});

// ADD to watched list
router.post("/add", auth, async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		if (!Array.isArray(user.watched)) {
			user.watched = [];
		}

		const exists = user.watched.some((movie) => movie.movieId === req.body.movieId);

		if (!exists) {
			user.watched.push(req.body);
			await user.save();
		}

		res.json(user.watched);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Failed to add to watched list" });
	}
});

// REMOVE from watched list
router.delete("/:movieId", auth, async (req, res) => {
	try {
		const user = await User.findById(req.userId);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}

		user.watched = (user.watched || []).filter(
			(movie) => movie.movieId !== Number(req.params.movieId),
		);
		await user.save();
		res.json(user.watched);
	} catch (error) {
		console.error(error.message);
		res.status(500).json({ message: "Failed to remove from watched list" });
	}
});

export default router;
