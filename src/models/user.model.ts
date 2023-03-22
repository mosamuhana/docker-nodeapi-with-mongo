import { Schema, model } from "mongoose";
import { hashPassword } from "../utils";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
});

UserSchema.pre<IUser>("save", async function (next) {
  try {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    next();
  } catch (error: any) {
    next(error);
  }
});

export const User = model<IUser>("User", UserSchema);
