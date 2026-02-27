import mongoose from "mongoose";
// import dotenv from "dotenv";
// import process from "process";
// dotenv.config({ path: "./env" });

// const mongoURI = process.env.MONGO_URI;
const mongoURI = "mongodb://localhost:27017/watchlistdb";
// console.log(mongoURI);
// console.log(process.env.MONGO_URI);

const connectToMongo = async () => {
	try {
		await mongoose.connect(mongoURI);
		console.log("connected to mongoDB successfully");
	} catch (error) {
		console.error("MongoDB connection failed:", error);
	}
};

export default connectToMongo;
