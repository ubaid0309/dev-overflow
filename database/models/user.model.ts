import exp from "constants";
import { Document, Schema, model, models } from "mongoose";

export interface IUserModel extends Document {
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
  email: { type: String, unique: true },
  name: { type: String },
  bio: { type: String },
  porfolioLink: { type: String },
  password: { type: String },
  location: { type: String },
  reputation: { type: Number, default: 0 },
  profilePictureUrl: { type: String },
  joinedAt: { type: Date, default: Date.now },
  savedPosts: [{ type: Schema.Types.ObjectId, ref: "Question" }],
});

const UserModel = models.User || model("User", UserSchema);
export default UserModel;
