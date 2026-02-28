import mongoose from "mongoose";
import process from "process";

const mongoURI = process.env.MONGO_URI;
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
