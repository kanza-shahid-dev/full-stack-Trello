import { model, Schema } from "mongoose";
import { UserDocument } from "../types/user.interface";
import validator from "validator";

const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Invalid Email"],
    createIndexes: { unique: true },
  },
});

export default model<UserDocument>("User", userSchema);
