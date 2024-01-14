import exp from "constants";
import { Document, Schema, model, models } from "mongoose";

interface IUserModel extends Document {
  clerkId: string;
  username: string;
  name: string;
  bio: string;
  email: string;
  porfolioLink?: string;
  password: string;
  location: string;
  reputation: number;
  profilePictureUrl?: string;
  joinedAt: Date;
  savedPosts: Schema.Types.ObjectId[];
}

const UserSchema = new Schema<IUserModel>({
  clerkId: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  bio: { type: String, required: true },
  porfolioLink: { type: String },
  password: { type: String, required: true },
  location: { type: String, required: true },
  reputation: { type: Number, required: true },
  profilePictureUrl: { type: String },
  joinedAt: { type: Date, required: true, default: Date.now },
  savedPosts: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
