"use server";

import { connectToDatabase } from "../mongoose";

export async function createQuestion(params: any) {
  try {
    connectToDatabase();
  } catch (err) {
    console.log(err);
  }
}
