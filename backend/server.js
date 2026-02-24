import express from "express";
import cors from "cors";
import connectToMongo from "./db.js";
import watchlist from "./routes/watchlist.js";
import authRoutes from "./routes/auth.js";

connectToMongo();

const app = express();
const port = 5000;
app.use(express.json());

// app.use(cors());
app.use(
	cors({
		origin: "http://localhost:5173",
		credentials: true,
		allowedHeaders: ["Content-type", "Authorization"],
		methods: ["GET", "POST", "PUT", "DELETE"],
	}),
);

app.use("/api/auth", authRoutes);
app.use("/api/watchlist", watchlist);

app.get("/", (req, res) => {
	res.send("API running");
});

app.listen(port, () => {
	console.log(`MovieLand is listening at port ${port}`);
});
