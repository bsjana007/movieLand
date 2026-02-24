import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/watchlistdb";

const connectToMongo = async () => {
	try {
		await mongoose.connect(mongoURI);
		console.log("connected to mongoDB successfully");
	} catch (error) {
		console.error("MongoDB connection failed:", error);
	}
};

export default connectToMongo;
