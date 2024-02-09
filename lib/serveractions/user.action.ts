"use server";

import UserModel from "@/database/models/user.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  GetUserByIdParams,
  UpdateUserParams,
} from "./shared.types";

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

export async function updateUser(userParams: UpdateUserParams) {
  try {
    connectToDatabase();

    const updatedUser = await UserModel.findOneAndUpdate(userParams);

    return updatedUser;
  } catch (err) {
    throw err;
  }
}
