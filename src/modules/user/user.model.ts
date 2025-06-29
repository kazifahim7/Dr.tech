import { model, Schema } from "mongoose";
import { UserTypes } from "./user.types";


const userSchema = new Schema<UserTypes>({
     name: { type: String, required: true },
     email: { type: String, required: true },
     phone: { type: String, required: true },
     password: { type: String, required: true },
     role: { type: String, enum: ["admin", "user", "doctor"], default: "user" }
}, { timestamps: true });


export const UserModel = model<UserTypes>('User', userSchema);