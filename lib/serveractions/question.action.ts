"use server";

import QuestionModel from "@/database/models/question.model";
import { connectToDatabase } from "../mongoose";
import TagModel from "@/database/models/tag.model";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
    const { title, tags, author, explaination } = params;
    const question = await QuestionModel.create({
      title,
      explaination,
      author,
    });

    const tagDocuments = [];

    for (const tag of tags) {
      const existingTag = await TagModel.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );

      tagDocuments.push(existingTag._id);
    }

    await QuestionModel.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagDocuments } },
    });
  } catch (err) {
    console.log(err);
  }
}
