import { Document } from "mongoose";

export interface User {
  email: string;
  username: string;
  passsword: string;
  createdAt: Date;
}

export interface UserDocument extends User, Document {}
