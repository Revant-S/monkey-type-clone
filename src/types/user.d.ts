import { z } from "zod";
import { userSchema } from "../validation/userValidation";
import { Model } from "mongoose";
import { TestState } from "./test";

export interface UserSchema extends z.infer<typeof userSchema> {
    testResults : TestState[]
 }


export interface UserMethods {
    getAuthToken() : string,
}

type UserModel = Model<UserSchema , {} , UserMethods>