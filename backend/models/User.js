import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		watchlist: [
			{
				movieId: Number,
				title: String,
				poster_path: String,
				vote_average: Number,
				release_date: String,
				media_type: String,
			},
		],
	},
	{ timestamps: true },
);

const User = mongoose.model("user", UserSchema);
export default User;
