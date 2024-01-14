import mongoose, { Document, Schema, model, models } from "mongoose";

export interface IQuestionModel extends Document {
  title: string;
  explaination: string;
  views: number;
  upvotes: mongoose.Schema.Types.ObjectId[];
  downvotes: mongoose.Schema.Types.ObjectId[];
  answers: mongoose.Schema.Types.ObjectId[];
  tags: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  author: mongoose.Schema.Types.ObjectId;
}

const QuestionSchema = new Schema<IQuestionModel>({
  title: { type: String, required: true },
  explaination: { type: String, required: true },
  views: { type: Number, required: true, default: 0 },
  upvotes: [{ type: Schema.Types.ObjectId, required: true, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, required: true, ref: "User" }],
  answers: [{ type: Schema.Types.ObjectId, required: true, ref: "Answer" }],
  tags: [{ type: Schema.Types.ObjectId, required: true, ref: "Tag" }],
  createdAt: { type: Date, required: true, default: Date.now },
  author: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

const QuestionModel = models.Question || model("Question", QuestionSchema);
export default QuestionModel;
