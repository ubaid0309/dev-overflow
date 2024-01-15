import { Schema, model, models } from "mongoose";

export interface ITagModel extends Document {
  name: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  description: string;
  createdAt: Date;
}

const TagSchema = new Schema<ITagModel>({
  name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, required: true, ref: "Question" }],
  followers: [
    { type: Schema.Types.ObjectId, required: true, default: 0, ref: "User" },
  ],
  description: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
});

const TagModel = models.Tag || model("Tag", TagSchema);
export default TagModel;
