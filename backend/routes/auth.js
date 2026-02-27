import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import dotenv from "dotenv";
import process from "process";
// dotenv.config();

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// SIGNUP

router.post(
	"/signup",
	[
		body("name", "Enter a valid name").isLength({ min: 3 }),
		body("email", "Enter a valid mail").isEmail(),
		body("password", "Password must be of 8 characters").isLength({ min: 8 }),
	],
	async (req, res) => {
		let success = false;
		//if there are errors, return bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ success, errors: errors.array() });
		}
		try {
			let user = await User.findOne({ email: req.body.email });
			if (user) {
				return res.status(400).json({
					success,
					error: "sorry user with this email is already exists",
				});
			}

			const salt = await bcrypt.genSalt(10);
			const securedPass = await bcrypt.hash(req.body.password, salt);

			//create new user
			user = await User.create({
				name: req.body.name,
				email: req.body.email,
				password: securedPass,
				watchlist: [],
			});

			const data = {
				user: {
					id: user._id,
				},
			};
			const token = jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });
			res.status(200).json({
				token,
			});
		} catch {
			res.status(500).json({ message: "SIgnup Failed" });
		}
	},
);

//login
router.post(
	"/login",
	[
		body("email", "Enter a valid mail").isEmail(),
		body("password", "Password can not be blank").exists(),
	],
	async (req, res) => {
		// let success = false;
		//if there are errors, return bad request and the errors
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}
		const { email, password } = req.body;
		try {
			const user = await User.findOne({ email });
			if (!user) {
				res.status(400).json({
					error: "Please try to login with coorect Credentials",
				});
			}
			const passwordCompare = await bcrypt.compare(password, user.password);
			if (!passwordCompare) {
				return res
					.status(400)
					.json({ error: "Please try to login with coorect Credentials" });
			}
			const data = {
				user: {
					id: user._id,
				},
			};
			const token = jwt.sign(data, JWT_SECRET, { expiresIn: "7d" });
			res.json({
				token,
				user: {
					id: user._id,
					email: user.email,
				},
			});
		} catch {
			res.status(500).json({ message: "Login Failed" });
		}
	},
);

export default router;
