"use server";

import UserModel from "@/database/models/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  GetUserByIdParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

export async function getUserById(params: GetUserByIdParams) {
  try {
    connectToDatabase();
    const { userId } = params;

    const user = await UserModel.findOne({ clerkId: userId });

    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function createUser(userParams: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await UserModel.create(userParams);

    return newUser;
  } catch (err) {
    throw err;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    await UserModel.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path);
  } catch (err) {
    throw err;
  }
}

export async function deleteUser(params: DeleteUserParams) {
  try {
    const { clerkId } = params;
    const deletedUser = await UserModel.findOneAndDelete({ clerkId });

    if (!deletedUser) throw new Error("User not found");

    return deletedUser;
  } catch (err) {
    throw err;
  }
}
